// eslint-disable-next-line no-unused-vars
import { all } from 'redux-saga/effects';

import { homeSaga } from '../modules/homePage';


export default function* rootSaga() {
  yield all([
    homeSaga(),
  ]);
}
