import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return (
        <>
            <View style = {estilo.display}>
                <Text style = {estilo.textoDisplay}>{props.numero}</Text>
            </View>
        </>
    )
}

const estilo = StyleSheet.create({
    display: {
        width: 300,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    textoDisplay: {
        padding: 30,
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }

})