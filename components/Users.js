import React, { useEffect, useState,useLayoutEffect } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";




const User = ({navigation}) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users");
      const data = await res.json();
      setUsers(data.data);
    } catch (ex) {
      setUsers([{ message: "Error, users not found" }]);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const Item = ({ title, avatar, id }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('profile',{params:{id:id}})}>
      <View style={styles.item}>
        <Image source={{ uri: avatar }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <Item title={item.email} avatar={item.avatar} id={item.id} />
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Text style={styles.btnAbout} onPress={()=>navigation.navigate('about')}  > About </Text>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.first_name}
      />
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CBCBCB",
    flex: 1,
    marginTop:  0,
  },
  item: {
    backgroundColor: "#FFF",
    borderRightColor: "#FF0000",
    borderRadius: 20,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  btnAbout:{
    backgroundColor:"#FFF",
    fontWeight:'bold',
    color:"#000",
    paddingRight:10
  }
});

export default User;
