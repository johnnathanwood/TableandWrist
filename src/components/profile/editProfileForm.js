import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'

export default class EditProfileForm extends Component {

    state = {
        // message: this.props.message
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        
    }

    componentDidMount() {
        // const message = this.props.messages.find(a => a.id === this.props.messageId)
        this.setState(this.props.users)
    }

    updateProfile = (evt) => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        let updatedProfile = {
            uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl,
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
            height: this.state.height,
            aboutMe: this.state.aboutMe,
            userId: credentials.id,
        } 
        this.setState({users:updatedProfile})
        console.log(updatedProfile)
        this.props.editUser(this.props.userId, updatedProfile)
        this.props.close()
        console.log(this.props.users)
        
    }

    render () {
        return (
        <React.Fragment>
                <form action="#" onSubmit={this.handleRegister}>
                    <h1>
                        Create User Profile
    <br></br>
                        <i className="fa fa-camera-retro fa-lg"></i>
                    </h1>

                    <div className="float-label">
                        <input onChange={this.handleFieldChange} type="text" name="name" id="name" defaultValue={this.props.users.name}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className='row'>
                        <div className="float-label">
                            <i className="fa fa-caret-down"></i>
                            <select onChange={this.handleFieldChange} defaultValue={this.props.users.gender} name="gender" id="gender">
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <label htmlFor="gender">Gender</label>
                        </div>

                        <div className="float-label">
                            <input onChange={this.handleFieldChange} defaultValue={this.props.users.age} type="number" name="age" id="age" maxLength="2" />
                            <label htmlFor="age">Age</label>
                        </div>
                        <div className="float-label">
                            <input onChange={this.handleFieldChange} defaultValue={this.props.users.aboutMe} type="text" name="aboutMe" id="aboutMe" />
                            <label htmlFor="aboutMe">About Me</label>
                        </div>
                    </div>
                    <Button icon='save' size='mini' onClick={this.updateProfile}></Button>
                    <button className="btn" id="clear" type="reset" value="Reset">Reset</button>
                </form>       
        </React.Fragment>
        )
    }
}