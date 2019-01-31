import React from 'react';
import Profile from '../Components/Profile';

import renderer from 'react-test-renderer';

test('Profile renders correctly', () => {
    const navigation = { addListener: jest.fn() };

    const tree = renderer.create(<Profile navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
});