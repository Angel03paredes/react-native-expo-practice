import React,{useEffect,useState} from 'react';
import {View,SafeAreaView,StyleSheet,Text,Image} from 'react-native'

const Profile = (props)=>{
    const id = props.route.params.params.id;
    const [user, setUser] = useState([]);

    const getUser = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users/" + id);
        const data = await res.json();
        setUser(data.data);
      } catch (ex) {
        setUser([{ message: "Error, users not found" }]);
      }
    };
  
    useEffect(() => {
      getUser();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Image style={styles.image} source={{uri:user.avatar}} />

                <Text>{user.email}</Text>
                <Text>{user.first_name} {user.last_name}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor:'#CBCBCB',
       
    },
    card:{
        backgroundColor:'#FFF',
        alignItems:'center',
        padding:50
    },
    image:{
        width:200,
        height:200,
        borderRadius:200
    }
}) 

export default Profile;