import * as actions from '../../src/actions';
import { mockStore, expect } from '../test_helper';
import { fakeDB, undoAll } from '../../src/api/';

describe('CRUD Actions', () => {
    let store;
    
    beforeEach(() => {
        store = mockStore({ properties: {...fakeDB} });
    });

    afterEach(() => { undoAll() });

    it('fetches all properties', () => {
        const expectActions = [{
            type: actions.FETCHALL,
            payload: fakeDB
        }];

        return store.dispatch(actions.fetchProperties()).then(() => {
            expect(store.getActions()).to.deep.equal(expectActions);
        });
    });

    it('saves the selected property', () => {
        const mockRecord = fakeDB.results[0];
        const { id } = mockRecord; 
        const expectedActions = [
            {
                type: actions.LOADING,
                id: fakeDB.results[0].id
            },
            {
                type: actions.LOADED,
                id: fakeDB.results[0].id
            },
            {
                type: actions.ADD,
                payload: [...fakeDB.saved, mockRecord]
            },
        ]

        return store.dispatch(actions.addProperty(id)).then(() => {
            expect(store.getActions()).to.deep.equal(expectedActions);
        });
    });

    it('unsaves the seleceted property', () => {
        const mockRecord = fakeDB.saved[0];
        const { id } = mockRecord;
        const expectActions = [
            {
                type: actions.LOADING,
                id: fakeDB.saved[0].id
            },
            {
                type: actions.LOADED,
                id: fakeDB.saved[0].id
            },
            {
                type: actions.UNSV,
                payload: []
            },
        ]

        return store.dispatch(actions.unsaveProperty(id)).then((data) => {
            expect(store.getActions()).to.deep.equal(expectActions);
        });
    });

    it('will not save an already saved property', () => {
        const mockRecord = fakeDB.saved[0];
        const { id } = mockRecord;
        const expectedActions = [];
        return store.dispatch(actions.addProperty(id)).then(() => {
            expect(store.getActions()).to.eql(expectedActions);
        });
    });
});

describe('Animation Actions', () => {
    // let store;
    let mockRecord = fakeDB.saved[0];
    let { id } = mockRecord;

    it('will create the action to start loading animation for a property', () => {
        const expectedAction = {
            type: actions.LOADING,
            id
        }
        expect(actions.startLoading(id)).to.eql(expectedAction);
    });

    it('will create the action to stop loading animation for a property', () => {
        const expectedAction = {
            type: actions.LOADED,
            id
        }
        expect(actions.ceaseLoading(id)).to.eql(expectedAction);
    });

});