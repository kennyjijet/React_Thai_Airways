import React, { Component } from 'react';
import Booking from './Components/Booking';

class App extends Component {
  constructor(props){
    super();
    this.state  = {}
  }
  render() {
    let seats = this.state.seats;
    let count = 0;
            return (
              <div className="App">
              <Booking seats={this.state.seats} reservations={this.state.Booking} />
              </div>
            );
    }
}
export default App;
