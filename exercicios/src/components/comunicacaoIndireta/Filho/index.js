import React from 'react'
import { SafeAreaView, Button } from 'react-native'

export default props => {

const gerarNrAleatorio = ()=> parseInt( Math.random() * (100 - 1 + 1 )) + 1

    return(
        <SafeAreaView>
            <Button 
                color = 'red'
                title = 'Executar'
                onPress = {()=>{
                    const nrGerado = gerarNrAleatorio()
                    props.funcao(nrGerado)
                }}
            />
        </SafeAreaView>
    )
}