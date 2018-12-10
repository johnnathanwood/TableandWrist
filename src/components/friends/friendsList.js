import React, { Component } from "react"

import DataManager from "../../module/DataManager";

export default class FriendsList extends Component {
  credentials = JSON.parse(sessionStorage.getItem('credentials'))

  state = {

  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  componentDidMount() {
    this.props.findFriends(this.credentials)
  }

  addRelationship = () => {
    let currentUserId = this.credentials
    let userIdArray = []
    userIdArray.push(this.props.users.find(user => user.email === this.state.addFriend))
    let object = {
        userId: currentUserId,
        friendId: userIdArray[0].id
      }
    return DataManager.saveData("relationships", object)
      .then(() => this.props.findFriends(currentUserId))
  }

  removeRelationship = () => {
    let currentUserId = this.credentials
    console.log(this.props.relationships(currentUserId))
  }

  render() {
    return (
      <React.Fragment>
        <section className="friendList">
          <p>Friend List:</p>
          {
            this.props.friendsArray.map(friend => {
              return (<div className="friend-Group" key={friend.id}>
                <div>
                  <p>{friend.email}</p>
                </div>
              </div>
              )
            })
          }
        </section>
        <section className="addFriend">
          <p>Add a friend:</p>
          <input
            onChange={this.handleFieldChange}
            className="showInput"
            type="text"
            id="addFriend" />
          <button type="submit" onClick={this.addRelationship} className="btn btn-primary">Submit</button>
        </section>
        <section className="removeFriend">
          <p>Remove a friend:</p>
          <input
            onChange={this.handleFieldChange}
            className="showInput"
            type="text"
            id="friend" />
          <button type="submit" onClick={this.removeRelationship} className="btn btn-primary">Submit</button>
        </section>
      </React.Fragment>
    )
  }
}
