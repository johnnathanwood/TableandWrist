
import React, { Component } from "react"


export default class Profile extends Component {

    state = {
        profileImg: "",
        name: "",
        gender: "",
        age: "",
        aboutMe: "",
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructNewProfile = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        const profile = {
            profileImg: this.state.profileImg,
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
            height: this.state.height,
            aboutMe: this.state.aboutMe,
            userId: credentials.id,
        }
        this.props.addProfile(profile)
            .then(() => this.props.history.push("/"))
    }
    render() {

        return (
            <div>
                <div className="confirm">
                    <i className='close'>×</i>
                    <h1><i className="fa fa-check-circle fa-3x"></i>Boom! Profile Created</h1>
                </div>
                <form action="#" onSubmit={this.handleRegister}>
                    <h1>
                        Create User Profile
    <br></br>
                        <i className="fa fa-camera-retro fa-lg"></i>
                    </h1>

                    <div className="float-label">
                        <input onChange={this.handleFieldChange} type="text" name="name" id="name" />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className='row'>
                        <div className="float-label">
                            <i className="fa fa-caret-down"></i>
                            <select onChange={this.handleFieldChange} name="gender" id="gender">
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <label  htmlFor="gender">Gender</label>
                        </div>

                        <div className="float-label">
                            <input onChange={this.handleFieldChange} type="number" name="age" id="age" maxLength="2" />
                            <label htmlFor="age">Age</label>
                        </div>
                        <div className="float-label">
                            <i className="fa fa-caret-down"></i>
                            <select name="height" id="height">
                                <option value=""></option>
                                <option value="5-1">5'1"</option>
                                <option value="5-2">5'2"</option>
                                <option value="5-3">5'3"</option>
                                <option value="5-4">5'4"</option>
                                <option value="5-5">5'5"</option>
                                <option value="5-6">5'6"</option>
                                <option value="5-7">5'7"</option>
                                <option value="5-8">5'8"</option>
                                <option value="5-9">5'9"</option>
                                <option value="6-0">6'0"</option>
                                <option value="6-1">6'1"</option>
                                <option value="6-2">6'2"</option>
                                <option value="6-3">6'3"</option>
                                <option value="6-4">6'4"</option>
                                <option value="6-5">6'5"</option>
                                <option value="6-6">6'6"</option>
                                <option value="6-7">6'7"</option>
                                <option value="6-8">6'8"</option>
                                <option value="6-9">6'9"</option>
                                <option value="7-0">7'0"</option>
                            </select>
                            <label onChange={this.handleFieldChange} htmlFor="height">Height</label>
                        </div>
                        <div className="float-label">
                        <input onChange={this.handleFieldChange} type="text" name="aboutMe" id="aboutMe" />
                        <label htmlFor="aboutMe">About Me</label>
                    </div>
                    </div>
                    <button onClick={this.constructNewProfile} className="btn" type="submit">Submit</button>
                    <button className="btn" id="clear" type="reset" value="Reset">Reset</button>
                </form>
            </div>
        )
    }
}