import React, { Component } from "react"
import CollectionModal from "../watchbox/friendCollectionModal"
import { Image, Card, Button, Grid, Icon, Header} from 'semantic-ui-react'



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
          <br></br>
          <br></br>
          <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Friends</Header.Content>
    </Header>  </div>
)
          <Image src='https://static01.nyt.com/images/2018/03/23/style/23COLLECTIONS-INYT1/merlin_135755724_5c009a4e-718e-49ef-8d7c-9f741365c68c-superJumbo.jpg?quality=90&auto=webp' size='massive' rounded centered />
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


