import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react'


export default class Likes extends Component{

  constructor(props){

    super(props);
    this.state ={
      likes: null,
      updated: false
    }
    this.updateLikes = this.updateLikes.bind(this);
  }
  
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
}

  updateLikes =() => { this.setState({ active: !this.state.active })

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
    const { active } = this.state
    return(
      <div>
        <Button as='div' labelPosition='right'>
      <Button  size="mini" icon toggle active={active} onClick={this.updateLikes}>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
      {this.state.likes}
      </Label>
    </Button>
      </div>
    );

  }


}

