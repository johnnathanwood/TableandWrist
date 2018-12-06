import React, { Component } from "react"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
import "./TableWrist.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default class TableWrist extends Component {
    render() {
        return (
            <React.Fragment>
              <NavBar />
              <ApplicationViews />
            </React.Fragment>
        )
    }
}

