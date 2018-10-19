import React, { Component } from 'react';
import MainNavBar from './MainNavBar';
import MenuBar from './MenuBar';
import MenuBarSmall from './MenuBarSmall';
import img from '../assets/img.png';
import '../App.css';

class Room extends Component {
  constructor() {
    super();
    this.state = {
      open: 1,
    }
  }

  close() {
    var toggle = this.state.open;
    if(toggle === 1)
      this.setState({ open: 0 });
    else
      this.setState({ open: 1 });
  }

  render() {
    const { open } = this.state;
    if(open === 1) {
      var menu = <MenuBar />;
      var btn = <i className="fas fa-arrow-left icon" onClick={this.close.bind(this)}></i>
    }
    else {
      var menu = <MenuBarSmall />;
      var btn = <i className="fas fa-arrow-right icon" onClick={this.close.bind(this)}></i>
    }
    return (
      <div className="container-fluid rooms">
        <MainNavBar />
        <div className="row">
          <div className="col-md-3">
            {menu}
          </div>
          <div className="col-md-9">
            <div className="cont">
              <img src={img} width="355" height="355" className="img" />
              <br />
              <h1 className="started">Lets get you started.</h1>
              <h5 className="select">Select <a href="/patients" className="link">patients</a> or <a href="/wards" className="link">wards</a> to continue.</h5>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Room;
