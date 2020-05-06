import { takeEvery, takeLatest, put } from 'redux-saga/effects';

import { POST_TYPES } from './../types';
import { 
  fetchLatestPostSuccsss, 
  fetchLatestPostfailure, 
  SetSearchPostSuccsss,
  fetchSearchPostfailure
} from '../../action/latestPostAction';

const NEWS_API = 'https://hn.algolia.com/api/v1';

let page = 0;

export function* fetchLatestPost() {
  try {
    const fetchPost = yield fetch(`${NEWS_API}/search_by_date?tags=story&page=${page}`)
    .then(response => response.json());
    page = page + 1
    yield put(fetchLatestPostSuccsss(fetchPost));
  } catch(error) {
    yield put(fetchLatestPostfailure(error.message));
  }
}

export function* fetchLatestPostStart() {
  yield takeLatest(
    POST_TYPES.FETCH_LATEST_POST_START,
    fetchLatestPost
  )
}


export function* fetchNextPost() {
    yield takeEvery(
      POST_TYPES.FETCH_NEXT_POST,
      fetchLatestPost
    )
}

export function* searchPost() {
  yield takeLatest(
    POST_TYPES.SEARCH_POST_START,
    searchData
  )
}

export function* searchData({ payload }) {
  try {
    const fetchPost = yield fetch(`${NEWS_API}/search_by_date?query=${payload}&tags=story`)
    .then(response => response.json());
    yield put(SetSearchPostSuccsss(fetchPost));
  } catch(error) {
    yield put(fetchSearchPostfailure(error.message));
  }
}