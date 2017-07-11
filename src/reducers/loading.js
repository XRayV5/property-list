import { LOADING, LOADED } from '../actions/';

export default function (state = [], action) {
    switch(action.type) {
        case LOADING: 
            return [ ...state, action.id];
        case LOADED:
            return state.filter((id) => id !== action.id);
        default:
            return state;
    }
}