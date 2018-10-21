import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

class MenuBar extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }


  render() {
    return (
      <div className="container-fluid menu">
          <div className="row each" onClick={this.select.bind(this, "ward")}>
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="fas fa-home icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>Ward rooms</h3>
            </div>
          </div>

          <div className="row each" onClick={this.select.bind(this, "patient_all")}>
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="far fa-user icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>Patients</h3>
            </div>
          </div>

          <div className="row each" onClick={this.select.bind(this, "doctor")}>
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
