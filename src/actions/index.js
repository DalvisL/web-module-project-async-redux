import axios from 'axios';


// Action Types for name form
export const ADD_NAME = 'ADD_NAME';
export const FETCH_NAME = 'FETCH_NAME';
export const FETCH_NAME_SUCCESS = 'FETCH_NAME_SUCCESS';
export const FETCH_NAME_FAILURE = 'FETCH_NAME_FAILURE';

export const addName = name => {
    return {
        type: ADD_NAME,
        payload: name
    };
};

export const fetchName = (name) => dispatch => {
    const url = `https://api.nationalize.io/?name=${name}`;
    dispatch({ type: FETCH_NAME });
    axios.get(url)
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_NAME_SUCCESS, payload: res.data.country });
        })
        .catch(err => {
            dispatch({ type: FETCH_NAME_FAILURE, payload: err.response });
        });
};