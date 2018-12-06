
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./profilePage.css"




export default class Profile extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
        profiles: []
    }


    findUserName = users => {
        return this.props.users.find(user => user.id === users.userId).username
    }

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    componentDidMount() {
        const newState = {}
        DataManager.getAllByUser("profiles", this.credentials.id)
            .then(allProfiles => {
                newState.profiles = allProfiles
            })
            .then(() =>
                this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <section className="profilePage">
                {
                    this.props.profiles.map(profiles =>
                        <div className="eachProfile" key={profiles.id}>
                            <div id={`profile--${profiles.id}`} key={profiles.id} className="ProfileCard">
                                <figure class="snip1515">
                                    <div class="profile-image"><img src={profiles.profileImg} alt="sample47" /></div>
                                    <figcaption>
                                        <h3>Username:{this.findUserName(profiles)}</h3>
                                        <h3>Name:{profiles.name}</h3>
                                        <h4>Gender: {profiles.gender}</h4>
                                        <h4>Age: {profiles.age}</h4>
                                        <p>About Me: {profiles.aboutMe}</p>
                                        <div class="icons"><a href="#"><i class="ion-social-reddit"></i></a>
                                            <a href="#"> <i class="ion-social-twitter"></i></a>
                                            <a href="#"> <i class="ion-social-vimeo"></i></a>
                                        </div>
                                    </figcaption>
                                </figure>

                            </div>
                        </div>
                    )

                }
                </section>
            </React.Fragment>
        )
    }


}