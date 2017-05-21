import React, { Component } from 'react';
import axios from 'axios';

export default class TweedrFeed extends Component {
  constructor(props) {
    super(props);
  }

  displayAllPosts() {
    // axios.get(example.url).then((postsData) => {
    //    this.setState({});
    // });

    console.log("has this been called from TweedrFeed?");
    return this.props.dataList.map((data, num) => {
        return (<h1 key={num}>{data}</h1>);
    })

   // return (this.props.dataList);
  }

  render() {
    return (     
        <div>
        	<div className="TweedrFeed">

          {this.props.tester}
          {this.displayAllPosts()}

        		<h1>tweedr feed</h1>

        	</div>  
        </div>
    );
  }
}