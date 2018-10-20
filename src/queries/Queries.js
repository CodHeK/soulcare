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
