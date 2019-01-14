import React from 'react';
import UpdateProfile from '../Components/UpdateProfile';

import renderer from 'react-test-renderer';

test('Profile renders correctly', () => {
    const navigation = { addListener: jest.fn() };

    const tree = renderer.create(<UpdateProfile navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
});