import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importação dos estilos
import Padrao from "../estilo/Padrao";

//Componentes da Aplicação
import Contador from "../components/Contador";
import Simples from "../components/Simples";
import ParImpar from "../components/ParImpar";
import Inverter, { MegaSena } from "../components/Multi";
import MinMax from "../components/MinMax";
import Aleatorio from "../components/Aleatorio";
import Titulo from "../components/Titulo";
import Butao from "../components/Butao";
import PaiDireto from "../components/comunicacaoDireta/Pai";
import PaiIndireto from "../components/comunicacaoIndireta/Pai";
import GeraNrAlearorio from "../components/GeraNrAlearorio";
import ContadorV2 from "../components/ContadorV2"
import Plataformas from "../components/Plataformas";
import Relacao from "../components/Relacao";
import UsuarioLogado from '../components/UsuarioLogado'
import ListaProdutos from "../components/ListaProdutos";
import ListaProdutosV2 from "../components/ListaProdutosV2";




const NovoContador = () => <ContadorV2 />
const Mega = () => <MegaSena numeros={5} />;
const Invert = () => <Inverter texto="arievilO egnaL reteP" />;
const ParOrImpar = () => <ParImpar numero={GeraNrAlearorio(12, 235)} />;
const TextoSimples = () => <Simples texto="Flexiveis" />;
const Contar = () => { // Componente que gera dois botões para incrementar dumeros
  return (
    <SafeAreaView style={Padrao.ex}>
      <Contador valorInicial={100} passo={10} />
      <Text />
      <Contador />
    </SafeAreaView>
  )
}
const Aleatorios = () => <Aleatorio min={0} max={100} />// Componente que gera numeros aleatorios
const MaiorMenor = () => <MinMax n1={GeraNrAlearorio(0, 100)} n2={GeraNrAlearorio(100, 0)} />// Componente que verifica qual nr é maior
const Titulos = () =>
  <Titulo
    principal='Cadastro de Produtos'
    secundario="Tela de cadastro do Produto"
  />
const Butaos = () => <Butao titulo='Pressione-me' />
const PaisFilhosDiretos = () => <PaiDireto />
const PaisFilhosIndiretos = () => <PaiIndireto />
const Plataforma = () => <Plataformas />
const Relacoes = () => <Relacao />
const UsuarioLog = () =>
  <SafeAreaView style={Padrao.ex}>
    <Text style = {Padrao.fontGrande}>Usuario Logados</Text>
    <UsuarioLogado 
      usuario={ { nome: 'peter Lange', email: 'peter.loliveira@gmail.com' } } 
    />
    
    {/* Os componentes abaixo, antes do ultimop não serão exibidos. Carater de teste */}
    <UsuarioLogado />
    <UsuarioLogado 
      usuario={ { nome: 'peter Lange'} } 
    />
    <UsuarioLogado 
      usuario={ { email: 'peter.loliveira@gmail.com' } } 
    />

    <UsuarioLogado 
      usuario={ { nome: 'Jutta Lange', email: 'jlange.oliveira@gmail.com' } } 
    />
  </SafeAreaView>
  const ListaDeProdutos = ()=> <ListaProdutos />
  const ListaDeProdutosV2 = ()=> <ListaProdutosV2 />



const Drawer = createDrawerNavigator();
const MyDrawer = () =>
  <Drawer.Navigator >
    <Drawer.Screen name="Lista de Produtos 2.0" component={ListaDeProdutosV2} />
    <Drawer.Screen name="Lista de Produtos" component={ListaDeProdutos} />
    <Drawer.Screen name="Usuario Logado" component={UsuarioLog} />
    <Drawer.Screen name="Relações de Familia" component={Relacoes} />
    <Drawer.Screen name="OS Plataforma" component={Plataforma} />
    <Drawer.Screen name="Contador 2.0" component={NovoContador} />
    <Drawer.Screen name="Comunicação INDIRETA" component={PaisFilhosIndiretos} />
    <Drawer.Screen name="Comunicação DIRETA" component={PaisFilhosDiretos} />
    <Drawer.Screen name="Contador" component={Contar} />
    <Drawer.Screen name="Numero Aleatório" component={Aleatorios} />
    <Drawer.Screen name="Botões" component={Butaos} />
    <Drawer.Screen name="Titulos" component={Titulos} />
    <Drawer.Screen name="Par ou Impar?" component={ParOrImpar} />
    <Drawer.Screen name="Megas Sena" component={Mega} />
    <Drawer.Screen name="Texto Invertido" component={Invert} />
    <Drawer.Screen name="Texto Simples" component={TextoSimples} />
    <Drawer.Screen name="Qual o MAIOR?" component={MaiorMenor} />
  </Drawer.Navigator>

export default () =>
  <NavigationContainer >
    <MyDrawer />
  </NavigationContainer>
