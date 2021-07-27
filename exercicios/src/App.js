import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Inverter, { MegaSena } from "./components/Multi";

import ParImpar from "./components/ParImpar";

//Componentes da Aplicação
import Simples from "./components/Simples";

export default class App extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style = {styles.f20}>Olá App!</Text>
		<Simples style = {styles.f20} texto = 'Flexiveis!'/>
		<ParImpar numero = {320} />
		<Inverter texto = 'arievilO egnaL reteP' />
        <MegaSena numeros = {7} /* Total de numeros gerados *//>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: "center",
		alignItems: 'center',
		// backgroundColor: '#000'
	},
	f20: {
		fontSize: 50,
		color: '#fff'
	}
})