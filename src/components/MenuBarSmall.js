import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

class MenuBarSmall extends Component {
  render() {
    return (
      <div className="container-fluid menu_close">
          <div className="row each">
            <div className="col-md-12" style={{ textAlign: 'center'}}>
              <i className="fas fa-home icon_left1"></i>
            </div>
          </div>

          <div className="row each">
            <div className="col-md-12" style={{ textAlign: 'center'}}>
              <i className="far fa-user icon_left1"></i>
            </div>
          </div>

          <div className="row each">
            <div className="col-md-12" style={{ textAlign: 'center'}}>
              <i className="far fa-address-card icon_left1"></i>
            </div>
          </div>
      </div>
    )
  }
}

export default MenuBarSmall;
