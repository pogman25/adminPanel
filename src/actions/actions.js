import { ADD_PERSON, DEL_PERSON } from '../constants/constants';

export const addPerson = (event) => {

    return (dispatch) => {
        dispatch({
            type: ADD_PERSON,
            payload: event
        })
    }
};

export const delPerson = (event) => {

    return (dispatch) => {
        dispatch({
            type: DEL_PERSON,
            payload: event
        })
    }
};