import React from 'react';
import { shallow } from 'enzyme';
import CountdownTimer from './CountdownTimer';

describe('Component CountdownTimer', () => {
  it('should render without crashing', () => {
    const component = shallow(<CountdownTimer />);
    expect(component).toBeTruthy();
  });
});
