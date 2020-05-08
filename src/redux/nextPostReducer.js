import { POST_TYPES } from './types'

const INITIAL_STATE = {
  isFetchingNext: false
}

export default function nextPostReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case POST_TYPES.FETCH_NEXT_POST:
      return {
        isFetchingNext: true
      }
    default:
      return {
        ...state
      }
  }
    
}