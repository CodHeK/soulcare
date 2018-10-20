import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Query } from "react-apollo";
import { FetchAllRoomsQuery, FetchNurses } from '../queries/Queries';
import NavBar from './NavBar';
import Data from './Data';
import '../App.css';

class Nurses extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { room_no } = this.props;
    return (
      <div>
        <Query query={FetchNurses} variables={{ room_no }}>
        {
           ({ loading, error, data }) => {
              if(loading)
                return <h5 className="head_val">loading...</h5>
              if(error)
                return <h5 className="head_val">Error</h5>

                return data.nurse.map((n) => (
                  <div key={n.id}>
                    <h5 className="head_val">{n.name}</h5>
                  </div>
                ))
           }
         }
        </Query>
      </div>
    );
  }
}

export default Nurses;
