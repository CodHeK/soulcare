import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery, getDocsQuery, subscribeQuery } from '../queries/Queries';
import { Query, Mutation } from "react-apollo";
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
import Nurses from './Nurses';
import PatDisplay from './PatDisplay';
import $ from 'jquery';
import '../App.css';

class PatientDisplay extends Component {
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
    const { patients } = this.props;
    var pats = patients["id"];
    console.log("In PatientDisplay");
    console.log(pats);
    const displayPats = pats.map((p) => <PatDisplay pat_id={p} key={p} />);
    return (
      <div className="container-fluid patient">
        {displayPats}
      </div>
    )
  }
}

export default PatientDisplay;
