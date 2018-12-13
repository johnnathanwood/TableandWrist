import React, { Component } from "react"
import CollectionModal from "../watchbox/friendCollectionModal"
import { Image, Card, Button, Grid} from 'semantic-ui-react'



export default class FriendsList extends Component {
  credentials = JSON.parse(sessionStorage.getItem('credentials'))

  state = {

}



componentDidMount(){

}

  render() {
    // this.props.grabFriends()
      console.log(this.props.relationships)
    return (
        <React.Fragment>
            <Grid relaxed ='very' centered>
            {
               this.props.relationships.map(friend => 
                <div className="eachProfile" key={friend.id}>
                <br></br>
                <br></br>
                <br></br>
            <Grid.Column padded>
           <Card.Group>
           <Card raised>
             <Card.Content>
               <Image floated='right' size='mini' src={friend.uploadedFileCloudinaryUrl} />
               <Card.Header>{friend.name}</Card.Header>
               <Card.Meta>{friend.gender}, {friend.age}</Card.Meta>
               <Card.Description>
               {friend.aboutMe}
               </Card.Description>
             </Card.Content>
             <Card.Content extra>
               <div className='ui two buttons'>
               <Button basic color='green'>
               <CollectionModal {...this.props} friendName={friend.name} friend={friend.id}  />
               </Button>
                 <Button basic color='red' onClick={() => console.log("clicked")}>
                   Remove Friend
                 </Button>
               </div>
             </Card.Content>
           </Card>
           </Card.Group>
           </Grid.Column>


          

    </div> 
                                           
                )
            }
            </Grid>
    </React.Fragment>

    )
  }
}


