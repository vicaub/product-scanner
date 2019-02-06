// Components/FilmItem.js

import React from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import moment from 'moment';
import PropTypes from "prop-types";

moment.locale("fr");

class BasketItem extends React.Component {

    _getTotalQuantity() {
        let totalQuantity = 0;
        this.props.basket.content.forEach((product) => {
            totalQuantity += product.quantity;
        });
        return totalQuantity
    }

    render() {
        const basket = this.props.basket;
        // const dateString = moment(basket.date).format("dddd Do MMMM YYYY")
        const dateString = moment(basket.date).format("DD/MM/YYYY");
        return (
            <View style={styles.mainContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/img_208967.png')}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.titleText}>
                            Panier du {dateString}
                        </Text>
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

BasketItem.propTypes = {
    basket: PropTypes.shape({
        date: PropTypes.object.isRequired,
        content: PropTypes.objectOf(PropTypes.shape({
            quantity: PropTypes.number.isRequired,
        })),
    }).isRequired,
};

const styles = StyleSheet.create({
    mainContainer: {
        height: 120,
        flexDirection: 'row'
    },
    contentContainer: {
        flex: 1,
        margin: 5
    },
    image: {
        width: 90,
        height: 90,
        margin: 5,
        resizeMode: "contain",
    },
    headerContainer: {
        flex: 3,
        flexDirection: 'row'
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 18,
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
        flex: 3
    },
    descriptionText: {
        fontStyle: 'italic',
        color: '#666666'
    },
});
export default BasketItem