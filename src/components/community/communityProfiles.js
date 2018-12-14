import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import { Image, Card, Button, Grid} from 'semantic-ui-react'

export default class CommunityProfiles extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))

    state = {
        
    }

    componentDidMount() {
        const newState = {}
        DataManager.getAll("users")
      .then(allUsers => {
        newState.users = allUsers
        this.props.findFriends(this.credentials)
      })
      .then(() =>
        this.setState(newState))
  }


  addRelationship = (taco) => {
    let currentUserId = this.credentials
    console.log("currentUserId",currentUserId)
    let userIdArray = []
    userIdArray.push(this.props.users.forEach(users => users.id === taco))
    // console.log("userIdArray",userIdArray)
    console.log(userIdArray)
    let object = {
        userId: currentUserId.id,
        friendId: taco
      } 
      console.log("object",object)
    return DataManager.saveData("relationships", object)
  }

  render() {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        return (
            <React.Fragment>
                    {this.props.users.map(users =>
                <div className="profile-list" key={users.id}>
                <section className="profiles">
                <Grid padded>
                           <Card.Group >
                           <Card raised>
                             <Card.Content>
                               <Image floated='right' size='mini' src={users.uploadedFileCloudinaryUrl} />
                               <Card.Header>{users.name}</Card.Header>
                               <Card.Meta>{users.gender}, {users.age}</Card.Meta>
                               <Card.Description>
                               {users.aboutMe}
                               </Card.Description>
                             </Card.Content>
                             {
    users.userId === credentials.id ? (
        <React.Fragment>
    <Card.Content extra>
    <Button basic color='green'>This is me!</Button>
    </Card.Content>
    </React.Fragment>
       ): <Card.Content extra>
                               <div className='ui two buttons'>
                                 <Button basic color='green' onClick={() => {this.addRelationship(users.id)}}>
                                   Add Friend
                                 </Button>
                               </div>
                             </Card.Content>

}
                           </Card>
                           </Card.Group>
                           </Grid>
                </section>
                    </div> 
                        )
                    }
            </React.Fragment>
        )
    }
}


