// import jsonData from './data.json';

export function fetchAll () {
    return fetch('./data.json')
    .then(res => res.json());
}