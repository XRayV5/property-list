import { renderComponent , expect } from '../test_helper';
import List from '../../src/components/List';
import {fakeDB} from '../../src/api/';

describe('List' , () => {
    let resultList, savedList, resultProps, savedProps;

    beforeEach(function() {
        resultProps= {
            className: 'result',
            properties: fakeDB.results,
            saved: false,
        }
        savedProps= {
            className: 'saved',
            properties: fakeDB.saved,
            saved: true,
        }
        resultList = renderComponent(List, {...resultProps});
        savedList = renderComponent(List, {...savedProps});
    });

    it('renders the result list', () => {
        expect(resultList).to.have.class('result');
    });

    it('renders the saved list', () => {
        expect(savedList).to.have.class('saved');
    })

    it('shows all properties in result list', () =>{
        expect(resultList.find('.demo-card-square').length).to.equal(resultProps.properties.length);
    });

    it('shows all properties in saved list', () =>{
        expect(savedList.find('.demo-card-square').length).to.equal(savedProps.properties.length);
    });

    describe('Listed property in result', () => {
        it('should show the price', () => {
            resultProps.properties.forEach(function(ppt, i) { 
                expect(resultList.find('.mdl-card__title-text')[i].textContent).to.equal(resultProps.properties[i].price);
            });
        });
        it('should has a button with add icon', () => {
            resultProps.properties.forEach(function(ppt, i) { 
                expect(resultList.find('.mdl-button')[i].textContent).to.equal('add');
            });
        })
    });

    describe('Listed property in saved list', () => {
        it('should show the price', () => {
            savedProps.properties.forEach(function(ppt, i) { 
                expect(savedList.find('.mdl-card__title-text')[i].textContent).to.equal(savedProps.properties[i].price);
            });
        });
        it('should has a button with remove(minus) icon', () => {
            savedProps.properties.forEach(function(ppt, i) { 
                expect(savedList.find('.mdl-button')[i].textContent).to.equal('remove');
            });
        });
    });

});