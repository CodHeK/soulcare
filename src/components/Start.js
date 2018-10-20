import React, { Component } from 'react';
import $ from 'jquery';
import img from '../assets/img.png';
import '../App.css';

class Start extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="cont">
          <img src={img} width="355" height="355" className="img" />
          <br />
          <h1 className="started">Lets get you started.</h1>
          <h5 className="select">Select <a href="/patients" className="link">patients</a> or <a href="/wards" className="link">wards</a> to continue.</h5>
        </div>
      </div>
    )
  }
}

export default Start;
