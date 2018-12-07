
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./confirmProfile.css"

export default class Confirm extends Component {
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
                <section className="profiles">
                    {
                        this.state.profiles.map(profiles =>
                            <aside className="profile-card">

                                <header>

                                    {/* <!-- here’s the avatar --> */}
                                    <a>
                                        <img src={profiles.uploadedFileCloudinaryUrl} />
                                    </a>
                                    {/* <!-- the username --> */}
                                    <h1>{profiles.name}</h1>
                                    {/* <!-- and role or location --> */}
                                    <h2>{profiles.gender},{profiles.age}</h2>

                                </header>

                                {/* <!-- bit of a bio; who are you? --> */}
                                <div className="profile-bio">

                                    <p>{profiles.aboutMe}</p>

                                </div>

                                {/* <!-- some social links to show off --> */}
                            </aside>


                        )

                    }
                </section>
            </React.Fragment>
        )
    }


}