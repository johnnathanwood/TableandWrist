
import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./confirmProfile.css"

export default class Confirm extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
        user: []
    }

    // findUserName = profiles => {
    //     return this.props.users.find(user => user.id === profiles.userId).username
    // }

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    componentDidMount() {
        const newState = {}
        DataManager.getAllByUser("users", this.credentials.id)
            .then(allUsers => {
                newState.user = allUsers
                console.log(allUsers)
            })
            .then(() =>
                this.setState(newState))
    }

    render() {

        return (
            <React.Fragment>
                <section className="profiles">
                    
                            <aside className="profile-card">
                                <header>
                                    <p>
                                        <img src="" alt="" />
                                    </p>
                                    <h1>{this.props.user.name}</h1>
                                    <h2>{this.props.user.gender},{this.props.user.age}</h2>
                                </header>
                                <div className="profile-bio">
                                    <p>{this.props.user.aboutMe}</p>
                                </div>
                            </aside>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }


}