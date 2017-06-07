import { ADD_PERSON, DEL_PERSON, UPD_PERSON } from '../constants/constants';

const init = [
    {
        id: 0,
        name:"Steve Ray Vaughn",
        age: 37,
        phone:"(629) 653-9041",
    },
    {
        id: 1,
        name:"Robert Plant",
        age: 60,
        phone:"(629) 753-9451",
    },
    {
        id: 2,
        name:"Jimmy Page",
        age: 65,
        phone:"(629) 653-8141",
    },
    {
        id: 3,
        name: "Joe Satriani",
        age: 56,
        phone:"(629) 693-7042",
    },
    {
        id: 4,
        name: "Robert Fripp",
        age: 66,
        phone:"(629) 693-7042",
    },

];

export const users = (state=init, action) => {
    switch (action.type) {
        case ADD_PERSON:
            return [...state, action.payload];
        case DEL_PERSON:
            const index = state.findIndex( i => i.id === action.payload);
            return [
                ...state.slice(0, index),
                ...state.slice(index+1)
            ];
        case UPD_PERSON:
            const id = state.findIndex( i => i.id === action.payload.id);
            return [
                ...state.slice(0, id),
                action.payload,
                ...state.slice(id+1)
            ];
        default:
            return state;
    }
};