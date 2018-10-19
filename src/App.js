import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import './App.css';

const client = new ApolloClient({
  uri: "https://hasuratodo.herokuapp.com/v1alpha1/graphql",
})

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
