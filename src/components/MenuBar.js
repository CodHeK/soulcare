import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

class MenuBar extends Component {
  render() {
    return (
      <div className="container-fluid menu">
          <div className="row each">
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="fas fa-home icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>WardRooms</h3>
            </div>
          </div>

          <div className="row each">
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="far fa-user icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>Patients</h3>
            </div>
          </div>

          <div className="row each">
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="far fa-address-card icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>Doctors</h3>
            </div>
          </div>
      </div>
    )
  }
}

export default MenuBar;
