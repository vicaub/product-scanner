import React from 'react';

import { jsonResult } from '../Helper/testData';
import { parseProductInfo } from '../API/OFFApi';


describe('Parsing', () => {
    jest.unmock('../API/OFFApi');
    it('should parse things right', () => {
        expect(parseProductInfo(jsonResult)).toMatchSnapshot();
    });
});