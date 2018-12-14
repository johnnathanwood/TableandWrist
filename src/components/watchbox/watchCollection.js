import React, { Component } from "react"
import EditWatchModal from "./editWatchModal";
import { Button, Divider, Grid, Image} from 'semantic-ui-react'
import WatchBoxCard from "./watchBoxCard";
import AddWatchModal from "./addWatchModal";
import './watchbox.css'




export default class WatchCollection extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))


    render() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        console.log("watchbox",this.props.watch)
        return (
            <React.Fragment>
                <div className="watchbox">
                (
  <Image src='https://cdn.hodinkee.com/assets/watch101/watch101-dial-side-3814eb60d9e46a74f19539835cbed785eae9f73f5b02bee89a4b1ce169f93687.gif' size='medium' bordered />
)

                <h1>{credentials.username}'s watch collection</h1>
                <Button> <AddWatchModal {...this.props} /></Button>
                <Grid columns={2} relaxed='very'>
                <Grid.Column>
                {
                this.props.watch.map(watch => <WatchBoxCard {...this.props} watch={watch} key={watch.id}/>
                )
                }
                 </Grid.Column>
                 </Grid>
                </div>
            </React.Fragment>

        )
    }
}

