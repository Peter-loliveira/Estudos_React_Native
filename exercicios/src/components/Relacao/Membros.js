import React from 'react'
import { Text } from 'react-native'
import Padrao from '../../estilo/Padrao'

export default ({nome = 'Jonh', sobreNome = 'Doe' }) => {
    return (
        <Text style = {Padrao.fontGrande}> {nome} {sobreNome} </Text>
    )
}