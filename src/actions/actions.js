import { ADD_PERSON, DEL_PERSON, UPD_PERSON } from '../constants/constants';

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

export const updPerson = (event) => {

    return (dispatch) => {
        dispatch({
            type: UPD_PERSON,
            payload: event
        })
    }
};