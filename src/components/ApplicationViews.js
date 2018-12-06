import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import Profile from './profile/makeProfileForm'

export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    credentials = JSON.parse(localStorage.getItem('credentials'))
    credentials = { id: 1 }

    state = {
        users: [],
        isLoaded: false
    }

    addUser = users => DataManager.add("users", users)
        .then(() => DataManager.getAll("users"))
        .then(users => this.setState({
            users: users
        }))

    addProfile = profiles => DataManager.add("profiles", profiles)
        .then(() => DataManager.getAll("profiles"))
        .then(profiles => this.setState({
            profiles: profiles
        }))


    componentDidMount() {
        const newState = {}

        DataManager.getAll("users")
            .then(allUsers => {
                newState.users = allUsers
            })
        DataManager.getAll("profiles")
            .then(allProfiles => {
                newState.profiles = allProfiles
            })
            .then(() =>
                this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                 <Route exact path="/register" render={(props) => {
          return <Register {...props}
          addUser={this.addUser}
          users={this.state.users} />
        }} />
                 <Route exact path="/profile" render={(props) => {
          return <Profile {...props}
          addProfile={this.addUser} />
        }} />
        <Route exact path="/login" component={Login} />
            </React.Fragment>
        )
    }
}