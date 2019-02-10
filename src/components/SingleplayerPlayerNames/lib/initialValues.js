import _ from 'lodash'

export default (playersCount) => ({
  // create an array of players with initial names
  players: _.map(_.times(playersCount), (n) => ({
    name: `Player ${n + 1}`,
  })),
})
