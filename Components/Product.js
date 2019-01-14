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

    /**
     * Input: string of ingredients with allergens
     * Output: JSX corresponding to the <Text> with allergens in bold
     */
    static _parseIngredientWithAllergens(ingredientsWithAllergens) {
        if (!ingredientsWithAllergens) {
            return (<Text style={styles.defaultText}>Non renseigné</Text>)
        } else {
            const splitedIngredients = ingredientsWithAllergens.split(/<span class=\"allergen\">|<\/span>/);

            const allergens = splitedIngredients.filter((value, index) => index % 2 === 1);

            return (
                <Text style={styles.defaultText}>
                    {splitedIngredients.map((value, index) => {
                        if (index % 2 === 1) {
                            return (
                                <Text style={{fontWeight: 'bold'}} key={index}>{value}</Text>
                            )
                        } else {
                            return (
                                <Text key={index}>{value}</Text>
                            )
                        }
                    })}
                </Text>
            )
        }
    }

    static _parseAllergens(allergens) {
        if (!allergens) {
            return (<View></View>);
        } else {
            return (
                <View>
                    <Text style={styles.titleText}>Allergènes</Text>
                    <Text style={styles.defaultText}>{allergens}</Text>
                </View>
            )
        }

    }

    _displayProductInfo() {
        const {product, isLoading} = this.state;
        const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
        if (!isLoading) {
            if (product !== undefined && !isLoading) {
                return (
                    <ScrollView style={styles.scrollview_container}>
                        <View style={styles.headerContainer}>
                            <Image
                                style={styles.image_product}
                                source={product.image_url ? {uri: product.image_url} : require('../assets/images/No-images-placeholder.png')}
                            />
                            <View style={styles.headerDescription}>
                                <Text
                                    style={styles.productNameText}>{product.product_name ? product.product_name : "Nom inconnu"}</Text>
                                <Text style={styles.defaultText}>Quantité
                                    : {product.quantity ? product.quantity : "Non renseignée"}</Text>
                                <Text style={styles.defaultText}>Marque
                                    : {product.brands ? product.brands : "Non renseignée"}</Text>
                                <Text style={styles.descriptionText}>Code barre : {product._id}</Text>
                            </View>
                        </View>

                        <Text style={styles.titleText}>Catégories</Text>

                        <Text
                            style={styles.defaultText}>{product.categories ? product.categories : "Non renseigné"}
                        </Text>

                        <Text style={styles.titleText}>Ingrédients</Text>

                        {ProductScreen._parseIngredientWithAllergens(product.ingredients)}

                        {ProductScreen._parseAllergens(product.allergens)}

                        <Image
                            style={styles.image_nutri}
                            source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-' + product.nutrition_grades + '.png'}}
                            // source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-e.png'}}
                        />

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
    scrollview_container: {
        flex: 1,
        flexDirection: "column"
    },
    headerContainer: {
        flexDirection: "row",
    },
    image_product: {
        flex: 1,
        margin: 5,
        resizeMode: 'contain',
    },
    image_nutri: {
        height: 80,
        margin: 5,
        resizeMode: "contain",
    },
    headerDescription: {
        flex: 1,
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
    productNameText: {
        fontWeight: 'bold',
        fontSize: 30,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'left'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
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
        marginLeft: 5,
        marginRight: 5,
    },
});

export default ProductScreen;