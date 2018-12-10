import React, { Component } from "react"
import { Comment, Message, Button } from 'semantic-ui-react'
import AddWatchModal from "./addWatchModal";
import EditWatchModal from "./editWatchModal";




export default class WatchCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    render() {
        return (
            <React.Fragment>
                <Button> <AddWatchModal {...this.props} /></Button>
                {

                    this.props.watches.map(watches =>
                        <div id={`watches--${watches.id}`} key={watches.id} className="MessageCard">
                            <Message floating>
                                <Comment.Group size='large'>
                                    <Comment>
                                        <Comment.Content>
                                            <Comment.Metadata>
                                                <div className="profile-image"><img src={watches.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                <div>Brand: {watches.brand}</div>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Model: {watches.model}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Year: {watches.year}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Price: ${watches.price}</p>
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                    <Comment.Action
                                        onClick={() => this.props.deleteWatch(watches.id)
                                            .then(() => this.props.history.push("/watchbox"))}
                                    >delete
                                                    </Comment.Action>
                                </Comment.Group>
                                <EditWatchModal {...this.props} watchId={watches.id} watches={watches} />
                            </Message>
                        </div>
                    )
                }
            </React.Fragment>

        )
    }
}