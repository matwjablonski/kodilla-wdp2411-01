import React from 'react';
import { shallow } from 'enzyme';
import HotDealsProductBox from './HotDealsProductBox';

describe('Component HotDealsProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<HotDealsProductBox />);
    expect(component).toBeTruthy();
  });
});
