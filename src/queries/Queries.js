import gql from "graphql-tag";

export const FetchAllRoomsQuery = gql`
  query roomsQuery {
    room {
      id
      room_no
      capacity
      curr_occupancy
    }
  }
`;

export const FetchNurses = gql`
  query nurseQuery($room_no: String!) {
    nurse (
      where: { room_no: {_eq: $room_no }}
    ) {
      id
      name
      room_no
    }
  }
`;

export const FetchAllPatientsQuery = gql`
  query patientQuery($room_no: String!) {
    patient (
      where: { room_no: {_eq: $room_no }},
      order_by: priority_desc
    ) {
      id
      name
      phone
      age
      room_no
      medicine
      priority
      start_date
      discharge_date
      disease
      doctor
    }
  }
`;

export const FetchAllNotesQuery = gql`
  query notesQuery($patient_id: Int!) {
    note (
      where: { patient_id: { _eq: $patient_id }, type: { _eq: "nurse" }}
    ) {
      id
      type
      patient_id
      desp
      time
    }
  }
`;

export const FetchAllNotesDocsQuery = gql`
  query notesDocsQuery($patient_id: Int!) {
    note (
      where: { patient_id: { _eq: $patient_id }, type: { _eq: "doctor" }}
    ) {
      id
      type
      patient_id
      desp
      time
    }
  }
`;

export const InsertNoteQuery = gql`
  mutation addNote($type: String!, $patient_id: Int!, $desp: String!, $time: String!) {
    insert_note (
      objects:[
        {
          type: $type,
          patient_id: $patient_id,
          desp: $desp,
          time: $time
        }
      ]
    ) {
      returning {
        id
        type
        patient_id
        desp
        time
      }
    }
  }
`;
