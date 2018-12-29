
import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

class EditIcon extends Component {

    toggleEdit = () => {
        this.props.navigation.navigate("Update");
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.toggleEdit.bind(this)} >
                    <Image
                        source={{uri : 'https://images.ecosia.org/f3WnlGwMSPUec0M5Dys_D75maks=/0x390/smart/https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F64%2FEdit_icon_%2528the_Noun_Project_30184%2529.svg%2F768px-Edit_icon_%2528the_Noun_Project_30184%2529.svg.png'}}
                        style={{ width: 25, height: 25, marginRight: 25, tintColor: 'white'}}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

export default EditIcon;