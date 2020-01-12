import React, {Component} from 'react';
import {Image, Linking, Text, TouchableOpacity, View,} from 'react-native';

export default class TableRowView extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                    overflow: 'visible',
                    borderBottomWidth: 1,
                    borderColor:'#C0C0C0',
                    padding:5
                }}
                onPress={() => Linking.openURL(this.props.value.link)}>
                <View style={[{alignItems: "center"}, {...this.props.value.style}, {flexDirection: this.props.value.imgPosition}]}>
                    <Image
                        resizeMode={'contain'}
                        style={{height: 50, width: "30%"}}
                        source={this.props.value.image}/>
                    <Text style={[{textAlign:'center'}]}>{this.props.value.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

