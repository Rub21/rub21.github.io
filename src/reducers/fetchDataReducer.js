import {
  FETCH_DATA_BEGIN,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from "../actions/fetchDataActions";

const initialState = {
  data: [],
  loading: true,
  error: null,
  workSheetId: "livestock_d1"
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.fData,
        workSheetId: action.payload.workSheetId
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
        workSheetId: action.payload.workSheetId
      };
    default:
      return state;
  }
}
