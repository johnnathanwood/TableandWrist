import React, { Component } from 'react'
import moment from 'moment';


export default class Date extends Component {
    constructor(props) {
      super(props);
      this.state = {date: moment().format('DD-MM-YYYY HH:mm').fromNow()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: moment().format('DD-MM-YYYY HH:mm').fromNow()
      });
    }
  
    render() {
      return (
        <div>
          date={this.state.date}
        </div>
      );
    }
  }