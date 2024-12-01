import React from 'react';
import { shallow } from 'enzyme';
import PromotedProducts from './PromotedProducts';

describe('Component PromotedProducts', () => {
  it('should render without crashing', () => {
    const component = shallow(<PromotedProducts />);
    expect(component).toBeTruthy();
  });
});
