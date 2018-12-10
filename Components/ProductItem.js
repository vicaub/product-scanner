// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class ProductItem extends React.Component {
    render() {
        const product = this.props.product
        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: 'https://www.planwallpaper.com/static/images/9-credit-1.jpg'}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{product.title}</Text>
                        <Text style={styles.vote_text}>{product.nutritional_score}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text}>{product.brand}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: 'row'
    },
    image: {
        width: 120,
        height: 180,
        margin: 5
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})
export default ProductItem