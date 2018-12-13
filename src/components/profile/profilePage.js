
import React, { Component } from "react"
import "./profilePage.css"
import { Comment, Image, Card, Icon, Grid } from 'semantic-ui-react'
import EditProfileModal from "./editProfileModal";
import ProfileCollection from "../watchbox/showWatchesonProfile";
import DataManager from "../../module/DataManager";

export default class ProfilePage extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))
 state = {
    watches: []

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
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        return (
            <React.Fragment>
                <h1>Hello {credentials.username}</h1>
                <Card>
                    <Image src={this.props.user.uploadedFileCloudinaryUrl} />
                    <Card.Content>
                        <Card.Header>{this.props.user.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{this.props.user.gender},{this.props.user.age}</span>
                        </Card.Meta>
                        <Card.Description>{this.props.user.aboutMe}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            {
                                this.props.user.id === credentials.id ? (
                                    <React.Fragment >
                                        <div className="container">
                                            <Comment.Actions>
                                                <Comment.Actions>
                                                    <Icon name='user' />   <EditProfileModal {...this.props} userId={this.props.user.id} users={this.props.user} />
                                                </Comment.Actions>
                                            </Comment.Actions>
                                        </div>
                                    </React.Fragment>
                                ) : ""
                            }
                        </a>
                    </Card.Content>
                </Card>
                <Grid centered column={3} relaxed padded>
                <Grid.Column padded='vertically'>
                {
                this.state.watches.map(watch => {console.log("look", watch)
                return <ProfileCollection {...this.props} watch={watch} key={watch.id} />})
                }
                </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}
