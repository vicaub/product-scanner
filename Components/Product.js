import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ActivityIndicator} from 'react-native';
import {getProductInfoFromApi} from '../API/OFFApi';
import OupsScreen from './Common/Oups';

class ProductScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product: undefined,
            isLoading: true,
        }
    }

    componentDidMount() {
        getProductInfoFromApi(this.props.navigation.getParam('barcode')).then(data => {
            console.log(data);
            this.setState({
                product: data,
                isLoading: false
            });
        });
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large'/>
                </View>
            )
        }
    }

    _displayProductInfo() {
        const {product, isLoading} = this.state;
        if (!isLoading) {
            if (product !== undefined && !isLoading) {
                return (
                    <ScrollView>
                        <View style={styles.headerContainer}>
                            <Image
                                style={styles.image_product}
                                source={{uri: product.image_url}}
                            />
                            <View style={styles.headerDescription}>
                                <Text style={styles.titleText}>{product.product_name}</Text>
                                <Text style={styles.defaultText}>Quantité : {product.quantity}</Text>
                                <Text style={styles.defaultText}>Marque : {product.brands}</Text>
                                <Text style={styles.descriptionText}>Code barre : {product._id}</Text>
                            </View>
                        </View>

                        <View style={styles.bodyContainer}>
                            {/*<Text style={styles.titleText}>Nutri-Score</Text>*/}

                            {/*<Text style={styles.defaultText}>Conditionnement : {product.packaging}</Text>*/}

                            {/*le label nova ne fonctionne pas car il est en svg*/}
                            {/*<Image*/}
                            {/*style={styles.image}*/}
                            {/*source={{uri: 'https://static.openfoodfacts.org/images/misc/nova-group-4'+ product.nova_group}}*/}
                            {/*/>*/}

                            <Image
                                style={styles.image_nutri}
                                // source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-'+ product.nutrition_grades + '.png'}}
                                source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-e.png'}}
                            />
                        </View>

                        <View style={styles.bodyContainer}>
                            <Text style={styles.titleText}>Ingredients</Text>

                            <Text style={styles.defaultText}>{product.ingredients}</Text>

                        </View>

                        <View style={styles.bodyContainer}>
                            <Text style={styles.titleText}>Ingredients</Text>

                            <Text style={styles.defaultText}>{product.ingredients}</Text>

                        </View>
                    </ScrollView>
                )
            } else {
                return (
                    <OupsScreen message="Nous n'avons pas trouvé les informations de ce produit :/"/>
                );
            }
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                {this._displayLoading()}
                {this._displayProductInfo()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    scrollViewContainer: {
        flex: 1,
        backgroundColor: "blue",
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "red",
    },
    image_product: {
        flex: 1,
        margin: 5,
    },
    image_nutri: {
        // flex: 1,
        margin: 5,
    },
    headerDescription: {
        flex: 1,
    },
    bodyContainer: {
        flex: 1,
        backgroundColor: "yellow",
    },


    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },


    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        // flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'left'
    },
    descriptionText: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    defaultText: {
        // flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    },
});

export default ProductScreen;