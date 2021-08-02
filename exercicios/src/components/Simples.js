import React from "react";
import { SafeAreaView, Text } from "react-native";

import Padrao from '../estilo/Padrao'

export default (props) =>
    <SafeAreaView style = {Padrao.ex}>
        <Text style={Padrao.fontGrande}>
            {`Textos ${props.texto}`}
        </Text>
    </SafeAreaView>


