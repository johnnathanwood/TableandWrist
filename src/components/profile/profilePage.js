
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./profilePage.css"




export default class ProfilePage extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
        profiles: []
    }

    // findUserName = profiles => {
    //     return this.props.users.find(user => user.id === profiles.userId).username
    // }

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
        
        return (
            <React.Fragment>
                <h1>Hello</h1>
                <section className="profiles">
                {
                    this.state.profiles.map(profiles => 
                        <div className="eachProfile" key={profiles.id}>
                            <div id={`profile--${profiles.id}`} key={profiles.id} className="ProfileCard">
                                <figure className="snip1515">
                                    <div className="profile-image"><img src={profiles.profileImg} alt="sample47" /></div>
                                    <figcaption>
                                        {/* <h3>Username:{this.findUserName(profiles)}</h3> */}
                                        <h3>Name:{profiles.name}</h3>
                                        <h4>Gender: {profiles.gender}</h4>
                                        <h4>Age: {profiles.age}</h4>
                                        <p>About Me: {profiles.aboutMe}</p>
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