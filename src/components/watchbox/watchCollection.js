import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import AddWatch from "./addWatchform";
import { Comment,Message,Button} from 'semantic-ui-react'
import AddWatchModal from "./addWatchModal";
import EditWatchModal from "./editWatchModal";



export default class WatchCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))

    findUserId = () => {
        return localStorage.getItem("credentials")
    }


    render() {
        return (
            <React.Fragment>
                <Button> <AddWatchModal {...this.props}/></Button> 
            {
                
                    this.props.watches.map(watches =>
                        <div id={`watches--${watches.id}`} key={watches.id} className="MessageCard">
                            <Message floating>
                                <Comment.Group size='large'>
                                    <Comment>
                                        <Comment.Content>
                                            <Comment.Metadata>
                                            <div className="profile-image"><img src={watches.uploadedFileCloudinaryUrl} alt="sample47" width="300" crop="scale" /></div>
                                            </Comment.Metadata>
                                            <Comment.Metadata>
                                                <div>{watches.brand}</div>
                                            </Comment.Metadata>
                                            <Comment.Text>
                                                <p>{watches.model}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>{watches.year}</p>
                                            </Comment.Text>
                                            <Comment.Text>
                                                <p>{watches.price}</p>
                                            </Comment.Text>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>
                            </Message>
                            <Comment.Actions>
                                        <EditWatchModal {...this.props} watchId={watches.id} watches={watches} />           
                            </Comment.Actions>
                        </div>
                    )
                }
            </React.Fragment>

        )
    }
}