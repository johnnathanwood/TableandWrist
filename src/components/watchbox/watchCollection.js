import React, { Component } from "react"
import { Comment, Message, Button } from 'semantic-ui-react'
import AddWatchModal from "./addWatchModal";
import EditWatchModal from "./editWatchModal";




export default class WatchCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))


    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))  
        return (
            <React.Fragment>
                <Button> <AddWatchModal {...this.props} /></Button>
                <h1>{credentials.username}'s watch collection</h1>
                        <div id={`watch--${this.props.watch.id}`} key={this.props.watch.id} className="MessageCard">
                            <Message floating>
                                <Comment.Group size='large'>
                                    <Comment>
                                        <Comment.Content>
                                            <Comment.Metadata>
                                                <div className="profile-image"><img src={this.props.watch.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                <div>Brand: {this.props.watch.brand}</div>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Model: {this.props.watch.model}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Year: {this.props.watch.year}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Price: ${this.props.watch.price}</p>
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                    <Comment.Action
                                        onClick={() => this.props.deleteWatch(this.props.watch.id)
                                            .then(() => this.props.history.push("/watchbox"))}
                                    >delete
                                                    </Comment.Action>
                                </Comment.Group>
                                <EditWatchModal {...this.props} watchId={this.props.watch.id} watches={this.props.watch} />
                            </Message>
                        </div>
            </React.Fragment>

        )
    }
}