import React, { Component } from 'react';
import { FetchAllNotesQuery} from '../queries/Queries';
import TodoLoaderNotes from '../Loaders/TodoLoaderNotes';
import { Query } from "react-apollo";
import $ from 'jquery';
import img from '../assets/img.png';
import '../App.css';

class AllNotes extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { patient_id } = this.props;
    return (
      <div>
        <Query query={FetchAllNotesQuery} variables={{ patient_id }} >
          {
            ({ loading, error, data }) => {
              if(loading)
                return <TodoLoaderNotes />
              if(error)
                return <p>Error</p>

              return data.note.map((nt) => (
                <div className="note_format">
                  {nt.desp}
                  {nt.time}
                </div>
              ))
            }
          }
        </Query>
      </div>
    )
  }
}

export default AllNotes;
