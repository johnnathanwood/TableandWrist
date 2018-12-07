import React, {Component} from 'react'
import { Button, Form} from 'semantic-ui-react'

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
        this.setState(this.props.profiles)
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
        this.setState({profiles:updatedProfile})
        console.log(updatedProfile)
        this.props.editProfile(this.props.profileId, updatedProfile)
        this.props.close()
        console.log(this.props.profile)
        
    }

    render () {
        return (
        <React.Fragment>
             {/* <div className="confirm">
                    <label htmlFor="profileImg">Chose a profile image</label>
                </div>
                <div>
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        >
                        <p>Drop an image or click to select a file to upload.</p>
                    </Dropzone>
                    <div>
                        <div className="FileUpload">
                            ...
                        </div>

                        <div>
                            {this.props.profiles.uploadedFileCloudinaryUrl === '' ? null :
                                <div>
                                    <p>{this.state.uploadedFile}</p>
                                    <img src={this.props.profiles.uploadedFileCloudinaryUrl} />
                                </div>}
                        </div>
                    </div>
                </div> */}
                <form action="#" onSubmit={this.handleRegister}>
                    <h1>
                        Create User Profile
    <br></br>
                        <i className="fa fa-camera-retro fa-lg"></i>
                    </h1>

                    <div className="float-label">
                        <input onChange={this.handleFieldChange} type="text" name="name" id="name" defaultValue={this.props.profiles.name}/>
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className='row'>
                        <div className="float-label">
                            <i className="fa fa-caret-down"></i>
                            <select onChange={this.handleFieldChange} defaultValue={this.props.profiles.gender} name="gender" id="gender">
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                            <label htmlFor="gender">Gender</label>
                        </div>

                        <div className="float-label">
                            <input onChange={this.handleFieldChange} defaultValue={this.props.profiles.age} type="number" name="age" id="age" maxLength="2" />
                            <label htmlFor="age">Age</label>
                        </div>
                        <div className="float-label">
                            <input onChange={this.handleFieldChange} defaultValue={this.props.profiles.aboutMe} type="text" name="aboutMe" id="aboutMe" />
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