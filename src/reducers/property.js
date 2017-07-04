import { FETCHALL, ADD, UNSV } from '../actions/';

const initialState = {
    results: [],
    saved: []
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCHALL: 
            return {...state, ...action.payload}
        case ADD:
            return action.payload ? { ...state, saved: [...state.saved, ...action.payload] } : state;
        case UNSV: 
            return {...state, saved: [...action.payload]}
        default:
            return state;
    }
}