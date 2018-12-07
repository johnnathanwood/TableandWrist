import React, { Component } from "react"
import AddWatchForm from './addWatchform'
import DataManager from "../../module/DataManager"



export default class WatchCollection extends Component {

    findUserId = () => {
        return localStorage.getItem("credentials")
    }


    render() {
        return (
            <AddWatchForm/>
        )
    }
}