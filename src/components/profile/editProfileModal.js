import React, { Component } from 'react'
import EditProfileForm from './editProfileForm'
import { Modal, Header,Comment} from 'semantic-ui-react'


export default class EditProfileModal extends Component {
    state = { open: false }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })


    render() {
        const { open, dimmer } = this.state

        return (
            <Modal  centered={false} trigger={<Comment.Action onClick={this.show(true)}>edit</Comment.Action>} dimmer={dimmer} open={open} onClose={this.close}  closeIcon
            >
                <Header icon='archive' content='Edit Profile' />
                <Modal.Content>
                    <EditProfileForm {...this.props} close={this.close}/>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}