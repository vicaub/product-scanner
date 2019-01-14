// Components/FilmItem.js

// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class ProductItem extends React.Component {
    render() {
        const product = this.props.product
        return (
            <View style={styles.mainContainer}>
                <Image
                    style={styles.image}
                    source={{uri: product.image_url}}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.titleText}>{product.name}</Text>

                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{product.barCode}</Text>
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
    image: {
        width: 120,
        height: 180,
        margin: 5
    },
    contentContainer: {
        flex: 1,
        margin: 5
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
    dateContainer: {
        flex: 1
    },
    dateText: {
        textAlign: 'right',
        fontSize: 14
    }
})
export default ProductItem