import { initialState } from './stats.state'

import { STATS_REQUESTS } from './stats.actions'

function statsRequested(state, action) {
  const stats = action.stats
  return Object.assign({}, state, {
    users: stats.users,
    cars: stats.cars
  })
}

export function statsReducer(state = initialState, action) {
  switch (action.type){
    case STATS_REQUESTS:
      return statsRequested(state, action)
    default:
      return state
  }
}