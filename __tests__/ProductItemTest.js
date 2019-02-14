import React from 'react';
import ProductItem from '../Components/ProductItem';

import renderer from 'react-test-renderer';
import product from '../Helper/testData';

test('ProductItem renders correctly', () => {
    const tree = renderer.create(<ProductItem product={product}/>).toJSON();
    expect(tree).toMatchSnapshot();
});