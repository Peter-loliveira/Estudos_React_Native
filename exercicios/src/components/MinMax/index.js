import React from 'react'
import { Text } from 'react-native'
import Padrao from '../../estilo/Padrao'

const verificado = (n1, n2) => {
    if(n1> n2){
        return 'maior que'
    } else if (n1 < n2) {
        return 'menor que'
    } else {
        return 'igual a'
    }
}

export default (props) => 
    <Text style={Padrao.ex}>
        {`O valor ${props.n1} é ${verificado(props.n1, props.n2)} ${props.n2}`}
    </Text>
