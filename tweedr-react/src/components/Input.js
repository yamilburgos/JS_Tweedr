import React, { Component } from 'react';
import axios from 'axios';


export default class Input extends Component {
  render() {
    return (
     
        <div className="inputDiv">
          <input type="text" className="input" /> <button className="button">SUBMIT</button>
        </div>
      
    );
  }
}