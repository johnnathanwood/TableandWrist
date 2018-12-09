import React, {Component} from 'react'
import { Button, Form} from 'semantic-ui-react'

export default class EditMessageForm extends Component {

    state = {

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        
    }

    componentDidMount() {
        this.setState(this.props.message)
    }

    updatedMessage = (evt) => {
        evt.preventDefault()

        let editedMessage = {
            message: this.state.message,
        }
        this.props.editMessage(this.props.messageId, editedMessage)
        .then(() => {
            this.props.close()
        })
    }

    render () {
        return (
        <React.Fragment>
            <Form className="messageForm">
                    <Form.Field>
                        <label htmlFor="messageId"></label>
                    </Form.Field>
                    <Form.Field>
                        <input onChange={this.handleFieldChange}
                            id="message" defaultValue={this.props.messages.message}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button onClick={this.updatedMessage} content='Add Comment' labelPosition='left' icon='comments outline' primary />
                </Form>        
        </React.Fragment>
        )
    }
}