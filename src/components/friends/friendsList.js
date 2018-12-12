import React, { Component } from "react"
import CollectionModal from "../watchbox/friendCollectionModal"



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
            {
               this.props.relationships.map(friend => 
                <div className="eachProfile" key={friend.id}>
                                    <figure className="snip1515">
                                        <div className="profile-image"><img src={friend.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                        <figcaption>
                                            <h3>Name:{friend.name}</h3>
                                            <h4>Gender: {friend.gender}</h4>
                                            <h4>Age: {friend.age}</h4>
                                            <p>About Me: {friend.aboutMe}</p>
                                            </figcaption>
                                             <CollectionModal {...this.props} friendName={friend.name} friend={friend.id}  />
                                            <button onClick={() => console.log("clicked")}>Remove Friend</button>
                                    </figure>
                                </div>
                                           
                )
            }
    </React.Fragment>

    )
  }
}
