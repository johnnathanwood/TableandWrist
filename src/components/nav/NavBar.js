import React, { Component } from "react"
import { Link } from "react-router-dom"
// import { Icon } from 'semantic-ui-react'
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap shadow">
        <ul className="nav nav-pills">

          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/watchbox">Watch Box</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/watchform">Watch Form</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/friends">Friends</Link>
          </li>

          {/* <li className="nav-item">
          <Link className="nav-link" to="/friends">Friends</Link>
        </li> */}

        </ul>
        <p id="navTagline">Welcome to Table !</p>

      </nav>
    )
  }
}
