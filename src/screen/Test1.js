
import React from "react";
import { View, Text , ImageBackground} from 'react-native';

function OutPut( {route} ) {
    

        return(
            <ImageBackground style={{ flex:1,alignItems: 'center',justifyContent:"center"}} 
    source={{uri:"https://i.stack.imgur.com/jGlzr.png"}}>
     
      
   

            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                <Text style={{fontSize:25,color:"black",marginBottom:50}}>Welcome My Details are</Text>
               
                <Text style={{fontSize:25,color:"black"}}> Name: {route.params.nameKey}</Text>
                <Text style={{fontSize:25,color:"black"}}> Date of Birth: {route.params.birthKey}</Text>
                <Text style={{fontSize:25,color:"black"}}> Email: {route.params.emailKey}</Text>
                
            </View></ImageBackground>
        );
      
       
  
    };

    
    
export default OutPut;