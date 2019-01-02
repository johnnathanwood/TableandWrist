import React, { Component } from "react"
import CommunityProfiles from "./communityProfiles";
import { Card, Grid, Image, Icon, Header} from 'semantic-ui-react'
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
                <Header as='h2' icon textAlign='center'>
      <Icon name='genderless' circular />
      <Header.Content>Community</Header.Content>
    </Header>
                        <Image src='https://hodinkee.imgix.net/uploads/images/1533324560777-xebypiluzdn-8c74ea3b93fe9a0f1c678d42251c37c2/Baselworld_2015_Outside_View.jpg?ixlib=rails-1.1.0&fit=crop&ch=Width%2CDPR%2CSave-Data&alt=&fm=jpg&q=55&auto=format&usm=12&s=8315a62bc3d27bc1376d95931884f8f0' size='massive' rounded centered />

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
