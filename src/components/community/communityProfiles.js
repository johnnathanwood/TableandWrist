import React, { Component } from "react"
import DataManager from "../../module/DataManager"

export default class CommunityProfiles extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
    }

    componentDidMount() {
        const newState = {}
        DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
        this.props.findFriends(this.credentials)
      })
      .then(() =>
        this.setState(newState))
  }


  addRelationship = (taco) => {
    let currentUserId = this.credentials
    console.log("currentUserId",currentUserId)
    let userIdArray = []
    userIdArray.push(this.props.users.forEach(users => users.id === taco))
    // console.log("userIdArray",userIdArray)
    console.log(userIdArray)
    let object = {
        userId: currentUserId.id,
        friendId: taco
      } 
      console.log("object",object)
    return DataManager.saveData("relationships", object)
  }

  render() {
        return (
            <React.Fragment>
                <div className="profile-list">
                <section className="profiles">
                    {this.props.users.map(users =>
                            <div className="eachProfile" key={users.id} id={users.id}>
                                <div  key={users.id} className="ProfileCard">
                                    <figure className="snip1515">
                                        <div className="profile-image"><img src={users.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                        <figcaption>
                                            <h3>Name:{users.name}</h3>
                                            <h4>Gender: {users.gender}</h4>
                                            <h4>Age: {users.age}</h4>
                                            <p>About Me: {users.aboutMe}</p>
                                        </figcaption>
                                        <button type="submit" onClick={() => {this.addRelationship(users.id)}} className="btn btn-primary">Submit</button>
                                    </figure>
                                </div>
                            </div>
                        )
                    }
                </section>
                    </div> 
            </React.Fragment>
        )
    }


}