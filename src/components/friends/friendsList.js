import React, { Component } from "react"



export default class FriendsList extends Component {
  credentials = JSON.parse(sessionStorage.getItem('credentials'))

  state = {

}


  render() {
      console.log(this.props.relationships)
    return (
        <React.Fragment>
            <button onClick={() => this.props.grabFriends()}></button>
            {
               this.props.relationships.map(friend => 
                <h1>{friend.username}</h1>
                )
            }
    </React.Fragment>

    )
  }
}
