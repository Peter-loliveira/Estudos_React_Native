import React from 'react'
import { Text } from 'react-native'
import Padrao from '../../estilo/Padrao'

const nrAleatorio = (min, max) => {
    return Math.trunc(Math.random() * (max - min) + min)
}

export default (props) =>
    <Text style={Padrao.ex}>
        {nrAleatorio(props.min, props.max)}
    </Text>