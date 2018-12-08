import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react'

export default class Likes extends Component{

  constructor(props){

    super(props);
    this.state ={
      likes: null,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {

    if(!this.state.updated) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          updated: true
        };
      });
    } else {

      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          updated: false
        };
      });
    }


  }

  render(){

    return(
      <div>
        <Icon onClick={this.updateLikes} name='heart outline' />
        <p>{this.state.likes}</p>
      </div>
    );

  }


}

