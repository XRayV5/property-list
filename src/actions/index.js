import { apiFetch } from '../api'

export const FETCHALL = "FETCHALL";
export const ADD = "ADD";
export const UNSV = "UNSV";
export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export function fetchProperties() {
    return (dispatch) => apiFetch({
            method: 'GET',
            url: '/all', 
        })
        .then(result => dispatch({
            type: FETCHALL,
            payload: result
        })); 
}

export function addProperty(id) {
    return (dispatch, getState) => {
        let { saved, results } = getState().properties;
        // return dispatch({ type: ADD, payload: checkUniq(id, saved, results)})
        let pptToAdd = checkUniq(id, saved, results);
        if(pptToAdd) {
            dispatch(startLoading.call(this, id));
            return apiFetch({ method: 'POST', url: '/saved', data: pptToAdd })
            .then((newSavedList) => {
                dispatch(ceaseLoading.call(this, id));
                dispatch({
                    type: ADD,
                    payload: newSavedList
                });
            }, console.error );
        }
        return Promise.resolve()
    }
}

export function unsaveProperty(id) {
    return (dispatch, getState) => {
        let { saved } = getState().properties;
        let idx = saved.findIndex((ppt) => ppt.id === id);
        dispatch(startLoading.call(this, id));
        return apiFetch({ method: 'DELETE', url: '/saved', data: {idx} })
                                        .then((newSavedList) => {
                                            dispatch(ceaseLoading.call(this, id));
                                            dispatch({
                                                type: UNSV,
                                                payload: newSavedList
                                            })
                                        }, console.error);
    }
        
}

export const startLoading = (id) => ({ type: LOADING, id });
export const ceaseLoading = (id) => ({ type: LOADED, id });

const checkUniq = (id, saved, result) => saved.every((ppt) => ppt.id !== id) ? result.filter((ppt) => id === ppt.id) : false;