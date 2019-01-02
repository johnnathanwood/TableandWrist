import React, { Component } from "react"
import EditWatchModal from "./editWatchModal";
import { Button, Divider, Grid, Image, Header,Icon} from 'semantic-ui-react'
import WatchBoxCard from "./watchBoxCard";
import Clock from "./clock"
import AddWatchModal from "./addWatchModal";
import './watchbox.css'




export default class WatchCollection extends Component {
    credentials = JSON.parse(sessionStorage.getItem('credentials'))


    
    render() {
        const credentials = JSON.parse(sessionStorage.getItem('credentials'))
        console.log("watchbox",this.props.watch)
        return (
            <React.Fragment>
            <Header as='h2' icon textAlign='center'>
      <Icon name='wait' circular />
      <Header.Content>Watch Box</Header.Content>
    <Clock className="clock"/>
    </Header>
    <br></br>
          <Image src='https://airows.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_1024/MTM2MDUyODIxMjI4MzE4Njkw/box-b-8-cropped-2_1024x1024jpg.webp' size='huge' rounded centered />
                <br></br>
                <br></br>
                <Grid centered>
                <Button basic> <AddWatchModal {...this.props} /></Button>
                </Grid>
                <br></br>
                <br></br>
                <Grid relaxed ='very' centered>
                {
                this.props.watch.map(watch => <WatchBoxCard {...this.props} watch={watch} key={watch.id}/>
                )
                }
                 </Grid>
            </React.Fragment>

        )
    }
}

