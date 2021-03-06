import React from 'react'
import { SafeAreaView, Text } from 'react-native'

import Padrao from '../estilo/Padrao'

const Inverter = props => {
    const inv = props.texto.split('').reverse().join('')
    return (
        <SafeAreaView style = {Padrao.ex}>
            <Text style={Padrao.fontGrande}>{inv}</Text>
        </SafeAreaView>
    )
}

const MegaSena = props => {
    const [min, max] = [0, 60]
    const numeros = Array(props.numeros || 6).fill(0)

    for (let i = 0; i < numeros.length; i++) {
        let novo = 0
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min - 1)) + min
        }
        numeros[i] = novo
    }
    numeros.sort((a, b) => a - b)
    return (
        <SafeAreaView style = {Padrao.ex}>
            <Text style={Padrao.fontGrande}> {numeros.join(', ')} </Text>
        </SafeAreaView>
    )
}


/* determina o que vai ser exportado, retirando assim a necessidade de exportar em cada uma das funções*/

export { Inverter, MegaSena } //Não é necessário exportar Inverter, já que ele é exportado por default

/* Exporta Inverter por padrão */
export default Inverter
