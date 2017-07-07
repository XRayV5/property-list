import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach( function() {
      component = renderComponent(App);
  });

  it('renders container', () => {
    expect(component).to.have.class('main');
  });

});