import React from 'react'
import { Query } from 'react-apollo'
import query from './lib/query'

export default ({
  match: {
    params: {
      gameId,
    },
  },
}) => (
  <Query query={query} variables={{ id: gameId }}>
    {({ loading, data }) => {
      if (loading) return 'Loading...'

      return (
        <div>
          Game loaded
          {JSON.stringify(data)}
        </div>
      )
    }}
  </Query>
)
