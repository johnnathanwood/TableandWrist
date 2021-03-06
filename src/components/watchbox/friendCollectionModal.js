import React, { Component } from 'react'
import FriendCollection from './showFriendCollection'
import DataManager from '../../module/DataManager'
import { Modal, Header,Comment, Grid} from 'semantic-ui-react'


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
            <Grid wrapped="true" size='medium'>
            <Modal basic size='small' centered={false} trigger={<Comment.Action onClick={this.show('blurring')}>Show Collection</Comment.Action>} dimmer={dimmer} open={open} onClose={this.close}  closeIcon
            >
                <Header icon='archive'>{this.props.friendName}'s watch collection</Header>
                <Modal.Content image scrolling>
                    {
                        this.state.watches.map(watch => <FriendCollection {...this.props} close={this.close} friendWatch={watch} key={watch.id}/>)

                    }
                </Modal.Content>
                <Modal.Actions>
                </Modal.Actions>
            </Modal>
            </Grid>
        )
    }
}