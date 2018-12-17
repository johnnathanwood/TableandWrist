import React, { Component } from 'react'
import MessageForm from './messageForm'
import Likes from './messageLike';
import EditMessageModal from './editMessageModal'
import { Comment, Placeholder, Header, Image, Icon, Divider, Segment } from 'semantic-ui-react'
import "./watchform.css"
import moment from 'moment';

export default class MessageList extends Component {

    findUserName = messages => {
        let temp = this.props.users.find(user => user.id === messages.userId).username
        console.log("temp",temp)
        if (temp !== undefined){
        return temp
    }
    }

    findUserId = () => {
        return sessionStorage.getItem("credentials")
    }

    render() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        console.log(credentials)
        return (
            <React.Fragment>
        <Header as='h3' textAlign='center'>
        <Icon name='comment alternate' circular />
      Watch Form
    </Header>
    <Image src='https://res.cloudinary.com/tableandwrist/image/upload/v1544935828/Message..jpg' size='large' rounded centered  fluid/>
    <br></br>
    <Divider></Divider>
                {
                    this.props.messages.map(messages =>
                        <div id={`message--${messages.id}`} key={messages.id} className="MessageCard">
                                <Comment.Group size='small' dividing >
                                    <Comment>
                                        <Comment.Avatar as='a' src={this.props.user.uploadedFileCloudinaryUrl} />
                                        <Comment.Content>
                                            <Comment.Author>{this.findUserName(messages)}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>{moment(messages.date).fromNow()}</div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                <p>{messages.message}</p>
                                            </Comment.Text>
                                            {
                                                messages.userId === credentials.id ? (
                                                    <React.Fragment >
                                                        <div className="container">
                                                            <Comment.Actions>
                                                                <Comment.Action
                                                                    onClick={() => this.props.deleteMessage(messages.id)
                                                                        .then(() => this.props.history.push("/watchform"))}
                                                                >delete
                                                    </Comment.Action>
                                                                <EditMessageModal {...this.props} messageId={messages.id} messages={messages} />
                                                            </Comment.Actions>
                                                        </div>
                                                    </React.Fragment>
                                                ) : ""
                                            }


                                        </Comment.Content>
                                    </Comment>
                                    <br></br>
                                </Comment.Group>
                                </div>
                    )
                }

                <MessageForm {...this.props} />
            </React.Fragment>
        )
    }
}


