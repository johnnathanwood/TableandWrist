import React, { Component } from "react"
import CommunityProfiles from "./communityProfiles";
import { Card, Grid} from 'semantic-ui-react'

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
        
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }


}
