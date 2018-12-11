
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./profilePage.css"
import { Comment} from 'semantic-ui-react'
import EditProfileModal from "./editProfileModal";
import ProfileCollection from "../watchbox/showWatchesonProfile";

export default class ProfilePage extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
        users: []
    }
    
    componentDidMount() {
        const newState = {}
        DataManager.getAllByUser("users", this.credentials)
      .then(allUsers => {
        newState.users = allUsers
      })
      .then(() =>
        this.setState(newState))
  }

    render() {
    console.log(this.props.users)
        return (
            <React.Fragment>
                <h1>Hello</h1>
                <div className="profile-list">
                <section className="users">
                    {this.props.users.map(users =>
                            <div className="eachProfile" key={users.id}>
                                <div id={`profile--${users.id}`} key={users.id} className="ProfileCard">
                                    <figure className="snip1515">
                                        <div className="profile-image"><img src={users.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                        <figcaption>
                                            <h3>Name:{users.name}</h3>
                                            <h4>Gender: {users.gender}</h4>
                                            <h4>Age: {users.age}</h4>
                                            <p>About Me: {users.aboutMe}</p>
                                        </figcaption>
                                    </figure>
                                    <Comment.Actions>
                                        <EditProfileModal {...this.props} userId={users.id} users={users} />           
                                    </Comment.Actions>
                                </div>
                            <ProfileCollection {...this.props}/>
                            </div>

                        )
                    }
                </section>
                    </div>
            </React.Fragment>
        )
    }


}