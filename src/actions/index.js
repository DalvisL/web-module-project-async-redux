import axios from 'axios';

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
    dispatch({ type: FETCH_NAME });
    axios.get(`https://api.genderize.io/?name=${name}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
};