import React from 'react'
import { SafeAreaView, SafeAreaViewBase, Text } from 'react-native'
import Padrao from '../../../estilo/Padrao'
import Filho from '../Filho'

export default props => {
    let [x, y] = [100, 200]

    const aleatorio = ()=> parseInt( Math.random() * (100 - 1) + 1 )
    return(
        <SafeAreaView style = {Padrao.ex}>
            <Text style = {Padrao.fontGrande}>Comunicação DIRETA</Text>
            <Filho x = {x} y = {y} />
            <Filho x = {x + 10} y = {y + 20} />
            <Filho x = {aleatorio()} y = {aleatorio()} />
            <Filho />
        </SafeAreaView>
        
    )
}