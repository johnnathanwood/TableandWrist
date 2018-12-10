
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./profilePage.css"
import { Comment} from 'semantic-ui-react'
import EditProfileModal from "./editProfileModal";
import ProfileCollection from "../watchbox/showWatchesonProfile";

export default class ProfilePage extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
        profiles: []
    }
    
    componentDidMount() {
        const newState = {}
        DataManager.getAll("profiles", this.credentials.id)
      .then(allProfiles => {
        newState.profiles = allProfiles
      })
      .then(() =>
        this.setState(newState))
  }

    render() {
    console.log(this.props.profiles)
        return (
            <React.Fragment>
                <h1>Hello</h1>
                <div className="profile-list">
                <section className="profiles">
                    {this.props.profiles.map(profiles =>
                            <div className="eachProfile" key={profiles.id}>
                                <div id={`profile--${profiles.id}`} key={profiles.id} className="ProfileCard">
                                    <figure className="snip1515">
                                        <div className="profile-image"><img src={profiles.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                        <figcaption>
                                            <h3>Name:{profiles.name}</h3>
                                            <h4>Gender: {profiles.gender}</h4>
                                            <h4>Age: {profiles.age}</h4>
                                            <p>About Me: {profiles.aboutMe}</p>
                                        </figcaption>
                                    </figure>
                                    <Comment.Actions>
                                        <EditProfileModal {...this.props} profileId={profiles.id} profiles={profiles} />           
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