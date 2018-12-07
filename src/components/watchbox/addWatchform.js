import React, { Component } from 'react'
import { Button, Form, Header } from 'semantic-ui-react'


export default class AddWatch extends Component {

    state = {
        uploadedFileCloudinaryUrl: "",
        watchId: "",
        brand: "",
        model: "",
        year: "",
        price:""

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    newWatch = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))
        console.log(this.newWatch)
        let watches = 
        {
            id: this.state.watchId,
            brand: this.state.brand,
            model: this.state.model,
            year: this.state.year,
            price: this.state.price,
            userId: credentials.id
        
        }
        console.log(this.props)
        this.props.addWatch(watches)
        // this.setState({
        //   uploadedFileCloudinaryUrl: "",
        //   watchId: "",
        //   brand: "",
        //   model: "",
        //   year: "",
        //   price:""
        // })
    }

    render() {

        return (
            <React.Fragment>
                <Form className="watchForm">
                    <Form.Field>
                        <label htmlFor="watchId"></label>
                    </Form.Field>
                    <Form.Field>
                        <input onChange={this.handleFieldChange}
                            id="brand" value={this.state.brand}/>
                        <input onChange={this.handleFieldChange}
                            id="model" value={this.state.model}/>
                        <input onChange={this.handleFieldChange}
                            id="year" value={this.state.year}/>
                        <input onChange={this.handleFieldChange}
                            id="price" value={this.state.price}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button icon='save' size='mini' onClick={this.newWatch}/>
                </Form>
            </React.Fragment>
        )
    }
}
