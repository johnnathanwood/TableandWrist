import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import CreateProfile from './profile/makeProfileForm'
import Confirm from './profile/confirmProfile';
import ProfilePage from './profile/profilePage';


export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    credentials = JSON.parse(localStorage.getItem('credentials'))
    credentials = { id: 1 }

    state = {
        users: [],
        profiles: [],
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
              newState.news = allProfiles
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
                <Route exact path="/createProfile" render={(props) => {
                    return <CreateProfile {...props}
                        addProfile={this.addProfile} />
                }} />
                <Route exact path="/login" component={Login} 
                />
                <Route exact path="/confirm" render={(props) => {
                    return <Confirm {...props}
                        addProfile={this.addProfile} />
                }} />
                <Route exact path="/login" component={Login} 
                />
                <Route exact path="/profile" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ProfilePage {...props}
                            profiles={this.state.profiles}
                            users={this.state.users}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}