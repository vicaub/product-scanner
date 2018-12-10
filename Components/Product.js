
import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ActivityIndicator } from 'react-native';

class ProductScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: undefined,
            isLoading: true,
        }
    }

    componentDidMount() {
        //fetch API
        let data = {
            "_id": "3103220032008",
            "product_name": "Tagada Pink qui P!K",
            "image_url": "https://static.openfoodfacts.org/images/products/310/322/003/2008/front_fr.16.400.jpg",
            "quantity": "250 g (62 unités)",
            "packaging": "Sachet plastique",
            "brands": "Haribo",
        };
        this.setState({
            product: data,
            isLoading: false,
        })
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
    }

    _displayProductInfo() {
        const { product } = this.state;
        if (product !== undefined) {
            return (
                <ScrollView style={styles.scrollview_container}>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://static.openfoodfacts.org/images/products/310/322/003/2008/front_fr.16.400.jpg'}}
                    />
                    <Text style={styles.title_text}>{product.product_name}</Text>
                    {/*<Text>{this.props.navigation.getParam('productId')}</Text>*/}
                    <Text style={styles.description_text}>Code barre : {product._id}</Text>
                    <Text style={styles.default_text}>Quantité : {product.quantity}</Text>
                    <Text style={styles.default_text}>Conditionnement : {product.packaging}</Text>
                    <Text style={styles.default_text}>Marques : {product.brands}</Text>
                    <Image
                        style={styles.image}
                        source={{uri: 'https://static.openfoodfacts.org/images/misc/nova-group-4.svg'}}
                    />
                    <Image
                        style={styles.image}
                        source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-a.svg'}}
                    />
                </ScrollView>
            )
        }
    }

    render() {
        return (
            <View style={styles.main_container}>
                {this._displayLoading()}
                {this._displayProductInfo()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
})

export default ProductScreen;