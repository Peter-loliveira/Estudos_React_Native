import React, { Component } from "react";
import { View, Text, TouchableHighlight, Button } from "react-native";

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
      <View style={Padrao.ex}>
        <Text style = {{ fontSize: 40, color: 'red' }}> {this.state.numero} </Text>
        <TouchableHighlight
            onPress = {this.maiUm}
            onLongPress = { this.limpar }
        >
            <Text style = {{ fontSize: 20, color: 'red' }}>Incrementar / Zerar</Text>
        </TouchableHighlight>
        {/* <Button 
            color ="#d1a" 
            title ="Somar"
        /> */}
      </View>
    );
  }
}
