import * as types from './home.types';

export const fetchPhonesRequest = () => ({ type: types.FETCH_PHONE_REQUEST });
export const fetchPhonesSuccess = (data: any) => ({ type: types.FETCH_PHONE_SUCCESS, data });
export const fetchPhonesFailure = (error : any) => ({ type: types.FETCH_PHONE_FAILURE, error });

export const fetchProjectsRequest = () => ({ type: types.FETCH_PROJECT_REQUEST });
export const fetchProjectsSuccess = (data: any) => ({ type: types.FETCH_PROJECT_SUCCESS, data });
export const fetchProjectsFailure = (error : any) => ({ type: types.FETCH_PROJECT_FAILURE, error });