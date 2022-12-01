import React from "react";

import NewProject from "./src/screen/homepg";
import Home from "./src/screen/reduxexample/home";
import HomePage from "./src/screen/technical/Loginpage";
//import Home from "./src/screen/r";
//import Firstpage from "./src/screen/technical/Loginpage";
import Test from "./src/screen/Test";
import FirstPage from "./src/screen/reduxexample/firstpg";
import TodoList from "./src/screen/TodoList";

export default class App extends React.Component{
    constructor(){
      super()
        console.log("constructed")
    }

    componentDidMount(){
      console.log("componentDidMount is called")
      
    }

    render(){
      console.log("render is called")
      
      return(

        <Test/>

      // <Provider store={store}>
      // <FirstPage/>
      //   </Provider>
   
          
      
      )
      
    }
}
