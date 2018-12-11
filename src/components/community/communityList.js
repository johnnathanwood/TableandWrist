import React, { Component } from "react"
import CommunityProfiles from "./communityProfiles";

export default class Community extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
    }

    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        return (
            <React.Fragment>
                <div>
                <CommunityProfiles {...this.props} />
                </div>
            </React.Fragment>
        )
    }


}
