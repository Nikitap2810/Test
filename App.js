import React from "react";


import Test from "./src/screen/Test";


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

      )
      
    }
}
