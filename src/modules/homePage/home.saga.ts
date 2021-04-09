import { put, takeEvery, call } from 'redux-saga/effects';
import * as actions from './home.action';
import * as types from './home.types';
import * as API from './home.api';

export function* fetchPhones() {
  console.log('fetchProjects-saga');
  try {
    let phones = null;
    yield API.fetchPhones().then((res: any) => {
        phones = res
    })
    yield put(actions.fetchPhonesSuccess({ phones }));
  } catch (error) {
    yield put(actions.fetchPhonesFailure(error));
  }
}


export function* homeSaga() {
  yield takeEvery(types.FETCH_PHONE_REQUEST, fetchPhones);
}
