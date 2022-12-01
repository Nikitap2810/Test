
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';


function Calculator() {
    const [num1,setNum1] = useState("")
    const [num2,setNum2] = useState("")
    const [operation,setOperation] = useState("")
    const [currentSelected, setCurrSeleted] = useState("")
    

    const onPress = (n) => { console.log("onpress",n)
        if (currentSelected == "num1") {
            HandleNum1(n)
        } else if (currentSelected == "num2") {
            HandleNum2(n)
        } else if (currentSelected == "operation") {
            HandleOperation(n)
        }
    }

    const HandleNum1 = (n) => {
        let tnum1 = num1
        tnum1+=n
        setNum1(tnum1)
    }

    const HandleNum2 = (n) => {
        let tnum2 = num2
        tnum2+=n
        setNum2(tnum2)
    }

    const HandleOperation = (n) => {
       
        setOperation(n)
    }
    const getTotal = () => {
        if (num1 && num2 && operation){
            let total;
            switch(operation) {
                case "+": 
                total = parseInt(num1) + parseInt(num2);
               // console.log(`${num1} + ${num2} = ${total}`);
                break;
                case "-": 
                total = parseInt(num1) - parseInt(num2);
                break;
                case "*": 
                total = parseInt(num1) * parseInt(num2);
                break;
                case "/": 
                total = parseInt(num1) / parseInt(num2);
                break;
            }
            return(total);
        }
    } 
     const onclick = () => {
        if (currentSelected == "num1") {
            let newnum1 = num1
            let temp = newnum1.toString()
            var result = temp.slice(0, - 1);
            setNum1(result)

        } else if (currentSelected == "num2") {
            /*let newnum2 = num2
            let temp = newnum2.toString()
            var result = temp.slice(0, - 1);
            setNum2(result)
            */ let newnum2 = num2
            let tem = newnum2.toString()
            var result = tem.substr(0, tem.length - 1);
            setNum2(result) 
        }
     }

        return(
            <View style={{flex:1}}>
                <View style={{flex:0.3,paddingTop:50}}>
                <View style={{flex:1,flexDirection:"row"}}>
                
                <View style={{flex:1,marginRight:10,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:15, backgroundColor:currentSelected=="num1"? "pink": "white"}}>
                <TouchableOpacity onPress={() => setCurrSeleted("num1")}>
                <Text style={{fontSize:30,color:"black",alignSelf:"center"}}>Num1: {num1}</Text>
                </TouchableOpacity></View>
                
                <View style={{flex:1,marginRight:10,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:15,backgroundColor:currentSelected=="num2"? "pink": "white"}}>
                <TouchableOpacity onPress={() => setCurrSeleted("num2")}>
                <Text style={{fontSize:30,color:"black"}}>Num2: {num2}</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,justifyContent:"center",alignItems:"center",borderRadius:15,backgroundColor:currentSelected=="operation"? "pink": "white"}}>
                <TouchableOpacity onPress={() => setCurrSeleted("operation")}>
                <Text style={{fontSize:23,color:"black"}}>Operation: {operation}</Text></TouchableOpacity>
                </View>

                </View>
                
                <View style={{flex:1,justifyContent:"center"}}>
                <Text style={{fontSize:25,color:"black"}}>Total: {getTotal()}</Text>
                </View>
                

                </View>
                <View style={{flex:0.7}}>
                <View style={{flex:1,flexDirection:"row"}}>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(1)}}>
                    <Text style={{fontSize:50}}>1</Text>
                </TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(2)}}>
                    <Text style={{fontSize:50}}>2</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(3)}}>
                    <Text style={{fontSize:50}}>3</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress("+")}}>
                    <Text style={{fontSize:50}}>+</Text></TouchableOpacity>
                </View>
                </View>

                <View style={{flex:1,flexDirection:"row"}}>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(4)}}>
                    <Text style={{fontSize:50}}>4</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(5)}}>
                    <Text style={{fontSize:50}}>5</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(6)}}>
                    <Text style={{fontSize:50}}>6</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress("-")}}>
                    <Text style={{fontSize:50}}>-</Text></TouchableOpacity>
                </View>
                </View>

                <View style={{flex:1,flexDirection:"row"}}>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(7)}}>
                    <Text style={{fontSize:50}}>7</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(8)}}>
                    <Text style={{fontSize:50}}>8</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(9)}}>
                    <Text style={{fontSize:50}}>9</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress("*")}}>
                    <Text style={{fontSize:50}}>*</Text></TouchableOpacity>
                </View>
                </View>

                <View style={{flex:1,flexDirection:"row"}}>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress(0)}}>
                    <Text style={{fontSize:50}}>0</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onclick()}}>
                    <Text style={{fontSize:50}}>C</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={()=>{onPress("/")}}>
                    <Text style={{fontSize:50}}>/</Text></TouchableOpacity>
                </View>
                <View style={{flex:1,borderWidth:1,alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={getTotal()}>
                    <Text style={{fontSize:50}}>=</Text>
                </TouchableOpacity>
                </View>
                </View>

              
                </View>
                
                
            </View>
        );
      
       
  
    };

    
    
export default Calculator;