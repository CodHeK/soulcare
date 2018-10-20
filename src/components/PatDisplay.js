import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery, FetchAllPatientsQueryById } from '../queries/Queries';
import { Query } from "react-apollo";
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
import Nurses from './Nurses';
import $ from 'jquery';
import '../App.css';

class PatDisplay extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    const { pat_id } = this.props;
    console.log("In PatDisplay");
    return (
      <div className="container-fluid">
        <Query query={FetchAllPatientsQueryById} variables={{ pat_id }}>
        {
          ({ loading, error, data }) => {
            if(loading)
              return <TodoLoaderNotes />
            if(error)
              return <p>Check your internet connection</p>;

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
                  </div>
                  <div className="arrow1">
                    <a href={"/docs/patients/" + p.id} onClick={this.select.bind(this, "chat")}><i className="fas fa-arrow-right icon"></i></a>
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

export default PatDisplay;
