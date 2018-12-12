import React, { Component } from "react"
import { Comment,Message} from 'semantic-ui-react'
import DataManager from "../../module/DataManager";




export default class ProfileCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))


    findUserId = () => {
        return localStorage.getItem("credentials")
    }
    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))  
        return (
            <React.Fragment>
                <h1>{this.props.friendName}'s watch collection</h1>
                        <div id={`watch--${this.props.friendWatch.id}`} key={this.props.friendWatch.id} className="MessageCard">
                            <Message floating>
                                <Comment.Group size='large'>
                                    <Comment>
                                        <Comment.Content>
                                            <Comment.Metadata>
                                                <div className="profile-image"><img src={this.props.friendWatch.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                <div>Brand: {this.props.friendWatch.brand}</div>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Model: {this.props.friendWatch.model}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Year: {this.props.friendWatch.year}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>Price: ${this.props.friendWatch.price}</p>
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment> 
                                </Comment.Group>
                            </Message>
                        </div>
            </React.Fragment>

        )
    }
}
