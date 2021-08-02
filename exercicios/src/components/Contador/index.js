import React, { Component } from "react";
import { Text, TouchableHighlight, SafeAreaView } from "react-native";

import Padrao from "../../estilo/Padrao";

export default class Contador extends Component {

    state = {
        numero: this.props.iniciarEm
    }

    maiUm = () =>{
        this.setState({ numero: this.state.numero + 1 })
    }
    limpar = () =>{
        this.setState({ numero: this.props.iniciarEm })
    }

    render() {
    return (
      <SafeAreaView style={Padrao.ex}>
        <Text style = {Padrao.fontGrande}> {this.state.numero} </Text>
        <TouchableHighlight
            onPress = {this.maiUm}
            onLongPress = { this.limpar }
        >
            <Text style = {Padrao.fontGrande}>Incrementar / Zerar</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}
