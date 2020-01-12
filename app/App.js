/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SafeAreaView, ScrollView,} from 'react-native';
import TableRowView from './component/TableRowView';
import AppImages from './assets/images/index'

const table = [
    {
        image: AppImages.iconGoogle,
        title: 'Google',
        url: 'https://google.com',
        imgPosition: 'row',
    },
    {
        image: AppImages.iconApple,
        title: 'Apple',
        url: 'https://www.apple.com',
        imgPosition: 'row-reverse',
    },
    {
        image: AppImages.iconYahoo,
        title: 'Yahoo!',
        url: 'https://www.yahoo.com',
        imgPosition: 'row',
        style:{justifyContent:'center', alignItems:'center'}

    }
];

export default class App extends Component {
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    {table.map((item) => {
                        return (
                            <TableRowView value={item}/>)
                    })}
                </ScrollView>
            </SafeAreaView>
        )
    }
}


