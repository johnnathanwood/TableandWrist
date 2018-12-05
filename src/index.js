import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import TableWrist from './components/TableWrist';


ReactDOM.render(<Router><TableWrist /></Router>, document.getElementById('root'))


