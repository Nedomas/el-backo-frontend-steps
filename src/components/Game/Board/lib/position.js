import points from './points'

export default (space) => ({
  left: points[space.index].x,
  top: points[space.index].y,
})
