import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TweedrFeed from './components/TweedrFeed';


import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {testing: "3"};
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tweedr</h2>
          {this.state.testing} 
        </div>
          <Header />
          <Input />
          <TweedrFeed 
            testing={this.state.testing}
          />
      </div>
    );
  }
}