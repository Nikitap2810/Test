import React,  {useState, useRef} from 'react';
//import { StyleSheet } from "react-native";
import {StyleSheet, View,  Text,Button,Image,TextInput,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OutPut from "./Test1";
import ApiCall from "./Test2";
//import styles from 'react-native-listitem/styles';


function HomeScreen({navigation}) {
  const [userName, setUserName] = useState('');
  const [userBirth, setUserBirth] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const birthref = useRef();
  const emailref = useRef();
    
  return (
    <View style={{ flex: 1, backgroundColor:"#f33333"}}>
        
        <View style={{flex:0.3,margin:"5%",borderRadius:20,alignItems:"center"}}>
                <Image source={{uri:"https://w7.pngwing.com/pngs/811/233/png-transparent-computer-icons-user-login-desktop-others-blue-computer-prints-thumbnail.png"}}  
            style={{flex:1,borderRadius:20,width:"60%"}}/>  
            </View>

       

       <View style={{ flex:0.5,justifyContent:"center",alignItems:"center"}}>

        <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
          <Text style={{flex:0.3,fontSize:25,color:"white",marginLeft:"5%"}}> Name: </Text>
        <TextInput style={{flex:0.8,borderWidth:1,height:40,width:"60%",borderColor:"black",margin:"5%",
            backgroundColor:"white",borderRadius:5,paddingLeft:10}} 
            placeholder="Enter Name" onChangeText={(username) => setUserName(username)}
            onSubmitEditing={() => { birthref.current.focus(); }}
            /></View>

            <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <Text style={{flex:0.3,fontSize:20,color:"white",marginLeft:"5%"}}>Date of Birth: </Text>
            <TextInput style={{flex:0.8,borderWidth:1,width:"60%",borderColor:"black", margin:"4%",
            backgroundColor:"white",borderRadius:5,height:40,paddingLeft:10}} 
            placeholder=" Enter DD-MM-YYYY" keyboardType="numeric"
            onChangeText={(userBirth) => setUserBirth(userBirth)}
            ref={birthref}
            onSubmitEditing={() => { emailref.current.focus(); }}
            />
            

            </View>

          <View style={{flex:1,flexDirection:"row",alignItems:"center"}}>
          <Text style={{flex:0.3,fontSize:25,color:"white",marginLeft:"5%"}}> Email: </Text>
            <TextInput style={{flex:0.8,borderWidth:1,width:"60%",borderColor:"black",margin:"5%",
            backgroundColor:"white",borderRadius:5,height:40,paddingLeft:10}} 
            placeholder=" Enter Email id" keyboardType="email-address" 
            onChangeText={(userEmail) => setUserEmail(userEmail)}
            ref={emailref}
            /></View>
             
        </View>
       
       <View style={{flex:0.2,marginRight:30,marginLeft:30,justifyContent:"space-around"}}>
        <TouchableOpacity style={{height:40,
        width:"100%",
        backgroundColor:"#f88fff",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"}}
         onPress={() => navigation.navigate('Outputpage', {
            nameKey: userName,
            birthKey: userBirth,
            emailKey: userEmail,
          } )}
        >
            <Text style={{fontWeight:"600"}}>Click to go next page</Text>
        </TouchableOpacity>
    
          <TouchableOpacity style={{height:40,
        width:"100%",
        backgroundColor:"#f88f8f",
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center"}}
          onPress={() => navigation.navigate('Apipage')}
          >
          <Text style={{fontWeight:"600"}}>Click to go Api Page</Text>
          </TouchableOpacity>
            
       </View>
      
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Loginpage" component={HomeScreen} options={{
          title: 'Home Page', 
        }}  />
        <Stack.Screen name="Outputpage" component={OutPut} options={{
          title: 'Output Page',
        }} />
        <Stack.Screen name="Apipage" component={ApiCall} options={{
          title: 'ApiCall Page',
        }} />
    
        
    
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

