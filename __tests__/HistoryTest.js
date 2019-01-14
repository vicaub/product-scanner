import React from 'react';
import History from '../Components/History';

import renderer from 'react-test-renderer';

test('History renders correctly', () => {
    const tree = renderer.create(<History />).toJSON();
    expect(tree).toMatchSnapshot();
});