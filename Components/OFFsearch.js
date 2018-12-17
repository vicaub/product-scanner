// Components/Search.js

import { FlatList } from 'react-native'
import { getProductFromBarcode } from '../API/OFFApi'
import WaterBottleJson from '../Helpers/data'
import React from "react";


class Search extends React.Component {


    constructor(props) {
        super(props);
        this.state = { ProductJson: {} }
    }

    loadProduct(barcode) {
        getProductFromBarcode(barcode).then(data => {
            this.setState({ ProductJson: JSON.parse(data.results).product_name_fr })
        });
    }

}
