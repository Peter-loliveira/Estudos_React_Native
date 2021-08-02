import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Padrao from '../../estilo/Padrao'

export default ({ min, max }) =>
    <SafeAreaView style={Padrao.ex}>
        <Text style={Padrao.fontGrande}>
            {`Numero aleatório gerado: ${parseInt(Math.random() * (max - min) + min)}`}
        </Text>
    </SafeAreaView>