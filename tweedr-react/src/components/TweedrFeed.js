import React, { Component } from 'react';

export default class TweedrFeed extends Component {
  displayAllPosts() {
    return this.testing = this.props.dataList.map((data, num) => {
        return (<p key={num}>{data.post}</p>);
    });
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