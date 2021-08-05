import React from 'react'
import { SafeAreaView, Button } from 'react-native'
import GeraNrAlearorio from '../../GeraNrAlearorio'

export default props => {
    return(
        <SafeAreaView>
            <Button 
                color = 'red'
                title = 'Executar'
                onPress = {()=>{
                    const nrGerado = GeraNrAlearorio(100,0)
                    props.funcao(nrGerado)
                }}
            />
        </SafeAreaView>
    )
}