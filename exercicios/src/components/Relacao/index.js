import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Padrao from '../../estilo/Padrao'
import Familia from './Familia'
import Membros from './Membros'

export default props => {
    return (
        <SafeAreaView style={Padrao.ex}>
            <Familia style={estilo.bloco}>
                <Text style={estilo.titulo}>Membros da Familia Lange</Text>
                <Membros nome='Peter' sobreNome='Lange' />
                <Membros nome='Jutta' sobreNome='Lange' />
            </Familia>
            <Familia style={ estilo.bloco}>
                <Text style={estilo.titulo}>Membros da Familia Lange</Text>
                <Membros nome='Bruno' sobreNome='Lange' />
                <Membros nome='Ray' sobreNome='Delany' />
            </Familia>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    bloco: {
        borderColor: '#000',
        backgroundColor: '#000',
    },
    
    titulo: {
        color: '#f00',
        fontSize: 20,
        fontWeight: 'bold'
    }
})