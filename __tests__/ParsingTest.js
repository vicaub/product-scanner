import React from 'react';
import ProductItem from '../Components/ProductItem';

import renderer from 'react-test-renderer';
import sample from '../Helpers/productData'
import products from "../Helper/productData";


test('Parsing is correct', () => {
    const tree = renderer.create(<ProductItem product={products[0]}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

