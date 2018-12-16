import React, { Component } from "react"
import { Card, Image, Icon } from 'semantic-ui-react'



export default class ProfileCollection extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))

    findUserId = () => {
        return sessionStorage.getItem("credentials")
    }

    render() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        console.log("watch",this.props.watch)
        return (
            <React.Fragment>

            {/* <h1>{credentials.username}'s watch collection</h1> */}
                <div id={`watch--${this.props.watch.id}`} key={this.props.watch.id} className="MessageCard">           
                    <Card raised>
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
                    </div>
            </React.Fragment>

        )
    }
}
