import gql from 'graphql-tag'

export default gql`
  query Game($id: ID!) {
    game(id: $id) {
      id

      players {
        id
        name
        color

        space {
          id
          index
        }
      }

      spaces {
        id
        index
      }
    }
  }
`
