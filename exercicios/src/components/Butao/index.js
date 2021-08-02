import React from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'
import Padrao from '../../estilo/Padrao'

export default props => {
    const executar = () => console.warn('Pressionado 01')


    return (
        <View style={Padrao.ex}>
            <Text style={Padrao.fontGrande}>Teste de Botão</Text>
            <Text/>
            <Button
                onPress={executar}
                title={`${props.titulo} 01`}
                color='#f00'
            ></Button>
            <Text/>
            <Button
                onPress={() => console.warn('Pressionado 02')}
                title={`${props.titulo} 02`}
                color='#f0f'
            ></Button>

        </View>
    )
}