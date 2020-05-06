import { all, call } from 'redux-saga/effects';
import { fetchLatestPostStart, fetchNextPost, searchPost } from './latestPostSaga';

export default function* rootSaga() {
  yield all([
    call(fetchLatestPostStart),
    call(fetchNextPost),
    call(searchPost)
  ])
}