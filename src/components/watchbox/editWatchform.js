import React, {Component} from 'react'
import { Button, Form} from 'semantic-ui-react'

export default class EditWatchForm extends Component {

    state = {

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)   
    }

    componentDidMount() {
        this.setState(this.props.watch)
    }

    updateWatch = (evt) => {
        evt.preventDefault()
        const credentials = JSON.parse(localStorage.getItem('credentials'))

        let updatedWatch = {
            id: this.state.watchId,
            uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl,
            brand: this.state.brand,
            model: this.state.model,
            year: this.state.year,
            price: this.state.price,
            userId: credentials.id
        }
        this.setState({watches:updatedWatch})
        this.props.editWatch(this.props.watchId, updatedWatch)
        this.props.close() 
    }

    render () {
        return (
            <React.Fragment>
                <Form className="watchForm">
                <div className="photo">
                    <div>
                        <div className="FileUpload">
                        <br/>
                    </div>
                        <div>
                            {this.props.watches.uploadedFileCloudinaryUrl === '' ? null :
                                <div>
                                    <aside className="watchImg" src={this.state.uploadedFile}></aside>
                                    <img src={this.state.uploadedFileCloudinaryUrl} alt=""/>
                                </div>}
                                </div>
                        </div>
                    </div>
                    <Form.Field>
                        <label htmlFor="watchId"></label>
                    </Form.Field>
                    <Form.Field>
                        <input onChange={this.handleFieldChange}
                            id="brand" defaultValue={this.props.watches.brand}/>
                        <input onChange={this.handleFieldChange}
                            id="model" defaultValue={this.props.watches.model}/>
                        <input onChange={this.handleFieldChange}
                            id="year" type="number" defaultValue={this.props.watches.year}/>
                        <input onChange={this.handleFieldChange}
                            id="price" type="number" defaultValue={this.props.watches.price}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button icon='save' size='mini' onClick={this.updateWatch}/>
                </Form>
            </React.Fragment>
        )
    }
}