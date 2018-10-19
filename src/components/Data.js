import React, { Component } from 'react';
import '../App.css';

class Data extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <h1 className="data">One place to access <br/> everything and <br/> everyone.</h1>
        <h5 className="data_down">To all the doctos and nurses who wanted their <br/> work to get easier</h5>
        <h3 className="data_cont">Continue as</h3>
        <table>
          <tr style={{ width: '450px' }}>
            <td><a href="/rooms" className="btn btn-default my_btn">Nurse</a></td>
            <td><a href="/docs" className="btn btn-default my_btn1">Doctor</a></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Data;
