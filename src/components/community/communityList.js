import React, { Component } from "react"
import CommunityProfiles from "./communityProfiles";
import { Card, Grid, Container} from 'semantic-ui-react'
import "./communityList.css"

export default class Community extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))

    state = {

    }



    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }

    findUserId = () => {
        return sessionStorage.getItem("credentials")
    }

    render() {
        
        return (
            <React.Fragment>
                <div className="community-list">
                <br></br>
                <br></br>
                <br></br>
                <div>
                <Grid divided='vertically' centered padded>
                <Card.Group itemsPerRow={3}>
                <CommunityProfiles {...this.props} />
                </Card.Group>
                </Grid>
                </div>
                </div>
            </React.Fragment>
        )
    }


}
