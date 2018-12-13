import React, { Component } from "react"
import { Comment, Card, Image, Icon, Grid } from 'semantic-ui-react'
import DataManager from "../../module/DataManager";




export default class ProfileCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    findUserId = () => {
        return localStorage.getItem("credentials")
    }

    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        console.log("watch",this.props.watch)
        return (
            <React.Fragment>
            {/* <h1>{credentials.username}'s watch collection</h1> */}
                <div id={`watch--${this.props.watch.id}`} key={this.props.watch.id} className="MessageCard">
                <Grid divided='vertically' padded>
                <Grid.Column floated='left'>
                    <Card>
                        <Image src={this.props.watch.uploadedFileCloudinaryUrl} alt="this.props.watch" size="medium"/>
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
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                    </Grid>
                </div>
            </React.Fragment>

        )
    }
}