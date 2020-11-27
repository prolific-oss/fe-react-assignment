import React from 'react';
import { shallow } from 'enzyme';

import PricingCalculator from './index';

describe('PricingCalculator', () => {
  it('renders correctly', () => {
    const props = {
      totalCost: 1,
      rewardPerHour: 1,
      setPlaces: () => {},
      setReward: () => {},
      setTime: () => {},
    };

    const component = shallow(<PricingCalculator { ...props } />);

    expect(component).toMatchSnapshot();
  });
});