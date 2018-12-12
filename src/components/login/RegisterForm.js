
import React, { Component } from "react"


export default class Register extends Component {

    state = {
        username: "",
        email: "",
        password: "",
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = (e) => {
        e.preventDefault()
    }
    handleButtonClick = () => {
        document.location.href = 'http://localhost:3000/login'
         const users = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        }
         this.props.addUser(users)
            .then(() => this.props.history.push("/login"))
     }

    render() {


        return (
            <div className="forms">
                <div className="registerForm">
                    <form onSubmit={this.handleRegister}>
                        <h1 className="h3 mb-3 font-weight-normal">Please Create Account</h1>
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
                        <button type="submit" onClick={this.handleButtonClick} className="btn btn-primary">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}