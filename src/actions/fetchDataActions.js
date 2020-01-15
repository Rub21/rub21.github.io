export const FETCH_DATA_BEGIN = "FETCH_DATA_BEGIN";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = (fData, workSheetId) => ({
  type: FETCH_DATA_SUCCESS,
  payload: { fData, workSheetId }
});

export const fetchDataFailure = (error, workSheetId) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error, workSheetId }
});

export function fetchData(workSheetId) {
  const urlApi = `https://devseed.com/cbit-platform/data/${workSheetId}.json`;
  return dispatch => {
    dispatch(fetchDataBegin());
    return fetch(urlApi)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchDataSuccess(json, workSheetId));
        return json;
      })
      .catch(error => dispatch(fetchDataFailure(error, workSheetId)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
