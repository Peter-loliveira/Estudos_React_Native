import React, { useState } from 'react'
import { SafeAreaView, Text, Button, View } from 'react-native'

import Padrao from '../../estilo/Padrao'
import Estilo from './Estilo'

export default ({ valorInicial = 0, passo = 1 }) => {

	// Valor inicial do contador
	const inicial = valorInicial

	/* 
	*Forma de usar o UseState: 
	*declarase um array com dois elementos
	*O 1º será o valor que será observado pelo react-native e alterado dinamicamente
	* 2º será a função responsável por alterar o valor
	*/

	const [valor, setValor] = useState(valorInicial)

	const somar = () => setValor(valor + passo)
	const subtrair = () => setValor(valor - passo)


	return (
		<SafeAreaView>
			<View style={Estilo.linha}>
				<Button
					color = 'green'
					title = 'MAIS'
					onPress = {somar}
					/>
				<Text style = {Padrao.fontGrande}>{valor}</Text>
				<Button
					color = 'red'
					title = 'MENOS'
					onPress = {subtrair}
				/>
			</View>
		</SafeAreaView>
	)
}