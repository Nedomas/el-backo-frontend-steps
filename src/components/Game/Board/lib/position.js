import points from './points'

export default (space, scalingFactor) => ({
  left: points[space.index].x * scalingFactor,
  top: points[space.index].y * scalingFactor,
})
