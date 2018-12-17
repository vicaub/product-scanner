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

            var json_parsed = JSON.parse(data.results);
            this.setState({ ProductJson: {"product_name":json_parsed.product_name_fr,
                                                "image_url":json_parsed.selected_images.front.small.fr,
                                                "quantity":json_parsed.serving_quantity,
                                                "packaging":json_parsed.packaging,
                                                "brands":json_parsed.brands}})
        });
    }

}
