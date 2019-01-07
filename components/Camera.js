'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { withNavigationFocus } from 'react-navigation';

class BarcodeScanner extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.isFocused ? 
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style = {styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        //barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
                        /*onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            console.log(barcodes);
                            this.props.navigation.navigate("Product", {barcode: barcodes[0].data});
                        }}*/
                        onBarCodeRead={(barcode) => {
                            console.log(barcode);
                            this.props.navigation.navigate("Product", {barcode: barcode.data});
                        }}
                    /> 
                    : <Text>Welcome</Text>}
                <View style={styles.toolbox}>
                    <TouchableOpacity style={styles.searchButton}
                            onPress={()=>this.props.navigation.navigate("Search")}>
                        <Text style={styles.defaultText}>
                            Le scan ne marche pas ? Clique ici pour taper le code barre à la main.
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    defaultText: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        fontSize: 15,
        color:'#00C378',
        textAlign: 'center'
    },
    toolbox: {
        flex: 0, 
        flexDirection: 'row', 
        justifyContent: 'center',
        margin: 5
    }
});

export default withNavigationFocus(BarcodeScanner);

