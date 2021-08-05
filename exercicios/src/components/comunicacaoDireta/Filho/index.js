import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Padrao from '../../../estilo/Padrao'

export default ({x = 7000, y = 8000}) => {
    return(
        <SafeAreaView>
            {/* <Text style = {Padrao.fontGrande}> Comunicação DIRETA </Text> */}
            <Text style = {Padrao.fontGrande}>
                {x} | {y}
            </Text>
        </SafeAreaView>
    )
}