import React, { Component } from 'react';

export default class TweedrFeed extends Component {
  displayAllPosts() {
    this.testing = [];

    for (let i = 0; i < this.props.dataList.length; i++) {
      this.testing.push(<p key ={i}>{this.props.dataList[i].posts}</p>);
    }

    // this.testing = this.props.dataList.map((data, num) => {
    //     return (<p key={num}>{data}</p>);
    // })
    
    console.log(this.testing);
    return this.testing;
  }

  render() {
    return (     
        <div>
        	<div className="TweedrFeed">
        		<h1>tweedr feed</h1>
                {this.displayAllPosts()}
        	</div>  
        </div>
    );
  }
}