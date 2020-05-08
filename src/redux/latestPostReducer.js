import { POST_TYPES } from './types';

const INITIAL_STATE = {
  data: [],
  isFetching: true,
}

export default function latestPostReducer(state = INITIAL_STATE, action) {
  switch(action.type) {
    case POST_TYPES.FETCH_LATEST_POST_START:
      return {
        isFetching: true
      }
    case POST_TYPES.FETCH_LATEST_POST_SUCESS:
      return {
        ...state,
        data: state.data ? state.data.concat(action.payload.hits) : [...action.payload.hits],
        isFetching: false,
        isFetchingNext: true
      }
    case POST_TYPES.SEARCH_POST_SUCESS:
      return {
        ...state,
        data: [...action.payload.hits]
      }
    default:
      return {
        ...state
      }
  }
}

