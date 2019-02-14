import React from 'react';
import ProductItem from '../Components/ProductItem';

import renderer from 'react-test-renderer';
import { testProduct } from '../Helper/testData';

test('ProductItem renders correctly', () => {
    const tree = renderer.create(<ProductItem product={testProduct}/>).toJSON();
    expect(tree).toMatchSnapshot();
});