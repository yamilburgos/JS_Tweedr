import React, { Component } from 'react';
import axios from 'axios';

export default class TweedrFeed extends Component {
  constructor(props) {
    super(props);
  }

  displayAllPosts() {
    console.log("???");
    // axios.get(example.url).then((postsData) => {
    //    this.setState({});
    // });
  }

  render() {
    return (     
        <div>
        	<div className="TweedrFeed">
        	<h1>tweedr feed</h1>
          {this.props.testing}
        	</div>  
        </div>
    );
  }
}