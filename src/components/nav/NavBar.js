import React, { Component } from "react"
import { Link } from "react-router-dom"

import { Icon, Button ,  Breadcrumb} from 'semantic-ui-react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import Clock from "../watchbox/clock"
import "./NavBar.css"

export default class NavBar extends Component {
  credentials = JSON.parse(sessionStorage.getItem('credentials'))
  state = { activeItem: 'bio' }

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'))
    const { activeItem } = this.state
    return (
      <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Table & Wrist</NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/watchbox">Watchbox</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/watchform">Watch Form</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/friends">Friends</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/community">Community</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        <div className="logbtn">
        <Button compact color='brown' animated onClick={() => {
          document.location.href = 'http://localhost:3000/login'
        }}>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-in alternate' />
          </Button.Content>
        </Button>
        <Button compact color='red' animated onClick={() => {
          sessionStorage.clear("credentials")
          document.location.href = 'http://localhost:3000'
        }}>
          <Button.Content visible>Logout</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-out alternate' />
          </Button.Content>
        </Button>
        </div>
        </div> 
    )
  }
}





