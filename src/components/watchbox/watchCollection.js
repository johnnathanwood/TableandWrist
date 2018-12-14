import React, { Component } from "react"
import EditWatchModal from "./editWatchModal";
import { Button} from 'semantic-ui-react'
import WatchBoxCard from "./watchBoxCard";
import AddWatchModal from "./addWatchModal";




export default class WatchCollection extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))


    render() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        console.log("watchbox",this.props.watch)
        return (
            <React.Fragment>
                <h1>{credentials.username}'s watch collection</h1>
                <Button> <AddWatchModal {...this.props} /></Button>
                {
                this.props.watch.map(watch => <WatchBoxCard {...this.props} watch={watch} key={watch.id}/>
                )
                }
            </React.Fragment>

        )
    }
}

