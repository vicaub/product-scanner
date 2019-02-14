import React from 'react';
import ProductItem from '../Components/ProductItem';

import renderer from 'react-test-renderer';
import baskets from '../Helper/basketData';

test('ProductItem renders correctly', () => {
    const tree = renderer.create(<ProductItem product={baskets[0]["products"][0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
});