import React from "react";
import { SafeAreaView,  StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Componentes da Aplicação
import Contador from "../components/Contador";
import Simples from "../components/Simples";
import ParImpar from "../components/ParImpar";
import Inverter, { MegaSena } from "../components/Multi";
import MinMax from "../components/MinMax";
import Aleatorio from "../components/Aleatorio";
import Titulo from "../components/Titulo";
import Butao from "../components/Butao";
import Padrao from "../estilo/Padrao";

// Gera um nr aleatorio entre 0 e 100 para os componentes abaixo
const nrAleatorio = () =>{
  return parseInt(Math.random() * (100 - 0) + 0)
}

const Mega = () => <MegaSena numeros={5} />;
const Invert = () => <Inverter texto="arievilO egnaL reteP" />;
const ParOrImpar = () => <ParImpar numero={nrAleatorio()} />;
const TextoSimples = () => <Simples texto="Flexiveis" />;

// Componente que gera dois botões para incrementar dumeros
const Contar = () => {
  return (
    <SafeAreaView style = {Padrao.ex}>
      <Contador valorInicial = {100} passo = {10}/>
      <Text />
      <Contador/>
    </SafeAreaView>
  )
}

// Componente que gera numeros aleatorios
const Aleatorios = () => <Aleatorio min = {0} max = {100} />

// Componente que verifica qual nr é maior
const MaiorMenor = () => <MinMax n1 = {nrAleatorio()} n2 = {nrAleatorio()} />

const Titulos = () => 
  <Titulo 
    principal = 'Cadastro de Produtos'
    secundario = "Tela de cadastro do Produto"
  />
const Butaos = () => <Butao titulo = 'Pressione-me' />

const Drawer = createDrawerNavigator();

const  MyDrawer = () => 
    <Drawer.Navigator >
      <Drawer.Screen name="Contador" component={ Contar } />
      <Drawer.Screen name="Numero Aleatório" component={ Aleatorios } />
      <Drawer.Screen name="Botões" component={ Butaos } />
      <Drawer.Screen name="Titulos" component={ Titulos } />
      <Drawer.Screen name="Megas Sena" component={ Mega } />
      <Drawer.Screen name="Texto Invertido" component={ Invert } />
      <Drawer.Screen name="Par ou Impar?" component={ ParOrImpar } />
      <Drawer.Screen name="Texto Simples" component={ TextoSimples } />
      <Drawer.Screen name="Qual o MAIOR?" component={ MaiorMenor } />
    </Drawer.Navigator>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default () =>
      <NavigationContainer >
        <MyDrawer />
      </NavigationContainer>
