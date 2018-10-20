import React, { Component } from 'react';
import $ from 'jquery';
import '../App.css';

class DocMenuBar extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    return (
      <div className="container-fluid menu">
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

export default DocMenuBar;
