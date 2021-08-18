import React from 'react';
import { Text , View,StyleSheet} from 'react-native'



const About = ()=>{
    return (
        <View>
           <Text style={styles.h1}> About </Text>
           <Text style={styles.container}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum autem laboriosam rerum odio tempore fugiat, nisi fuga asperiores accusantium a aspernatur impedit quaerat, quae quos. Nemo aspernatur voluptatibus ipsum error. Perferendis dolores a mollitia maiores magni, sapiente expedita consequuntur dolorem odio dignissimos qui nobis ut corporis nisi eveniet, praesentium commodi? </Text>
       </View>
    )
}

const styles = StyleSheet.create({
    h1:{
        fontWeight:'bold',
        padding:20
    },
    container:{
        padding:20
    }
})

export default About;