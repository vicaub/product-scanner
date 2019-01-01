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

    static _parseIngredientWithAllergens(ingredientsWithAllergens) {
        const regex = /<span class="allergen">([^<>]+)<\/span>/gm;
        const textComponent = <Text>ingredientsWithAllergens</Text>
        console.log(textComponent);
        const parsedString = textComponent.props.children.replace(regex, (match, group) => {
            return <Text style={{fontWeight: 'bold'}}>{group}</Text>;
        });

        console.log(textComponent);
        return parsedString;

/*        let parsedText = <Text></Text>

        let allergen = false;
        let i = 0;
        while (i < ingredientsWithAllergens.length) {
            if (allergen && ingredientsWithAllergens.substr(i, 7) === "</span>") {
                allergen = false;
                i = i + 6
            }
            if (!allergen) {
                if (ingredientsWithAllergens.substr(i, 23) === "<span class=\"allergen\">") {
                    allergen = true;
                    parsedText.value += <Text style={{fontWeight: 'bold'}}>{group}</Text>
                }
                else {
                    parsedText.value += ingredientsWithAllergens[i];
                }
            }
            i += 1;
        }*/

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
                                source={{uri: product.image_url}}
                            />
                            <View style={styles.headerDescription}>
                                <Text style={styles.productNameText}>{product.product_name}</Text>
                                <Text style={styles.defaultText}>Quantité : {product.quantity}</Text>
                                <Text style={styles.defaultText}>Marque : {product.brands}</Text>
                                <Text style={styles.descriptionText}>Code barre : {product._id}</Text>
                            </View>
                        </View>

                        {/*<Text style={styles.defaultText}>Conditionnement : {product.packaging}</Text>*/}

                        {/*le label nova ne fonctionne pas car il est en svg*/}
                        {/*<Image*/}
                        {/*style={styles.image}*/}
                        {/*source={{uri: 'https://static.openfoodfacts.org/images/misc/nova-group-4' + product.nova_group}}*/}
                        {/*/>*/}

                        <Image
                            style={styles.image_nutri}
                            // source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-'+ product.nutrition_grades + '.png'}}
                            source={{uri: 'https://static.openfoodfacts.org/images/misc/nutriscore-e.png'}}
                        />

                        <Text style={styles.titleText}>Ingredients</Text>

                        <View style={styles.defaultText}>{ProductScreen._parseIngredientWithAllergens(product.ingredients)}</View>

                        <Text style={styles.titleText}>Allergènes</Text>

                        <Text style={styles.defaultText}>{product.allergens}</Text>

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
    },
    headerContainer: {
        // flex: 1,
        flexDirection: "row",
    },
    image_product: {
        flex: 1,
        margin: 5,
        resizeMode: 'contain',
    },
    image_nutri: {
        height: 100,
        margin: 5,
        resizeMode: 'contain',

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