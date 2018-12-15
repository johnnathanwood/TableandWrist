
import React, { Component } from "react"
import "./profilePage.css"
import { Comment, Image, Card, Icon, Grid, Divider, Header, Advertisement } from 'semantic-ui-react'
import EditProfileModal from "./editProfileModal";
import ProfileCollection from "../watchbox/showWatchesonProfile";
import DataManager from "../../module/DataManager";


export default class ProfilePage extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))
 state = {
    watches: [],

 }

    componentDidMount() {
        console.log("TEST",this.props.user)
        DataManager.getUserWatches("watches",this.props.user.userId)
            .then(watches => {console.log("watches",watches)
            this.setState({watches: watches})}
            )
}

    render() {
        console.log("Jase",this.props.user)
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        return (
            <React.Fragment>

    <Header as='h1' icon textAlign='center'>
    </Header>
    <Image centered size='medium' src="https://res.cloudinary.com/tableandwrist/image/upload/v1544900037/twlogo.jpg" />
                <Header as='h2' icon textAlign='center'>
    <Image circular src={this.props.user.uploadedFileCloudinaryUrl} /> Welcome back {credentials.username}
  </Header>
  <br></br>
  <br></br>
                <Divider horizontal className="watchdivider">
      <Header as='h4'>
        <Icon name='wait' />
        Watches
      </Header>
    </Divider>
                <br></br>
                <Grid relaxed ='very' centered>
                {
                this.state.watches.map(watch => {console.log("look", watch)
                return <ProfileCollection {...this.props} watch={watch} key={watch.id} />})
                }
                </Grid>
            </React.Fragment>
        )
    }
}
