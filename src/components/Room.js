import React, { Component } from 'react';
import MainNavBar from './MainNavBar';
import MenuBar from './MenuBar';
import Start from './Start';
import Ward from './Ward';
import MenuBarSmall from './MenuBarSmall';
import '../App.css';

class Room extends Component {
  constructor() {
    super();
    this.state = {
      open: 1,
      option: "start",
    }
  }

  close() {
    var toggle = this.state.open;
    if(toggle === 1)
      this.setState({ open: 0 });
    else
      this.setState({ open: 1 });
  }

  change(val) {
    this.setState({ option: val })
  }

  render() {
    const { open, option } = this.state;
    if(open === 1) {
      var menu = <MenuBar func={this.change.bind(this)} />;
      var btn = <i className="fas fa-arrow-left icon" onClick={this.close.bind(this)}></i>;
    }
    else {
      var menu = <MenuBarSmall />;
      var btn = <i className="fas fa-arrow-right icon" onClick={this.close.bind(this)}></i>;
    }

    if(option === "start") {
      var display = <Start />;
    }
    else if(option == "ward") {
      var display = <Ward />
    }

    return (
      <div className="container-fluid rooms">
        <MainNavBar />
        <div className="row">
          <div className="col-md-3">
            {menu}
          </div>
          <div className="col-md-9">
            {display}
          </div>
        </div>
      </div>
    )
  }
}

export default Room;
