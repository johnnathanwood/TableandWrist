
import React, { Component } from "react"
import "./profilePage.css"
import { Comment, Image, Card, Icon, Grid, Divider, Header, Advertisement } from 'semantic-ui-react'
import ProfileCollection from "../watchbox/showWatchesonProfile";
import DataManager from "../../module/DataManager";





export default class ProfilePage extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))
    state = {
        watches: [],
        userProfile: [],

    }

    componentDidMount() {

        console.log("TEST", this.props.user)
        DataManager.getUserWatches("watches", this.props.user.userId)
            .then(watches => {
                console.log("watches", watches)
                this.setState({ watches: watches })
            }
            )
    }

    render() {
        console.log("Jase", this.props.user)
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        return (
            <React.Fragment>
                <Image centered size='medium' src="https://res.cloudinary.com/tableandwrist/image/upload/v1544900037/twlogo.jpg" />
                <Header as='h2' icon textAlign='center'>
                    <Image circular src={this.props.user.uploadedFileCloudinaryUrl} /> Welcome back {credentials.username}
                </Header>
                <br></br>
                <br></br>
                <div id="react-container"></div>
    <script src="js/Note.js" type="text/babel" ></script>
                <Divider horizontal className="watchdivider">
                    <Header as='h4'>
                        <Icon />
                        <div id='glass'>
                            <div id='twelve'>XII</div>
                            <div id='three'>III</div>
                            <div id='six'>VI</div>
                            <div id='nine'>IX</div>
                        <div id='center'>
                                <div id='name'>shadiblanc</div>
                                <div id='smallHand'></div>
                                <div id='midHand'></div>
                                <div id='bigHand'></div>
                                <div id='dot'></div>
                                <div id='desc'>automatic</div>
                            </div>
                        </div>
                    </Header>
                </Divider>
                <br></br>
                <br></br>
                <Grid relaxed='very' centered>
                    {
                        this.state.watches.map(watch => {
                            console.log("look", watch)
                            return <ProfileCollection {...this.props} watch={watch} key={watch.id} />
                        })
                    }
                </Grid>
            </React.Fragment>
        )
    }
}
