import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";



//Componentes da Aplicação
import Simples from "./components/Simples";
import ParImpar from "./components/ParImpar";
import Inverter, { MegaSena } from "./components/Multi";

// Estilos da aplicação
import Padrao from "./estilo/Padrao";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style = {styles.container}>
        <Text style = {Padrao.fontGrande}>Olá App!</Text>
		<Simples style = {Padrao.fontGrande} texto = 'Flexiveis'/>
		<ParImpar numero = {320} />
		<Inverter texto = 'arievilO egnaL reteP' />
        <MegaSena numeros = {7} /* Total de numeros gerados *//>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flexGrow:1,
		justifyContent: "center",
		alignItems: 'center',
	},
})