import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import 'semantic-ui-css/semantic.min.css';
import TableWrist from './components/TableWrist';



ReactDOM.render(
    <Router>
    <TableWrist />
    </Router>
    , document.getElementById('root'))

