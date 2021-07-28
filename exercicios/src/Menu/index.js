import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Contador from "../components/Contador";

//Componentes da Aplicação
import Simples from "../components/Simples";
import ParImpar from "../components/ParImpar";
import Inverter, { MegaSena } from "../components/Multi";

const Mega = () => <MegaSena numeros={5} />;
const Invert = () => <Inverter texto="arievilO egnaL reteP" />;
const ParOrImpar = () => <ParImpar numero={10} />;
const TextoSimples = () => <Simples texto="Flexiveis" />;
const Contar = () => <Contador iniciarEm = {100}/>

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Contador" component={ Contar } />
      <Drawer.Screen name="Megas Sena" component={ Mega } />
      <Drawer.Screen name="Texto Invertido" component={ Invert } />
      <Drawer.Screen name="Par ou Impar?" component={ ParOrImpar } />
      <Drawer.Screen name="Texto Simples" component={ TextoSimples } />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  f20: {
    fontSize: 50,
    color: "#fff",
  },
});

export default function Menu() {
  return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
  );
}
