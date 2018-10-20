import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery, getDocsQuery, subscribeQuery, getsubsQuery } from '../queries/Queries';
import { Query, Mutation } from "react-apollo";
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
import Nurses from './Nurses';
import PatientDisplay from './PatientDisplay';
import $ from 'jquery';
import '../App.css';

class Pats extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    const { doc_id } = this.props;
    console.log("In Pats");
    return (
      <div className="container-fluid patient">
        <h1 className="title">Subscribed Patients</h1>
        <br />
        <Query query={getsubsQuery} variables={{ doc_id }}>
        {
          ({ loading, error, data }) => {
            if(loading)
              return <TodoLoaderNotes />
            if(error)
              return <p>Check your internet connection</p>;

            console.log(data.doctors[0].patients);

            return <PatientDisplay patients={data.doctors[0].patients} />;
          }
        }
        </Query>
      </div>
    )
  }
}

export default Pats;
