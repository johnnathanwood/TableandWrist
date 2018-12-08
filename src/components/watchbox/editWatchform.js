import React, {Component} from 'react'

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

        let updatedWatch = {
            watch: this.state.watch,
        }
        this.props.editWatch(this.props.watchId, updatedWatch)
            .then(() => {
                this.props.close()
            })
    }

    render () {
        return (
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}