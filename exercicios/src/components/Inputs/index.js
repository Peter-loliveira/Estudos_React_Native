import React from "react";
import { TextInput } from "react-native";
import Padrao from "../../estilo/Padrao";

export default () => (
    <TextInput 
        style={Padrao.inp} 
        placeholder="Seu texto aqui"
        />
);
