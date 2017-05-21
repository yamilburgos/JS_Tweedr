import React, { Component } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TweedrFeed from './components/TweedrFeed';


import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {allPosts: []};
  }

  componentDidMount() {
     axios.get("https://tweedrapp.herokuapp.com/getTweeds").then((allData) => {
       this.setState({ allPosts: allData.data.tweeds });
     });
  }

  testingThisList() {
    console.log(this.state.allPosts);
    return ["Is this an example", "Yes it is", "Cool", "That's right!"];
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Tweedr</h2>
        </div>
          <Header />
          <Input />
          <TweedrFeed 
            dataList={this.testingThisList()}
          />
      </div>
    );
  }
}