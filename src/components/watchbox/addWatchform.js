import React, { Component } from 'react'
import { Button, Form, Grid} from 'semantic-ui-react'
import request from 'superagent';
import Dropzone from 'react-dropzone';
import './watchImg.css'

const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/tableandwrist/image/upload'
const CLOUDINARY_UPLOAD_PRESET = 'tnsexefg'

export default class AddWatch extends Component {
  close = () => this.setState({ open: false })

    state = {
        open: false, 
        uploadedFileCloudinaryUrl: "",
        watchId: "",
        brand: "",
        model: "",
        year: "",
        price:""

    }
    closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
    }
  
    close = () => this.setState({ open: false })

    onImageDrop(files) {
      this.setState({
          uploadedFile: files[0]
      });

      this.handleImageUpload(files[0]);
  }

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

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
    constructor(props) {
      super(props)
      const src = ''
      this.state = {
          preview: null,
          value:'',
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


    newWatch = evt => {
        evt.preventDefault()
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        
        console.log(this.newWatch)
        let watches = 
        {
            id: this.state.watchId,
            uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl,
            brand: this.state.brand,
            model: this.state.model,
            year: this.state.year,
            price: this.state.price,
            userId: credentials.id
        
        }
        console.log(this.props)
        this.props.addWatch(watches)
        this.props.refreshData()
        this.props.close()
    }

    

    render() {
      
      

        return (
            <React.Fragment>
                <Grid centered>
                <Form className="watchForm">
                <div className="photo">
                    {
                        <Dropzone
                            multiple={false} accept="image/*"
                            onDrop={this.onImageDrop.bind(this)}>
                            <p>Click or drop image of your watch</p>
                        </Dropzone>
                    }
                    <div>
                        <div className="FileUpload">
                        <br/>
                    </div>
                        <div>
                            {this.state.uploadedFileCloudinaryUrl === '' ? null :
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
                            id="brand" value={this.state.brand}/>
                        <input onChange={this.handleFieldChange}
                            id="model" value={this.state.model}/>
                        <input onChange={this.handleFieldChange}
                            id="year" type="number" value={this.state.year}/>
                        <input onChange={this.handleFieldChange}
                            id="price" type="number" value={this.state.price}/>
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button icon='save' size='mini' onClick={this.newWatch}/>
                </Form>
                </Grid>
            </React.Fragment>
        )
    }
}
