import { LOADING, LOADED } from '../actions/';

export default function (state = [], action) {
    switch(action.type) {
        case LOADING: 
            return 
        case LOADED:
            return
        default:
            return state;
    }
}