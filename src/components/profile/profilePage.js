
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./profilePage.css"
import { Comment} from 'semantic-ui-react'
import EditProfileModal from "./editProfileModal";
import ProfileCollection from "../watchbox/showWatchesonProfile";

export default class ProfilePage extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))  
        return (
            <React.Fragment>
                <h1>Hello {credentials.username}</h1>
                {console.log(this.credentials.id)}
                <div className="profile-list">
                <section className="users">
                    
                            <div className="eachProfile" key={this.props.user.id}>
                                <div id={`profile--${this.props.user.id}`} key={this.props.user.id} className="ProfileCard">
                                    <figure className="snip1515">
                                        <div className="profile-image"><img src={this.props.user.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                        <figcaption>
                                            <h3>Name:{this.props.user.name}</h3>
                                            <h4>Gender: {this.props.user.gender}</h4>
                                            <h4>Age: {this.props.user.age}</h4>
                                            <p>About Me: {this.props.user.aboutMe}</p>
                                        </figcaption>
                                    </figure>
                                    {
                                                this.props.user.id === credentials.id ? (
                                                    <React.Fragment >
                                                        <div className="container">
                                                            <Comment.Actions>
                                                                <Comment.Actions>
                                                                    <EditProfileModal {...this.props} userId={this.props.user.id} users={this.props.user} />           
                                                                </Comment.Actions>
                                                            </Comment.Actions>
                                                        </div>
                                                    </React.Fragment>
                                                ) : ""
                                            }
                                </div>
                            <ProfileCollection {...this.props}/>
                            </div>

                        
                    
                </section>
                    </div>
            </React.Fragment>
        )
    }


}