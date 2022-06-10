export const GET_DATA = "GET_DATA";
export const GET_DATA_LOADING = "GET_DATA_LOADING";
export const GET_DATA_ERROR = "GET_DATA_ERROR";

export const getData = (data) => ({ type: GET_DATA, payload: data });
export const getDataLoading = () => ({ type: GET_DATA_LOADING });
export const getDataError = () => ({ type: GET_DATA_ERROR });
