import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery, getDocsQuery, subscribeQuery } from '../queries/Queries';
import { Query, Mutation } from "react-apollo";
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
import Nurses from './Nurses';
import $ from 'jquery';
import '../App.css';

class AllDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed: "",
    }
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    const { pat_id } = this.props;
    return (
      <div className="container-fluid patient">
        <h1 className="title">Doctors</h1>
        <input className="form-control search" placeholder="Search" />&nbsp;&nbsp;&nbsp;<h4>{this.state.subscribed}</h4>
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
                    <div className="arrow1">
                        <a href={"/docs/" + p.id}><i className="fas fa-arrow-right icon_right"></i></a>
                    </div>
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

export default AllDocs;
