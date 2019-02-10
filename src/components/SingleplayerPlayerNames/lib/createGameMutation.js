import gql from 'graphql-tag'

export default gql`
  mutation CreateGame($players: [PlayerInput!]!) {
    createGame(players: $players) {
      id

      players {
        name
      }
    }
  }
`
