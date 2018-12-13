import React, { Component } from "react"
import EditWatchModal from "./editWatchModal";
import WatchBoxCard from "./watchBoxCard";




export default class WatchCollection extends Component {
    credentials = JSON.parse(localStorage.getItem('credentials'))


    render() {
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        console.log("watchbox",this.props.watch)
        return (
            <React.Fragment>
                <p>Watch Box</p>
                {
                this.props.watch.map(watch => <WatchBoxCard {...this.props} watch={watch} key={watch.id}/>
                )
                }
            </React.Fragment>

        )
    }
}

