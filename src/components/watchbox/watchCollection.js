import React, { Component } from "react"
import { Comment, Message, Button, Card, Icon, Grid, Image } from 'semantic-ui-react'
import AddWatchModal from "./addWatchModal";
import EditWatchModal from "./editWatchModal";




export default class WatchCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))


    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        return (
            <React.Fragment>
                <h1>{credentials.username}'s watch collection</h1>
                <Button> <AddWatchModal {...this.props} /></Button>
                    <Grid divided='vertically'>
                        <Grid.Column>
                <div id={`watch--${this.props.watch.id}`} key={this.props.watch.id} className="MessageCard">
                            <Card>
                                <Image src={this.props.watch.uploadedFileCloudinaryUrl} alt="watch" size="medium" />
                                <Card.Content>
                                    <Card.Header>{this.props.watch.brand}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{this.props.watch.model}</span>
                                    </Card.Meta>
                                    <Card.Description>{this.props.watch.year}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <p>
                                        <Icon name='user' />
                                        ${this.props.watch.price}
                                    </p>
                                    <Button
                                        onClick={() => this.props.deleteWatch(this.props.watch.id)
                                            .then(() => this.props.history.push("/watchbox"))}
                                    >delete
                            </Button>
                                    <Button>
                                        <EditWatchModal {...this.props} watchId={this.props.watch.id} watches={this.props.watch} />
                                    </Button>
                                </Card.Content>
                            </Card>
                </div>
                        </Grid.Column>
                    </Grid>
            </React.Fragment>

        )
    }
}

