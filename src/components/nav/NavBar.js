import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Icon, Button } from 'semantic-ui-react'
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
          <li className="nav-item">
            <Link className="nav-link" to="/community">Community</Link>
          </li>
        </ul>
        <p id="navTagline">Welcome to Table !</p>
        <div className="logbtn">
        <Button animated onClick={() => {
          document.location.href = 'http://localhost:3000/login'
        }}>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-in alternate' />
          </Button.Content>
        </Button>
        <Button animated onClick={() => {
          sessionStorage.clear("credentials")
          document.location.href = 'http://localhost:3000'
        }}>
          <Button.Content visible>Logout</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-out alternate' />
          </Button.Content>
        </Button>
        </div>
      </nav>
    )
  }
}
