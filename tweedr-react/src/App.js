import React, { Component } from 'react';
import './App.css';

// IMPORT AXIOS
import axios from 'axios';

// IMPORT COMPONENTS
import Header from './components/Header';
import Input from './components/Input';
import TweedrFeed from './components/TweedrFeed';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tweedr</h2>  
        </div>
        <Header />
          <Input />
          <TweedrFeed />
      </div>
    );
  }
}