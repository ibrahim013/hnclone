import { POST_TYPES } from '../redux/types'

export const fetchLatestPostStart = () => ({
  type: POST_TYPES.FETCH_LATEST_POST_START
})

export const fetchLatestPostSuccsss = (data) => ({
  type: POST_TYPES.FETCH_LATEST_POST_SUCESS,
  payload: data
})

export const fetchLatestPostfailure = (error) => ({
  type: POST_TYPES.FETCH_LATEST_POST_FAILURE,
  payload: error
})

export const fetchNextPost = () => ({
  type: POST_TYPES.FETCH_NEXT_POST
})


export const searchPost = (data) => ({
  type: POST_TYPES.SEARCH_POST_START,
  payload: data
})

export const fetchSearchPostfailure = () => ({
  type: POST_TYPES.SEARCH_POST_FAILURE
})

export const SetSearchPostSuccsss = (data) => ({
  type: POST_TYPES.SEARCH_POST_SUCESS,
  payload: data
})