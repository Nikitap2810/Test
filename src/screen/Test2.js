import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList,ImageBackground } from "react-native";
import { ActivityIndicator } from "react-native-paper";

function ApiCall() {
  const [isLoading, setIsLoading] = useState(true);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search/authors.json?q=j%20k%20rowling")
      .then((response) => response.json())
      .then((json) => setAuthor(json.docs))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);
console.log(author)
  return (
    <ImageBackground style={{ flex:1,alignItems: 'center',justifyContent:"center"}} 
    source={{uri:"https://img.lovepik.com//photo/50017/1384.jpg_860.jpg"}}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginTop:10 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={author}
            renderItem={({ item }) => {
              return (
              <View style={{margin:10,padding:10,backgroundColor:"#f2f2f2",borderRadius:20}}>
                <Text style={{color:"black",fontSize:16}}>"key" : {item.key}</Text> 
<Text style={{color:"black",fontSize:16}}>"text" : {item.text}</Text>
<Text style={{color:"black",fontSize:16}}>"type" : {item.type}</Text>
<Text style={{color:"black",fontSize:16}}>"name" : {item.name}</Text>
<Text style={{color:"black",fontSize:16}}>"alternate_names" : {item.alternate_names}</Text>
<Text style={{color:"black",fontSize:16}}>"birth_date" : {item.birth_date}</Text>
<Text style={{color:"black",fontSize:16}}>"top_work" : {item.top_work}</Text>
<Text style={{color:"black",fontSize:16}}>"work_count" : {item.work_count}</Text>
<Text style={{color:"black",fontSize:16}}>"top_subjects" : {item.top_subjects}</Text>
<Text style={{color:"black",fontSize:16}}>"_version_" : {item._version_}</Text>

</View>
)
              }}
          />
        </View>
      )}
    </View>
    </ImageBackground>
  );

 
}
export default ApiCall;