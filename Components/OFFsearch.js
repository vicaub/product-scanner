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

    _loadProduct(barcode) {
        getProductFromBarcode(barcode).then(data => {
            this.setState({ ProductJson: data.results })
        });
    }

    render(){
        return(<FlatList
            data={this.state.ProductJson}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />)
    }
}
