import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Botao from "./components/Botao";
import Inputs from "./components/Inputs";

//Componentes da Aplicação
import Simples from "./components/Simples";

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.f20}>Olá App!</Text>
		<Simples style = {styles.f20} texto = 'Flexiveis!'/>
		<Botao textoBotao = 'OK' />
		<Inputs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: "center",
		alignItems: 'center',
		backgroundColor: '#000'
	},
	f20: {
		fontSize: 50,
		color: '#fff'
	}
})