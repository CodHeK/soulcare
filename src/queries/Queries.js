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
