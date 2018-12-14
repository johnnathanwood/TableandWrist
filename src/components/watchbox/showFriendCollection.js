import React, { Component } from "react"
import { Comment,Message,Card, Image, Icon, Grid } from 'semantic-ui-react'
import DataManager from "../../module/DataManager";




export default class ProfileCollection extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))


    findUserId = () => {
        return sessionStorage.getItem("credentials")
    }
    render() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))  
        return (
            <React.Fragment>
                        <div id={`watch--${this.props.friendWatch.id}`} key={this.props.friendWatch.id} className="MessageCard">
            <Grid divided='vertically'>
                <Grid.Column width={10}>
                    <Card>
                        <Image src={this.props.friendWatch.uploadedFileCloudinaryUrl} alt="watch" size="medium"/>
                        <Card.Content>
                            <Card.Header>{this.props.friendWatch.brand}</Card.Header>
                            <Card.Meta>
                                <span className='date'>{this.props.friendWatch.model}</span>
                            </Card.Meta>
                            <Card.Description>{this.props.friendWatch.year}</Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <p>
                                <Icon name='user' />
                                ${this.props.friendWatch.price}
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


