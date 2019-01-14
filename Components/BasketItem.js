// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class BasketItem extends React.Component {

    _getTotalQuantity () {
        let totalQuantity = 0;
        this.props.basket.products.forEach((product) => {
            totalQuantity += product.quantity;
        });
        return totalQuantity
    }

    render() {
        const basket = this.props.basket;
        return (
            <View style={styles.mainContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/img_208967.png')}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.titleText}>Panier du {basket.date}</Text>
                        {/*<Text style={styles.voteText}>{basket.nutritional_score}</Text>*/}
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{this._getTotalQuantity()} produits</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 190,
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 1,
        margin: 5
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        resizeMode: "contain",
    },
    headerContainer: {
        flex: 3,
        flexDirection: 'row'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    voteText: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    descriptionContainer: {
        flex: 7
    },
    descriptionText: {
        fontStyle: 'italic',
        color: '#666666'
    },
});
export default BasketItem