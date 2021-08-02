import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Componentes da Aplicação
import Contador from "../components/Contador";
import Simples from "../components/Simples";
import ParImpar from "../components/ParImpar";
import Inverter, { MegaSena } from "../components/Multi";
import MinMax from "../components/MinMax";
import Aleatorio from "../components/Aleatorio";
import estiloMenu from "./estiloMenu";
import Titulo from "../components/Titulo";
import Butao from "../components/Butao";

const Mega = () => <MegaSena numeros={5} />;
const Invert = () => <Inverter texto="arievilO egnaL reteP" />;
const ParOrImpar = () => <ParImpar numero={10} />;
const TextoSimples = () => <Simples texto="Flexiveis" />;
const Contar = () => <Contador iniciarEm = {100}/>
const MaiorMenor = () => <MinMax n1 = {20} n2 = {2} />
const Aleatorios = () => <Aleatorio min = {30} max = {100} />
const Titulos = () => 
  <Titulo 
    principal = 'Cadastro de Produtos'
    secundario = "Tela de cadastro do Produto"
  />
const Butaos = () => <Butao titulo = 'Pressione-me' />

const Drawer = createDrawerNavigator();

const  MyDrawer = () => 
    <Drawer.Navigator >
      <Drawer.Screen name="Botões" component={ Butaos } />
      <Drawer.Screen name="Titulos" component={ Titulos } />
      <Drawer.Screen name="Contador" component={ Contar } />
      <Drawer.Screen name="Megas Sena" component={ Mega } />
      <Drawer.Screen name="Texto Invertido" component={ Invert } />
      <Drawer.Screen name="Par ou Impar?" component={ ParOrImpar } />
      <Drawer.Screen name="Texto Simples" component={ TextoSimples } />
      <Drawer.Screen name="Numero Aleatório" component={ Aleatorios } />
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
