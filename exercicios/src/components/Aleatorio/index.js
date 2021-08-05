import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Padrao from '../../estilo/Padrao'
import GeraNrAlearorio from '../GeraNrAlearorio'

export default ({ min, max }) =>
    <SafeAreaView style={Padrao.ex}>
        <Text style={Padrao.fontGrande}>{`Min: ${min} / Max: ${max}`}</Text>
        <Text />
        <Text style={Padrao.fontGrande}>
            {`Numero aleatório gerado: ${GeraNrAlearorio(min, max)}`}
        </Text>
    </SafeAreaView>