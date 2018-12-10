import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import DataManager from '../module/DataManager'
import Login from "./login/LoginForm"
import Register from "./login/RegisterForm"
import CreateProfile from './profile/makeProfileForm'
import EditProfileForm from './profile/editProfileForm'
import Confirm from './profile/confirmProfile';
import ProfilePage from './profile/profilePage';
import WatchCollection from './watchbox/watchCollection'
import EditWatchForm from './watchbox/editWatchform'
import MessageList from './watchform/messageList'
import EditMessageForm from './watchform/editMessageForm'



export default class ApplicationViews extends Component {
    isAuthenticated = () => localStorage.getItem("credentials") !== null
    credentials = JSON.parse(localStorage.getItem('credentials'))
    credentials = { id: 1 }
    state = {
        users: [],
        profiles: [],
        watches: [],
        messages: [],
        favorites: [],
        isLoaded: false
    }

    addUser = users => DataManager.add("users", users)
        .then(() => DataManager.getAll("users"))
        .then(users => this.setState({
            users: users
        }))
    addProfile = profiles => DataManager.add("profiles", profiles)
        .then(() => DataManager.getAllByUser("profiles",this.credentials.id))
        .then(profiles => this.setState({
            profiles: profiles
        }))
    addWatch = watches => DataManager.add("watches", watches)
        .then(() => DataManager.getAll("watches"))
        .then(watches => this.setState({
            watches: watches
        }))
    addMessage = messages => DataManager.add("messages", messages)
        .then(() => DataManager.getAll("messages"))
        .then(messages => this.setState({
            messages: messages
        }))
    editProfile = (id, profiles) => {
        console.log("profile", id, profiles)
        DataManager.edit("profiles", id, profiles)
            .then((profiles) => {
                console.log(profiles)
                DataManager.getAll("profiles").then(result => {
                    console.log(result)
                    this.setState({
                        profiles: result
                    })
                })
            })
    }
    editWatch = (id, watches) => {
        DataManager.edit("watches", id, watches)
            .then((watches) => {
                console.log(watches)
                DataManager.getAll("watches").then(result => {
                    this.setState({
                        watches: result
                    })
                })
            })
    }
    deleteWatch = id => DataManager.delete("watches", id)
    .then(() => DataManager.getAll("watches"))
    .then(watches => this.setState({
      watches: watches
    }))
    deleteMessage = id => DataManager.delete("messages", id)
    .then(() => DataManager.getAll("messages"))
    .then(messages => this.setState({
      messages: messages
    }))
    editMessage = (id, messages) => DataManager.edit("messages", id, messages)
        .then(() => DataManager.getAll("messages"))
        .then(messages => this.setState({
            messages: messages
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
        DataManager.getAll("watches")
            .then(allWatches => {
                newState.watches = allWatches
            })
        DataManager.getAll("messages")
            .then(allMessages => {
                newState.messages = allMessages
            })
        DataManager.getAll("favorites")
            .then(allFavorites => {
                newState.favorites = allFavorites
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
                <Route exact path="/profile" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ProfilePage {...props}
                            profiles={this.state.profiles}
                            editProfile={this.editProfile}
                            watches={this.state.watches}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/profile/edit/:profileId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EditProfileForm {...props}
                            editProfile={this.editProfile}
                            profiles={this.state.profiles} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/watchbox" render={(props) => {
                    return <WatchCollection {...props}
                        users={this.state.users}
                        watches={this.state.watches}
                        addWatch={this.addWatch}
                        editWatch={this.editWatch}
                        deleteWatch={this.deleteWatch}
                    />
                }} />
                <Route exact path="/watchbox/edit/:watchId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EditWatchForm {...props}
                            editWatch={this.editWatch}
                            watches={this.state.watches} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/watchform" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <MessageList {...props}
                            addMessage={this.addMessage}
                            editMessage={this.editMessage}
                            deleteMessage={this.deleteMessage}
                            users={this.state.users}
                            messages={this.state.messages} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />
                <Route exact path="/watchform/edit/:messageId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EditMessageForm {...props} editMessage={this.editMessage} message={this.state.messages} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
            </React.Fragment>
        )
    }
}