import React, { Component } from 'react'
import MessageForm from './messageForm'
import Likes from './messageLike';
import EditMessageModal from './editMessageModal'
import { Comment, Message, Header, Icon } from 'semantic-ui-react'

export default class MessageList extends Component {

    findUserName = messages => {
        return this.props.users.find(user => user.id === messages.userId).username
    }

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        console.log(credentials)
        return (
            <React.Fragment>
                <Header color="blue" as='h2' icon textAlign='center'>
                    <Icon name='comments outline' />
                    <Header.Content>Watch Form</Header.Content>
                </Header>
                {
                    this.props.messages.map(messages =>
                        <div id={`message--${messages.id}`} key={messages.id} className="MessageCard">
                            <Message floating>
                                <Comment.Group size='large'>
                                    <Comment>
                                        <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                        <Comment.Content>
                                            <Comment.Author>{this.findUserName(messages)}</Comment.Author>
                                            <Comment.Metadata>
                                                <div>{messages.date}</div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                <p>{messages.message}</p>
                                                <Likes />
                                            </Comment.Text>
                                            {
                                                messages.userId === credentials.id ? (
                                                    <React.Fragment >
                                                        <div className="container">
                                                            <Comment.Actions>
                                                            <EditMessageModal {...this.props} messageId={messages.id} messages={messages} />
                                                            </Comment.Actions>
                                                        </div>
                                                    </React.Fragment>
                                                ) : ""
                                            }


                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>
                            </Message>
                        </div>
                    )
                }

                <MessageForm {...this.props} />
            </React.Fragment>
        )
    }
}