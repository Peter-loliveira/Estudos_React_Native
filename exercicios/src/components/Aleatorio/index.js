import React from 'react'
import { Text } from 'react-native'
import Padrao from '../../estilo/Padrao'

export default ({min, max}) =>
    <Text style={Padrao.ex}>
        {`Numero aleatório gerado: ${parseInt(Math.random() * (max - min) + min)}`}
    </Text>