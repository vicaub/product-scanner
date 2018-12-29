'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
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
                    <Text style={styles.defaultText}>
                        Scanne un code barre pour voir ce qui se cache derrière ce produit !
                    </Text>
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
        marginTop: 5
    },
    toolbox: {
        flex: 0, 
        flexDirection: 'row', 
        justifyContent: 'center',
    }
});

export default withNavigationFocus(BarcodeScanner);

