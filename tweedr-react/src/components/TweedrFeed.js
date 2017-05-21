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
        return (<p key={num}>{data}</p>);
    })

   // return (this.props.dataList);
  }

  render() {
    return (     
        <div>
        	<div className="TweedrFeed">
        		<h1>tweedr feed</h1>
                {this.displayAllPosts()}
                {this.props.tester}
        	</div>  
        </div>
    );
  }
}