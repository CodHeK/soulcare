import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses } from '../queries/Queries';
import { Query } from "react-apollo";
import TodoLoader from '../Loaders/TodoLoader';
import Nurses from './Nurses';
import $ from 'jquery';
import '../App.css';

class Ward extends Component {
  render() {
    return (
      <div className="container-fluid patient">
        <h1 className="title">WardRooms</h1>
        <input className="form-control search" placeholder="Search" />
        <br />
        <Query query={FetchAllRoomsQuery}>
        {
          ({ loading, error, data }) => {
            if(loading)
              return <TodoLoader />
            if(error)
              return <p>Error </p>;

            if(data.room.length == 0)
              return <h3>No rooms added yet! :\/ </h3>;

            return data.room.map((r) => (
              <div className="row" key={r.id}>
                <div className="col-md-6 box">
                  <div className="row dat">
                    <div className="col-md-6">
                      <h2 className="header">ROOM NO.</h2>
                      <h5 className="head_val">{r.room_no}</h5>
                    </div>
                    <div className="col-md-6">
                      <h2 className="header">NURSES</h2>
                      <Nurses room_no={r.room_no} />
                    </div>
                  </div>
                  <div className="row dat">
                    <div className="col-md-6">
                      <h2 className="header">CAPACITY</h2>
                      <h5 className="head_val">{r.curr_occupancy} / {r.capacity}</h5>
                    </div>
                    <div className="col-md-6">

                    </div>
                  </div>
                  <div className="arrow">
                    <i className="fas fa-arrow-right icon"></i>
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

export default Ward;
