import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery, getDocsQuery, subscribeQuery } from '../queries/Queries';
import { Query, Mutation } from "react-apollo";
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
import Nurses from './Nurses';
import PatDisplay from './PatDisplay';
import Progress from 'react-progressbar';
import $ from 'jquery';
import '../App.css';

class Bar extends Component {
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
    // var { meds } = this.props;
    // // console.log(meds["med"]);
    // // console.log(meds["med"].length);
    // var total = 0, completed = 0;
    // for(var i = 0; i < meds["med"].length; i++) {
    //   total += meds["med"][i].doses;
    //   completed += meds["med"][i].completed;
    // }
    // var percy = (completed*100)/total;

    return (
      <div className="container-fluid patient">
        <Progress completed={67} color={'#fb7875'} />
        <h6 style={{ color: 'black', fontSize: '11px' }}>{60} %</h6>
      </div>
    )
  }
}

export default Bar;
