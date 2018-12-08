import React, { Component } from "react"
import { Comment,Message} from 'semantic-ui-react'




export default class ProfileCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    findUserId = () => {
        return localStorage.getItem("credentials")
    }


    render() {
        return (
            <React.Fragment>
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
                                            <Comment.Metadata>
                                                <div>{watches.brand}</div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                <p>{watches.model}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>{watches.year}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>{watches.price}</p>
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>
                            </Message>
                        </div>
                    )
                }
            </React.Fragment>

        )
    }
}