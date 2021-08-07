import React from 'react'
import { View, StyleSheet, Button, TouchableOpacity, Text } from 'react-native'

export default props => {
    return (
        <View style={estilo.botoes}>
            {/* <Button
                title='      +      '
                color='green'
                onPress={props.inc}
            /> */}
            {/* <TouchableOpacity
                // title = '      -      ' 
                // color = '#007AFF'
                onPress={props.dec}
            >
                <Text>-</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
                style={estilo.buttonInc}
                onPress={props.inc}
            >
                <Text>  +  </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={estilo.buttonDec}
                onPress={props.dec}
            >
                <Text>  -  </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilo = StyleSheet.create({
    botoes: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-around',
        marginTop: 20,
    },
    buttonInc: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        width: 70,
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 30,
    },
    buttonDec: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        width: 70,
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 30,
    }

})