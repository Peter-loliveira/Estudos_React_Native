import React from "react";
import { SafeAreaView, Text } from "react-native";

import Padrao from "../../estilo/Padrao";

function parOuImpar(num) {
  const resultado = num % 2 == 0 ? "Par" : "Impar";
  return <Text style={Padrao.ex}>{resultado}</Text>;
}
export default (props) => (
  <SafeAreaView style={Padrao.ex}>
    <Text style={Padrao.fontGrande}>
      {props.numero}
    </Text>
    <Text style={Padrao.fontGrande}>
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
    </Text>
  </SafeAreaView>
);
