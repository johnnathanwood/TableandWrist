
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./profilePage.css"
import { Comment} from 'semantic-ui-react'
import EditProfileModal from "./editProfileModal";




export default class ProfilePage extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
        profiles: []
    }

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    componentDidMount() {
        const newState = {}
        DataManager.getAllByUser("profiles", this.credentials.id)
            .then(allProfiles => {
                newState.profiles = allProfiles
                console.log(allProfiles)
            })
            .then(() =>
                this.setState(newState))
    }

    render() {
console.log(this.props.profiles)
        return (
            <React.Fragment>
                <h1>Hello</h1>
                <section className="profiles">
                    {
                        this.props.profiles.map(profiles =>
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
                            </div>

                        )

                    }
                </section>
                {/* <section className="profiles">
                    {
                        this.state.profiles.map(profiles =>
                            <aside className="profilecard">
                                <header>
                                    <a>
                                        <img src={profiles.uploadedFileCloudinaryUrl} />
                                    </a>
                                    <h1>{profiles.name}</h1>
                                    <h2>{profiles.gender},{profiles.age}</h2>
                                </header>
                                <div className="profilebio">
                                    <p>{profiles.aboutMe}</p>
                                </div>
                            </aside>
                        )

                    }
                </section> */}
            </React.Fragment>
        )
    }


}