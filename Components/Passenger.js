import React, { Component } from 'react';
import '../App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";


class Passenger extends Component {
    constructor() {
    super();
    	
    }
    render() {
    	alert(this.props.location.testValue)
        return (

        	<div>
        	Tests
        		
        	</div>
        	)
    }
}


export default Passenger;


