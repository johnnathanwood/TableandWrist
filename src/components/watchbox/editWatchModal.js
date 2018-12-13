import React, { Component } from 'react'
import EditWatchForm from './editWatchform'
import { Modal, Header,Comment, Image, Grid} from 'semantic-ui-react'


export default class EditWatchModal extends Component {
    state = { open: false }
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })


    render() {
        const { open, dimmer } = this.state

        return (
            <Modal centered={false} trigger={<Comment.Action onClick={this.show(true)}>edit</Comment.Action>} dimmer={dimmer} open={open} onClose={this.close}  closeIcon
            >
                <Header icon='archive' content='Edit Watch' />
                <Grid relaxed>
                <Image wrapped size='medium'>
                    <EditWatchForm {...this.props} close={this.close}/>
                </Image>
                </Grid>
                
            </Modal>
        )
    }
}