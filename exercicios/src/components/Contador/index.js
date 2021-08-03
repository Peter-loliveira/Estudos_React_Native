import React, { useState } from 'react'
import { SafeAreaView, Text, StyleSheet, Button, View } from 'react-native'

import Padrao from '../../estilo/Padrao'
import Estilo from './Estilo'

export default ({valorInicial = 0, passo = 1}) => {

	const [numero, setNumero] = useState(valorInicial)

	const inc = () => setNumero(numero + passo)
	const dec = () => setNumero(numero - passo)
	return (
		<SafeAreaView>
			<View style={Estilo.linha}>
				<Button
					color='green'
					onPress={inc}
					title='+'
				/>
			<Text style={Padrao.fontGrande}>{numero}</Text>
				<Button
					color='#f00'
					onPress={dec}
					title=' - '
				/>
			</View>
		</SafeAreaView>
	)
}