import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery, getDocsQuery, subscribeQuery } from '../queries/Queries';
import { Query, Mutation } from "react-apollo";
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
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

  subscribeDoc(patients, pat_id, doc_id, subscribe, e) {
    var new_patients = patients;
    new_patients["id"].push(parseInt(pat_id));
    console.log(patients["id"]);
    subscribe({
      variables: { id: doc_id, patients: new_patients },
    });
  }

  render() {
    const { pat_id } = this.props;
    return (
      <div className="container-fluid patient">
        <h1 className="title">Doctors</h1>
        <input className="form-control search" placeholder="Search" />
        <br />
        <Query query={getDocsQuery}>
        {
          ({ loading, error, data }) => {
            if(loading)
              return <TodoLoaderNotes />
            if(error)
              return <p>Check your internet connection</p>;

            return data.doctors.map((p) => (
              <div className="row dab" key={p.id}>
                <div className="col-md-12 box1">
                  <div className="row">
                    <div className="col-md-4">
                      <h2 className="header">DOCTOR NAME</h2>
                      <h5 className="head_val">{p.name}</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">POSITION</h2>
                      <h5 className="head_val">{p.position}</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">SPECIALIZATION</h2>
                      <h5 className="head_val">{p.special}</h5>
                    </div>
                    <Mutation mutation={subscribeQuery}>
                    {
                      (subscribe, { data }) => (
                        <div className="arrow1">
                            <i className="fas fa-share-square icon_left_sq1" onClick={this.subscribeDoc.bind(this, p.patients, this.props.pat_id, p.id, subscribe)}></i>
                        </div>
                      )
                    }
                    </Mutation>
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
