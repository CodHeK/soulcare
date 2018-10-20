import React, { Component } from 'react';
import { FetchAllNotesQuery, FetchAllNotesDocsQuery } from '../queries/Queries';
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
import { Query } from "react-apollo";
import $ from 'jquery';
import img from '../assets/img.png';
import '../App.css';

class AllNotesDocs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { patient_id } = this.props;
    return (
      <div>
        <Query query={FetchAllNotesDocsQuery} variables={{ patient_id }} >
          {
            ({ loading, error, data }) => {
              if(loading)
                return <TodoLoaderNotes />
              if(error)
                return <p>Error</p>

              return data.note.map((nt) => (
                <div className="note_format_d">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="date">DOCTOR</h5>
                    </div>
                    <div className="col-md-6">
                      <h5 className="date">{nt.time.slice(0, 10)}</h5>
                    </div>
                  </div>
                  <br />
                  <div className="block">
                    <div className="row">
                      <div className="col-md-6">
                        <h1 className="note_tit">DOSAGE:</h1>
                        <p className="note_dat">{nt.desp.split(",")[0]}</p>
                      </div>
                      <div className="col-md-6">
                        <h1 className="note_tit">MEDICINE:</h1>
                        <p className="note_dat">{nt.desp.split(",")[1]}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h1 className="note_tit">NOTE:</h1>
                        <p className="note_dat">{nt.desp.split(",")[2]}</p>
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

export default AllNotesDocs;
