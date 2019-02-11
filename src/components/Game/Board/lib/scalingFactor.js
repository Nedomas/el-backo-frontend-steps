import _ from 'lodash'
import points from './points'

const normalize = (value) => _.isFinite(value) ? value : 0
const maxX = _.max(_.map(points, 'x'))
const maxY = _.max(_.map(points, 'y'))

export default ({ width, height }) => (
  normalize(_.min([width, height])) / _.min([maxX, maxY])
)
