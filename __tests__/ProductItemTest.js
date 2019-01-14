import React from 'react';
import ProductItem from '../Components/ProductItem';

import renderer from 'react-test-renderer';
import products from '../Helper/productData'

test('ProductItem renders correctly', () => {
    const tree = renderer.create(<ProductItem product={products[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
});