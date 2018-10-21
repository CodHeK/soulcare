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

export const FetchPatientsQuery = gql`
  query patientAllQuery {
    patient (
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

export const FetchAllPatientsQueryById = gql`
  query patientQuery($pat_id: Int!) {
    patient (
      where: { id: {_eq: $pat_id }},
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
      where: { patient_id: { _eq: $patient_id }, type: { _eq: "nurse" }},
      order_by: id_desc
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
      where: { patient_id: { _eq: $patient_id }, type: { _eq: "doctor" }},
      order_by: id_desc
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

export const getPatientNameQuery = gql`
  query nameQuery($pat_id: Int!) {
    patient (
      where: { id: { _eq: $pat_id }}
    ) {
      name
    }
  }
`;

export const getDocsQuery = gql`
  query docsQuery {
    doctors {
      id
      name
      special
      patients
      position
    }
  }
`;

export const subscribeQuery = gql`
  mutation subscribe($id: Int!, $patients: json) {
    update_doctors (
      where: { id: { _eq: $id }},
      _set: { patients: $patients }
    ) {
      affected_rows
    }
  }
`;

export const getsubsQuery = gql`
  query subQuery($doc_id: Int!) {
    doctors (
      where: { id: { _eq: $doc_id }}
    ) {
      patients
    }
  }
`;
