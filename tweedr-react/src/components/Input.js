import React, { Component } from 'react';
import axios from 'axios';

export default class Input extends Component {
  submitTweedr() {
    this.givenInput = document.querySelector("#textValue").value;

    if(this.givenInput !== "") {
     axios.post("https://tweedrapp.herokuapp.com/createTweed", {
        post: this.givenInput
     }).then(function (response) { 
           console.log("Something was sent", response); 
         });
      console.log(this.givenInput);
      document.querySelector("#textValue").value = "";
    }
  }

  render() {
    return (  
        <div className="inputDiv">
          <input type="text" id="textValue" placeholder="What ya Thinking?" className="input" /> 
          <button onClick={() => this.submitTweedr()} className="button">Tweed It!</button>
        </div>      
    );
  }
}