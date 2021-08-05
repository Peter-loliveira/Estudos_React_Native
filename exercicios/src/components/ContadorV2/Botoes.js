import React from 'react'
import { View, StyleSheet, Button } from 'react-native'

export default props => {
    return(
        <View style = {estilo.botoes}>
            <Button 
                title = '      +      ' 
                color = 'green'
                onPress = {props.inc}
                />
            <Button 
                title = '      -      ' 
                color = 'red'
                onPress = {props.dec}
             />
        </View>
    )
}

const estilo = StyleSheet.create({
    botoes:{
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-around',
        marginTop: 20,
    },
    
})