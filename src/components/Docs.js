import React, { Component } from 'react';
import MainNavBar from './MainNavBar';
import MenuBar from './MenuBar';
import Start from './Start';
import Ward from './Ward';
import DocMenuBar from './DocMenuBar';
import Patient from './Patient';
import AllDocs from './AllDocs';
import Pats from './Pats';
import DocChat from './DocChat';
import '../App.css';

class Docs extends Component {
  constructor(props) {
    super(props);
    const { doc_id, pat_id } = this.props.match.params;
    console.log(doc_id, pat_id);
    if(doc_id) {
      this.state = {
        option: "pats",
      }
    }
    else if(pat_id) {
      this.state = {
        option: "chat",
      }
    }
    else {
      this.state = {
        option: "doctor",
      }
    }
  }

  change(val) {
    this.setState({ option: val })
  }

  render() {
    const { doc_id, pat_id } = this.props.match.params;
    const { option } = this.state;
    if(option === "doctor") {
      var display = <AllDocs />;
    }
    else if(option === "pats") {
      var display = <Pats doc_id={doc_id} />;
    }
    else if(option === "chat") {
      var display = <DocChat pat_id={pat_id} func={this.change.bind(this)} />;
    }

    return (
      <div className="container-fluid rooms">
        <MainNavBar />
        <div className="row">
          <div className="col-md-3">
            <DocMenuBar />
          </div>
          <div className="col-md-9">
            {display}
          </div>
        </div>
      </div>
    )
  }
}

export default Docs;
