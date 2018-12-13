
import React, { Component } from "react"
import "./profilePage.css"
import { Comment, Image, Card, Icon, Grid } from 'semantic-ui-react'
import EditProfileModal from "./editProfileModal";
import ProfileCollection from "../watchbox/showWatchesonProfile";

export default class ProfilePage extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    render() {
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
                <ProfileCollection {...this.props} />
                </Grid.Column>
                </Grid>
            </React.Fragment>
        )
    }
}
