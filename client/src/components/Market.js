import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Chart from 'react-native-chart';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 75,
        paddingTop: 25
    },
    chart: {
        width: 200,
        height: 200,
    },
});

const data = [[
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
]];

export default class Market extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Chart
                    style={styles.chart}
                    data={data}
                    verticalGridStep={5}
                    type="line"
                    showDataPoint={true}
                    color={['#e1cd00']}
                    fillColor={['#a1cd00']}
                 />
            </View>
        );
    }
}
