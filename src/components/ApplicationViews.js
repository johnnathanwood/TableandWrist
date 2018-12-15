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
import Community from './community/communityList';
import FriendsList from './friends/friendsList'



export default class ApplicationViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null
    credentials = JSON.parse(sessionStorage.getItem('credentials'))
    // credentials = {id:1}

    state = {
        users: [],
        watches: [],
        userWatches:[],
        messages: [],
        favorites: [],
        relationships: [],
        friendsArray: [],
        userProfile: [],
        isLoaded: false
    }
    addUser = users => DataManager.add("users", users)
        .then(() => DataManager.getAll("users"))
        .then(users => this.setState({
            users: users
        }))

    addUserProfile = (obj, id) => DataManager.edit("users", id, obj)
        .then(() => DataManager.getAllByUser("users", this.credentials.user.id))
        .then(users => this.setState({
            users: users
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
    editUser = (id, users) => {
        // console.log("profile", id, profiles)
        DataManager.edit("users", id, users)
            .then((users) => {
                console.log(users)
                DataManager.getAll("users").then(result => {
                    console.log(result)
                    let newState = {};
                    newState.users = result;
                    DataManager.getAllByUser("users", parseInt(this.credentials.id))
                        .then(user => {
                            newState.userProfile = user
                            this.setState(newState)
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
    getRelationships = () => {
        return DataManager.getData("relationships")
            .then(relationships => this.setState({ relationships: relationships }))
    }

    findRelationships = (currentUserId) => {
        return this.getUsers().then(() => this.getRelationships())
            .then(() => {
                return this.state.relationships.filter((relationship) => relationship.userId === currentUserId)

            })
    }

    findFriends = (currentUserId) => {
        return this.findRelationships(currentUserId)
            .then((relationships) => {
                let friendsArray = []
                relationships.forEach((relationship) => {
                    friendsArray.push(this.state.users.find(users => users.id === relationship.friendId))
                })
                this.setState({ friendsArray: friendsArray })
            })
    }
    getUsers = () => {
        return DataManager.getData("users")
            .then((users) => this.setState({ users: users }))
    }


    componentDidMount() {
        if (this.isAuthenticated()) {
        this.refreshData().then(() => this.grabFriends())
    }}

    refreshData = () => {
        const newState = {}
        if (this.isAuthenticated()) {
        return DataManager.getAll("users")
            .then(allUsers => {
                newState.users=allUsers
                return DataManager.getAll("watches")
            })
            .then(allWatches => {
                newState.userWatches = allWatches
                return DataManager.getUserWatches("watches", parseInt(this.credentials.id))
            })
            .then(userWatches => {
                console.log("userWatches",userWatches)
                newState.userWatches = userWatches
                return DataManager.getAll("messages")
            })
            .then(allMessages => {
                newState.messages = allMessages
                return DataManager.getAllByUser("users", parseInt(this.credentials.id))
            })
            .then(userProfile => {
                newState.userProfile = userProfile
                newState.isLoaded = true
                this.setState(newState)
            })

    }}

    grabFriends = () => {
        let temp = this.state.users
        console.log(temp)
        DataManager.getData("relationships")
            .then(allRelationships => {
                console.log(allRelationships)
                let friends = []
                allRelationships.forEach(person => {
                        if (this.credentials.id === person.userId) {
                            temp.map(user => {
                                if (person.friendId === user.id) {
                                    friends.push(user)
                                }
                            })   
                        }
                    
                })
                console.log(friends)
                return friends
            })
            .then((friends) =>
                this.setState({ relationships: friends }))
    }

    render() {
        if (this.state.isLoaded){
        console.log("j", this.state.userProfile)
        return (
            <React.Fragment>
                <Route exact path="/register" render={(props) => {
                    return <Register {...props}
                        addUser={this.addUser}
                        users={this.state.users} />
                }} />
                <Route exact path="/createProfile" render={(props) => {
                    return <CreateProfile {...props}
                        addUserProfile={this.addUserProfile} />
                }} />
                <Route exact path="/login" render={(props) => {
                    return <Login {...props}
                        refreshData={this.refreshData} />
                }}

                />
                <Route exact path="/confirm" render={(props) => {
                    return <Confirm {...props}
                        addUser={this.addUser}
                        user={this.state.userProfile} />
                }} />
                <Route exact path="/profile" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <ProfilePage {...props}
                            users={this.state.users}
                            editUser={this.editUser}
                            watches={this.state.watches}
                            user={this.state.userProfile}
                            watch={this.state.userWatches}
                        />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/profile/edit/:profileId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EditProfileForm {...props}
                            editUser={this.editUser}
                            user={this.state.userProfile} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/watchbox" render={(props) => {
                    return <WatchCollection {...props}
                        refreshData={this.refreshData}
                        users={this.state.users}
                        watches={this.state.watches}
                        addWatch={this.addWatch}
                        editWatch={this.editWatch}
                        deleteWatch={this.deleteWatch}
                        watch={this.state.userWatches}
                        relationships={this.state.relationships}
                        friendsArray={this.state.friendsArray}
                        findFriends={this.findFriends}
                        addRelationship={this.addRelationship}
                        grabFriends={this.grabFriends} 
                        user={this.state.userProfile}
                        
                    />
                }} />
                <Route exact path="/watchbox/edit/:watchId(\d+)" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EditWatchForm {...props}
                            editWatch={this.editWatch}
                            watches={this.state.watches} 
                            refreshData={this.refreshData}
                            />
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
                <Route exact path="/community" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <Community {...props}
                            relationships={this.state.relationships}
                            friendsArray={this.state.friendsArray}
                            findFriends={this.findFriends}
                            addRelationship={this.addRelationship}
                            users={this.state.users} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/friends" render={(props) => {
                    return <FriendsList {...props}
                        relationships={this.state.relationships}
                        friendsArray={this.state.friendsArray}
                        findFriends={this.findFriends}
                        addRelationship={this.addRelationship}
                        users={this.state.users}
                        grabFriends={this.grabFriends} 
                        watches={this.state.watches}
                        user={this.state.userProfile}
                        watch={this.state.userWatches}/>
                }} />
            </React.Fragment>
        )
    }else{
      return  <p>Page Loading</p>
    }
    }
}