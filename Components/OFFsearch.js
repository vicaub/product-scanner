// Components/Search.js

import { FlatList } from 'react-native'
import { getProductFromBarcode } from '../API/OFFApi'

class Search extends React.Component {

    _loadProduct(barcode) {
        getProductFromBarcode(barcode).then(data => console.log(data));
    }

}
