import React, { Component } from "react"
import IsAuth from './Auth/IsAuth'
import "./TableWrist.css"
import "bootstrap/dist/css/bootstrap.min.css"



export default class TableWrist extends Component {

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


    state = {
      activeUser: this.isAuthenticated()
    }

    setAuth = () => {
        this.setState({ auth: this.isAuthenticated() })
      }
  
    render() {
        return (
            <React.Fragment>
              <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} />

            </React.Fragment>
        )
    }
}

