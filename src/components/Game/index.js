import React from 'react'
import { Query } from 'react-apollo'
import PlayersList from './PlayersList'
import query from './lib/query'
import styles from './index.module.css'

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
        <div className={styles.container}>
          Game loaded

          <PlayersList data={data} />
        </div>
      )
    }}
  </Query>
)
