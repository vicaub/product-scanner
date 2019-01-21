import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import Theme from "../Theme";

const keys = ['google', 'facebook', 'linkedin', 'youtube', 'Twitter'];
const values = [15, 25, 35, 45, 55];

class PieBis extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedSlice: {
                label: '',
                value: 0
            },
            labelWidth: 0
        }
    }

    _onPieItemSelected(key, index) {
        this.setState({ selectedSlice: { label: key, value: values[index] }});
        // this.props.onItemSelected(index);
    }

    render() {
        const { labelWidth, selectedSlice } = this.state;
        const { label, value } = selectedSlice;
        const colors = this.props.colors;
        const data = keys.map((key, index) => {
            return {
                key,
                value: values[index],
                svg: { fill: colors[index] },
                arc: { outerRadius: selectedSlice.label === key ? '100%' : '90%', padAngle: 0.03 },
                onPress: () => this._onPieItemSelected(key, index)
            }
        });
        const deviceWidth = Dimensions.get('window').width;
        const margin = styles.container.margin;

        return (
            <View>
                <PieChart
                    style={{ height: this.props.pieHeight, width: this.props.pieWidth }}
                    outerRadius={'90%'}
                    innerRadius={30}
                    data={data}
                />
                {/*<Text
                    onLayout={({ nativeEvent: { layout: { width } } }) => {
                        this.setState({ labelWidth: width });
                    }}
                    style={{
                        position: 'absolute',
                        left: deviceWidth / 2 - labelWidth / 2,
                        textAlign: 'center'
                    }}>
                    {`${label} \n ${value}`}
                </Text>*/}
                <View style={{position: 'absolute', top:margin, left: this.props.pieWidth}}>
                    {
                        keys.map( (item, index) =>
                        {
                            let fontWeight = label === item ? 'bold' : 'normal';
                            return (
                                <TouchableWithoutFeedback key={index} onPress={() => this._onPieItemSelected(item, index)}>
                                    <View>
                                        <Text
                                            style={[styles.label, {color: Theme.colors[index], fontWeight: fontWeight}]}>
                                            {keys[index]}: {values[index]}%
                                        </Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        })
                    }
                </View>
            </View>
        )
    }
}

export default PieBis;

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    label: {
        fontSize: 15,
        marginTop: 5,
        fontWeight: 'normal',

    }
});