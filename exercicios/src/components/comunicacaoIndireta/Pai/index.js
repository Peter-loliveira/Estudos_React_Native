import React, { useState } from 'react'
import { SafeAreaView, Text } from 'react-native'
import Padrao from '../../../estilo/Padrao'
import Filho from '../Filho'


export default props => {
    
    const [num, setNum] = useState(0)

    function exibirValor(numero){
        setNum(numero);
    }
    return(
        <SafeAreaView style = {Padrao.ex}>
            <Text style = {Padrao.fontGrande}>{ num }</Text>
            <Filho 
                // ! A função "exibirValor" SERÁ "enviada e linkada" com o comp. filhos atravez das props do comp filho
                funcao = {exibirValor}
            />
        </SafeAreaView>
    )
}