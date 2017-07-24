import { FETCHALL, ADD, UNSV, GET_DETAIL } from '../actions/';

export const initialState = {
    results: [],
    saved: [],
    detail: {}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCHALL: 
            return {...state, ...action.payload}
        case ADD:
        case UNSV:
            return { ...state, saved: [...action.payload] };
        case GET_DETAIL: 
            return { ...state, detail: state.results.filter((ppt) => ppt.id === action.id)[0] }
        default:
            return state;
    }
}