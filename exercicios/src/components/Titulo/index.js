import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Padrao from '../../estilo/Padrao'

export default props => {
    return(
        <SafeAreaView style = {Padrao.ex}>
            <Text style = {Padrao.fontGrande}>{ props.principal }</Text>
            <Text style = {Padrao.fontMedia}>{ props.secundario }</Text>
        </SafeAreaView>
    )
}