import React, {useState} from 'react'
import { Text } from 'react-native'
import Padrao from '../../estilo/Padrao'
import IF from './If'

export default (props) => {
    const usuario = props.usuario || {}

    return (
            
            <IF teste = { usuario && usuario.nome && usuario.email }>
                <Text 
                    selectable //Propriedade que permite que o usuario selecione o texto
                    style={Padrao.fontGrande}
                >
                </Text>
                <Text style={Padrao.fontMedia}>{usuario.nome} </Text>
                <Text style={Padrao.fontMedia}>{usuario.email} </Text>
            </IF>
    )
}
