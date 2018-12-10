import React, { Component } from "react"
import CommunityProfiles from "./communityProfiles";

export default class Community extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    state = {
    }

    render() {
        return (
            <React.Fragment>
                <div>
                <CommunityProfiles {...this.props} />
                </div>
            </React.Fragment>
        )
    }


}
