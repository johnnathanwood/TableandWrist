import React, { Component } from "react"
import { Comment, Message, Button, Card, Icon, Grid, Image, Segment, Divider} from 'semantic-ui-react'
import AddWatchModal from "./addWatchModal";
import EditWatchModal from "./editWatchModal";





export default class WatchBoxCard extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))


    findUserId = () => {
        return sessionStorage.getItem("credentials")
    }
    render() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))  
        return (
            <React.Fragment>
            <Grid centered column={3} relaxed padded="true">
            <Grid.Column padded='vertically'>
            <div id={`watch--${this.props.watch.id}`} key={this.props.watch.id} className="MessageCard">
            <Segment>
                <div className="watchpillow">
                        <Card color='brown'>
                            <Image className="photo" src={this.props.watch.uploadedFileCloudinaryUrl} alt="watch" size="medium" />
                            <Card.Content>
                                <Card.Header>{this.props.watch.brand}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{this.props.watch.model}</span>
                                </Card.Meta>
                                <Card.Description>{this.props.watch.year}</Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <p>
                                    <Icon name='user' />
                                    ${this.props.watch.price}
                                </p>
                                <Button basic compact size='mini'
                                    onClick={() => {
                                        this.props.deleteWatch(this.props.watch.id)
                                        this.props.refreshData()
                                        .then(() => this.props.history.push("/watchbox"))
                                    }}
                                >delete
                        </Button>
                                <Button basic compact size='mini'>
                                    <EditWatchModal {...this.props} watchId={this.props.watch.id} watches={this.props.watch} />
                                </Button>
                            </Card.Content>
                        </Card>
                        </div>
                        </Segment>
            </div>
                    </Grid.Column>
                </Grid>

        </React.Fragment>


        )
    }
}


