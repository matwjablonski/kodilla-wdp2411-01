import React from 'react';
import HotDealsBox from './HotDealsBox';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { mount } from 'enzyme';

describe('Component HotDealsBox', () => {
  it('should render without crashing', () => {
    const component = mount(
      <Provider store={store}>
        <HotDealsBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
