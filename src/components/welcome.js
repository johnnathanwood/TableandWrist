
import React, { Component } from "react"
import Nav from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews";
import { Container } from 'semantic-ui-react'
import './welcome.css'
export default class Welcome extends Component {
  render() {
    return <React.Fragment>
      <Container>
        <div className="background">
        <Nav {...this.props}  />
        <ApplicationViews {...this.props} />
        </div>
      </Container>
      </React.Fragment>
  }
}