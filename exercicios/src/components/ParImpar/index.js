import React from "react";
import { View, Text, _Text } from 'react-native'

import Padrao from "../../estilo/Padrao";
import Inverter,  { MegaSena } from "../Multi";

function parOuImpar(num) {
    const resultado = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style = {Padrao.ex}>{resultado}</Text>

}
export default props => (
    <View>
        {/* 1ª estratégia renderizando com JS no próprio comp */}
        {/* <Text>
            {
                //     // props.numero % 2 == 0
                //     // ? <Text style = {Padrao.ex}>Par</Text>
                //     // : <Text style = {Padrao.ex}>Impar</Text>
                // }
            </Text> */}
        {/* 2ª estratégia renderizando com função */}
        {parOuImpar(props.numero)}
        <Inverter texto = 'arievilO egnaL reteP' />

    <MegaSena numeros = {7} /* Total de numeros gerados *//>
    </View>
)