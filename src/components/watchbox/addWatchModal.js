import React, { Component } from 'react'
import {Modal, Header,Comment} from 'semantic-ui-react'
import AddWatch from './addWatchform'


export default class AddWatchModal extends Component {
    state = { open: false }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })


    render() {
        const { open, dimmer } = this.state

        return (
            <Modal trigger={<Comment.Action onClick={this.show(true)}>Add Watch</Comment.Action>} dimmer={dimmer} open={open} onClose={this.close}  closeIcon
            >
                <Header icon='archive' content='Add Watch' />
                <Modal.Content>
                    <AddWatch {...this.props} close={this.close}/>
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
        )
    }
}
