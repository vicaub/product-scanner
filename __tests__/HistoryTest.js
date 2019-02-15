import React from 'react';
import History from '../Components/History';

import renderer from 'react-test-renderer';

test('History renders correctly', () => {
    const navigation = { addListener: jest.fn() };

    const tree = renderer.create(<History navigation={navigation}  />).toJSON();
    expect(tree).toMatchSnapshot();
});