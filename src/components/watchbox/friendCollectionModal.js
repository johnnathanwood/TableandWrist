import React, { Component } from 'react'
import FriendCollection from './showFriendCollection'
import DataManager from '../../module/DataManager'
import { Modal, Header,Comment} from 'semantic-ui-react'


export default class CollectionModal extends Component {
    state = {   open: false ,
                watches: []}
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })

    componentDidMount() {
            DataManager.getFriendWatches("watches",this.props.friend)
                .then(watches => this.setState({watches: watches})
                )
    }
    

    render() {
        const { open, dimmer } = this.state

        return (
            <div>
            <Modal trigger={<Comment.Action onClick={this.show(true)}>Show Collection</Comment.Action>} dimmer={dimmer} open={open} onClose={this.close}  closeIcon
            >
                <Header icon='archive' content='Edit Watch' />
                <Modal.Content>
                    {
                        this.state.watches.map(watch => <FriendCollection {...this.props} close={this.close} friendWatch={watch}/>)

                    }
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
            </div>
        )
    }
}