import React, { Component } from "react"
import Dropzone from 'react-dropzone';
import request from 'superagent';
import DataManager from '../../module/DataManager'


const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/tableandwrist/image/upload'
const CLOUDINARY_UPLOAD_PRESET = 'zyoajlhe'
export default class CreateProfile extends Component {

    state = {
        uploadedFileCloudinaryUrl: "",
        name: "",
        gender: "",
        age: "",
        aboutMe: "",
    }
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }
    addUserProfile = (obj, id) => DataManager.edit("users", id, obj)
        .then(() => DataManager.getAllByUser("users", this.credentials.users.id))
        .then(users => this.setState({
            users: users
        }))

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructor(props) {
        super(props)
        const src = ''
        this.state = {
            preview: null,
            src
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    onClose() {
        this.setState({ preview: null })
    }

    onCrop(preview) {
        this.setState({ preview })
    }

    constructNewProfile = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        const users = {
            uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl,
            name: this.state.name,
            gender: this.state.gender,
            age: this.state.age,
            height: this.state.height,
            aboutMe: this.state.aboutMe,
            userId: credentials.id,
        }
        this.addUserProfile(users, credentials.id)
        .then(() => this.props.history.push("/login"))
            
    }
    render() {

        return (
            <React.Fragment>
                <div className="confirm">
                    <label htmlFor="profileImg">Chose a profile image</label>
                </div>
                <div>
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.onImageDrop.bind(this)}>
                        <p>Drop an image or click to select a file to upload.</p>
                    </Dropzone>
                    <div>
                        <div className="FileUpload">
                            ...
                        </div>

                        <div>
                            {this.state.uploadedFileCloudinaryUrl === '' ? null :
                                <div>
                                    <p src={this.state.uploadedFile}></p>
                                    <img alt="profile" src={this.state.uploadedFileCloudinaryUrl} />
                                </div>}
                        </div>
                    </div>
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
                            <label htmlFor="gender">Gender</label>
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
            </React.Fragment>
        )
    }
}