import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

class Ward extends Component {
  render() {
    return (
      <div className="container-fluid patient">
        <h1 className="title">WardRooms</h1>
        <input className="form-control search" placeholder="Search" />
        <br />
        <div className="row">
          <div className="col-md-6 box">
            <div className="row dat">
              <div className="col-md-6">
                <h2 className="header">ROOM NO.</h2>
                <h5 className="head_val">201</h5>
              </div>
              <div className="col-md-6">
                <h2 className="header">NURSES</h2>
                <h5 className="head_val">Pradeep Agam</h5>
              </div>
            </div>
            <div className="row dat">
              <div className="col-md-6">
                <h2 className="header">CAPACITY</h2>
                <h5 className="head_val">12 / 15</h5>
              </div>
              <div className="col-md-6">

              </div>
            </div>
            <div className="arrow">
              <i className="fas fa-arrow-right icon"></i>
            </div>
          </div>
          <div className="col-md-6 box">

          </div>
        </div>
      </div>
    )
  }
}

export default Ward;
