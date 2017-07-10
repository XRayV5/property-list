import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach( function() {
      component = renderComponent(App);
  });

  it('renders the main component', () => {
    expect(component).to.have.class('main');
  });

  

});