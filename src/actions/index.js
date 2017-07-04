import { fetchAll } from '../api'

export const FETCHALL = "FETCHALL";
export const ADD = "ADD";
export const UNSV = "UNSV";

export function fetchProperties() {
    return (dispatch) => fetchAll()
        .then(result => dispatch({
            type: FETCHALL,
            payload: result
        })); 
}

export function addProperty(id) {
    return (dispatch, getState) => {
        let { saved, results } = getState().properties;
        return dispatch({ type: ADD, payload: checkUniq(id, saved, results)})
    }
}

export function unsaveProperty(id) {
    return (dispatch, getState) => {
        let { saved } = getState().properties;
        let idx = saved.findIndex((ppt) => ppt.id === id);
        return dispatch({
            type: UNSV,
            payload: [ ...saved.slice(0, idx), ...saved.slice(idx + 1)]
        });
    }
        
}

const checkUniq = (id, saved, result) => saved.every((ppt) => ppt.id !== id) ? result.filter((ppt) => id === ppt.id) : false;