import React, { Component } from 'react';
import { FetchAllRoomsQuery, FetchNurses, FetchAllPatientsQuery, InsertNoteQuery, FetchAllNotesQuery , FetchAllNotesDocsQuery, getPatientNameQuery } from '../queries/Queries';
import { Query, Mutation } from "react-apollo";
import TodoLoader from '../Loaders/TodoLoader';
import TodoLoaderPatient from '../Loaders/TodoLoaderPatient';
import Nurses from './Nurses';
import AllNotesPatients from './AllNotesPatients';
import AllNotesDocs from './AllNotesDocs';
import $ from 'jquery';
import '../App.css';

class DocChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dosage: "",
      medicine: "",
      note: "",
    }
  }

  dosage(e) {
    this.setState({ dosage: e.target.value });
  }

  medicine(e) {
    this.setState({ medicine: e.target.value });
  }

  note(e) {
    this.setState({ note: e.target.value });
  }

  select(val, e) {
    this.props.func(val);
  }

  createNote(addNote, e) {
    const { dosage, medicine, note } = this.state;
    const desp = dosage+","+medicine+","+note;
    var today = new Date();
    var time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(this.props.pat_id, desp, time);
    addNote({
      variables: { type: "doctor", patient_id: this.props.pat_id, desp: desp, time: time },
      refetchQueries: [{ query: FetchAllNotesQuery, variables: { patient_id: this.props.pat_id } }, { query: FetchAllNotesDocsQuery, variables: { patient_id: this.props.pat_id } }],
    });
  }

  render() {
    const { pat_id } = this.props;
    console.log("DocCHat");
    return (
        <Mutation mutation={InsertNoteQuery} >
        {
           (addNote, { data }) => (
           <div className="container-fluid patient">
             <h1 className="title">Patient Logs</h1>
             <h4 className="title1">PATIENT ID. {this.props.pat_id}</h4>
             <br />
              <div className="chat_room">
                  <div className="top_nav">
                    <div className="row">
                      <div className="col-md-1">
                        <a href={"/rooms"} className="arr"><i className="fas fa-arrow-left icons"></i></a>
                      </div>
                      <div className="col-md-1">
                        <i className="far fa-user icon_left2"></i>
                      </div>
                      <div className="col-md-5">
                        <Query query={getPatientNameQuery} variables={{ pat_id }}>
                          {
                            ({ loading, error, data}) => {
                              if(loading)
                                return <h1 className="pat_name">Loading...</h1>;

                              if(error)
                                return <h1 className="pat_name">Error loading patient name</h1>;

                              return <h1 className="pat_name">{data.patient[0].name}</h1>;
                            }
                          }
                        </Query>
                      </div>
                      <div className="col-md-5">

                      </div>
                    </div>
                  </div>

                  <div className="chat_area">
                     <div className="row">
                      <div className="col-md-6">
                        <AllNotesPatients patient_id={this.props.pat_id} />
                      </div>
                      <div className="col-md-6">
                        <AllNotesDocs patient_id={this.props.pat_id} />
                      </div>
                    </div>
                  </div>

                   <div className="inp_form">
                     <div className="row">
                       <div className="col-md-6">
                         <input className="add_note1" placeholder="dosage(morning, afternoon, night)" onChange={this.dosage.bind(this)}/>
                       </div>
                       <div className="col-md-6">
                         <input className="add_note1" placeholder="medicine given" onChange={this.medicine.bind(this)}/>
                       </div>
                     </div>
                   </div>
                   <div className="inp_area">
                     <div className="row">
                       <div className="col-md-10">
                         <input className="add_note" placeholder="add your note" onChange={this.note.bind(this)}/>
                       </div>
                       <div className="col-md-2">
                          <button className="btn btn-default note_add" onClick={this.createNote.bind(this, addNote)}>ADD NOTE</button>
                       </div>
                     </div>
                   </div>
               </div>
            </div>
         )
       }
       </Mutation>
    )
  }
}

export default DocChat;
