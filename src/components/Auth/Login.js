import React, { Component } from "react"
import DataManager from "../../module/DataManager"
import "./Login.css"

export default class Login extends Component {
  // Set initial state
  state = {
    username: "",
    email: "",
    password: "",
  }

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    const credentials = JSON.parse(sessionStorage.getItem('credentials'))
    e.preventDefault()
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    if (!this.state.username || !this.state.password) {
      alert("please")
    } else if (this.state.username || this.state.password) {
      DataManager.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`username ${this.state.username} already exits!`)
        } else if (!users.length) {
          DataManager.add("users", user).then(user => {
            sessionStorage.setItem("credentials", JSON.stringify(user[0]))
            this.props.setAuth()
          }
          )
        }
      })
    }
  }

  // Simplistic handler for login submit
  handleLogin = e => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) {
      alert("please")
    } else if (this.state.username || this.state.password) {
      DataManager.searchNP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Wrong username or password!")
          } else if (user.length) {
            sessionStorage.setItem("credentials", JSON.stringify(user[0]))
            this.props.setAuth()
          }
        }
      )
    }
  }

  render() {
    return <form className="loginForm">
      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label htmlFor="inputUsername">Username</label>
      <input onChange={this.handleFieldChange} type="username" id="username" placeholder="Username" required="" autoFocus="" />
      <label htmlFor="inputPassword">Password</label>
      <input onChange={this.handleFieldChange} type="password" id="password" placeholder="Password" required="" />
      <button type="submit" onClick={this.handleLogin}>
        Sign in
        </button>
      <label htmlFor="userName">
        Username
                        </label>
      <input onChange={this.handleFieldChange} type="username"
        id="username"
        placeholder="Username"
        required="" autoFocus="" />
      <label htmlFor="email">
        Email address
                        </label>
      <input onChange={this.handleFieldChange} type="email"
        id="email"
        placeholder="Email address"
        required="" autoFocus="" />
      <label htmlFor="password">
        Password
                        </label>
      <input onChange={this.handleFieldChange} type="password"
        id="password"
        placeholder="Password"
        required="" />
      <button type="submit" onClick={this.handleRegister}>
        Register
        </button>
    </form>
  }
}
