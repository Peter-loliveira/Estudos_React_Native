import React from 'react'
import { SafeAreaView, Text, Platform } from 'react-native'
import Padrao from '../../estilo/Padrao'

export default props => {
    if (Platform.OS === 'android') {
        return (
            <SafeAreaView style={Padrao.ex}>
                <Text style={Padrao.fontGrande}>Android</Text>
            </SafeAreaView>
        )
    } else if (Platform.OS === 'ios') {
        return (
            <SafeAreaView style={Padrao.ex}>
                <Text style={Padrao.fontGrande}>IOS</Text>
            </SafeAreaView>
        )
    } else {
        return (
            <SafeAreaView style={Padrao.ex}>
                <Text style={Padrao.fontGrande}>OPS!!!!</Text>
            </SafeAreaView>
        )
    }
}