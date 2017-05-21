import React, { Component } from 'react';
import axios from 'axios';

export default class Input extends Component {
  submitTweedr() {
    this.givenInput = document.querySelector("#textValue").value;

    if(this.givenInput !== "") {
    // axios.post(/example, {
    //    posts: this.givenInput
    // }).then(function (response) { 
          // console.log("Something was sent"); 
        // });
      console.log(this.givenInput);
      document.querySelector("#textValue").value = "";
    }
  }

  render() {
    return (  
        <div className="inputDiv">
          <input type="text" id="textValue" className="input" /> 
          <button onClick={() => this.submitTweedr()} className="button">Tweed It!</button>
        </div>      
    );
  }
}