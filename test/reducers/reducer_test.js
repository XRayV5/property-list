import propertyReducer, { initialState } from '../../src/reducers/property.js';
import loadingReducer from '../../src/reducers/loading.js'; 
import * as actions from '../../src/actions';
import { fakeDB } from '../../src/api';
import { expect } from '../test_helper';

describe('Property reducer', () => {
    it('handles action with unknown type', () => {
        expect(propertyReducer(undefined, {})).to.eql(initialState)
    });

    it('handles action of type FETCHALL', () => {
        expect(propertyReducer(initialState, { type: actions.FETCHALL, payload: fakeDB })).to.eql(fakeDB);
    });

    it('handles action of type ADD', () => {
        expect(propertyReducer(initialState, { type: actions.ADD, payload: [fakeDB.results[0]] }))
            .to.eql({ ...initialState, saved: [fakeDB.results[0]]});
    });

    it('handles action of type UNSV', () => {
        expect(propertyReducer(fakeDB, { type: actions.UNSV, payload: [] }))
            .to.eql({ ...fakeDB, saved: []});
    });
})

describe('Loading reducer', () => {
    it('handles action with unknown type', () => {
        expect(loadingReducer(undefined, {})).to.eql([]);
    });
    it('handles action of type LOADING', () => {
        expect(loadingReducer([], { type: actions.LOADING, id: 1 })).to.eql([1]);
    });
    it('handles action of type LOADED', () => {
        expect(loadingReducer([1,2,3], { type: actions.LOADED, id: 2 })).to.eql([1,3]);
    })
});