import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery } from '../queries/Queries';
import { Query } from "react-apollo";
import TodoLoader from '../Loaders/TodoLoader';
import TodoLoaderPatient from '../Loaders/TodoLoaderPatient';
import Nurses from './Nurses';
import $ from 'jquery';
import '../App.css';

class Patient extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    const { room_no } = this.props;
    return (
      <div className="container-fluid patient">
        <h1 className="title">Patients</h1>
        <h4 className="title1">ROOM NO. {this.props.room_no}</h4>
        <input className="form-control search" placeholder="Search" />
        <br />
        <Query query={FetchAllPatientsQuery} variables={{ room_no }}>
        {
          ({ loading, error, data }) => {
            if(loading)
              return <TodoLoaderPatient />
            if(error)
              return <p>Check your internet connection</p>;

            if(data.patient.length == 0)
              return <h3>No patients added yet! :\/ </h3>;

            return data.patient.map((p) => (
              <div className="row dab" key={p.id}>
                <div className="col-md-12 box1">
                  <div className="row">
                    <div className="col-md-3">
                      <h2 className="header">PATIENT NAME</h2>
                      <h5 className="head_val">{p.name}</h5>
                    </div>
                    <div className="col-md-1">
                      <h2 className="header">AGE</h2>
                      <h5 className="head_val">{p.age}</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">TIMELINE</h2>
                      <h5 className="head_val">{p.start_date.slice(0, 10)} &nbsp;&nbsp; {p.discharge_date.slice(0, 10)}</h5>
                    </div>
                    <div className="col-md-2">
                      <h2 className="header">PROBLEM</h2>
                      <h5 className="head_val">{p.disease}</h5>
                    </div>
                    <div className="col-md-2">
                      <h2 className="header">DOCTOR</h2>
                      <h5 className="head_val">{p.doctor}</h5>
                    </div>
                  </div>
                  <div className="arrow1">
                    <a href={"/patient/" + p.id} onClick={this.select.bind(this, "chat")}><i className="fas fa-arrow-right icon"></i></a>
                  </div>
                </div>
              </div>
            ))
          }
        }
        </Query>


      </div>
    )
  }
}

export default Patient;
