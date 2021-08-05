import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

import Display from './Display'
import Padrao from '../../estilo/Padrao'
import Botoes from './Botoes'
import GeraNrAlearorio from '../GeraNrAlearorio'

export default props => {
    const valorInicial = GeraNrAlearorio(100,0)
    const [valor, setValor] = useState(valorInicial)

    //* Funções de incremento e decremento
    const mais = ()=> setValor(valor + 1)
    const menos = ()=> setValor(valor - 1)
    return(
        <SafeAreaView style = {Padrao.ex}>
            <Display numero = { valor }/>
            <Botoes inc = {mais} dec = {menos} />
        </SafeAreaView>
    )
}