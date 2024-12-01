import React from 'react';
import PromotionBox from './PromotionBox';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import { mount } from 'enzyme';

describe('Component PromotionBox', () => {
  it('should render without crashing', () => {
    const component = mount(
      <Provider store={store}>
        <PromotionBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
