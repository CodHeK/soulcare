import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import NavBar from './NavBar';
import Data from './Data';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App container-fluid" id="home">
        <NavBar />
        <Data />
      </div>
    );
  }
}

export default Home;
