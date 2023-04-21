import { ADD_NAME, FETCH_NAME, FETCH_NAME_SUCCESS, FETCH_NAME_FAILURE } from "../actions";

const initialState = {
    name: '',
    fetchingName: false,
    error: '',
    nameProbabilities: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NAME:
            return {
                ...state,
                name: action.payload
            };
        case FETCH_NAME:
            return {
                ...state,
                fetchingName: true
            };
        case FETCH_NAME_SUCCESS:
            return {
                ...state,
                fetchingName: false,
                nameProbabilities: action.payload
            };
        case FETCH_NAME_FAILURE:
            return {
                ...state,
                fetchingName: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;