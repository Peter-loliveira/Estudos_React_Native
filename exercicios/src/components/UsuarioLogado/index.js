import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Padrao from '../../estilo/Padrao'
import IF from './If'

export default (props) => {
    const usuario = props.usuario || {}
    return (
            <IF teste = { usuario && usuario.nome && usuario.email }>
                <Text style={Padrao.fontGrande}>Usuario Logado: </Text>
                <Text style={Padrao.fontMedia}>{usuario.nome} </Text>
                <Text style={Padrao.fontMedia}>{usuario.email} </Text>
            </IF>
    )
}
