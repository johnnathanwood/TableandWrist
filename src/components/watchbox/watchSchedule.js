import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios'

moment.locale('en-GB');
BigCalendar.momentLocalizer(moment);


class WatchRotation extends Component {
    constructor(props) {
        super(props)
        this.state = {
          cal_events: [],
        }
    }
 componentDidMount() { 
    let self = this
    axios.get('http://localhost:3001/watches')
        .then(function (response) {
          console.log(response.data);
          let appointments = response.data;
          
          for (let i = 0; i < appointments.length; i++) {
            console.log(appointments[i])
          }    
    
        })
        .catch(function (error) {
          console.log(error);
        });
    }//Fetch events from database here

render() {
    const cal_events = []
    return (
      <div className="WatchRotation">
        <header className="WatchRotation-header">
          <img src="" className="WatchRotation-logo" alt="logo" />
          <h1 className="WatchRotation-title">Test Calendar</h1>
        </header>
        <div style={{ height: 700 }}>
          <BigCalendar
            events={cal_events}
            step={30}
            defaultView='week'
            views={['month','week','day']}
            defaultDate={new Date()}
          />
        </div>
      </div>
    );
  }
}
export default WatchRotation;