import React from 'react';

import sample from '../Helper/sample'
import {parseProductInfo} from '../API/OFFApi';


describe('Parsing', () => {
    jest.unmock('../API/OFFApi');
    it('should parse things right', () => {
        expect(parseProductInfo(sample)).toMatchSnapshot();
    });
});