import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Padrao from '../../estilo/Padrao'
import produtos from './produtos'

export default props => {

    const valorTotal = produtos.reduce((a, b) => a + b.preco, 0)

    const listarProdutos = () => produtos.map(p =>
        <Text style={estiloLista.texto} key={p.id}>
            {p.id}) {p.nome}:   R$ {p.preco}
        </Text>
    )

    return (
        <SafeAreaView style={estiloLista.container}>
            <Text style={[Padrao.fontGrande, { alignItems: 'center' }]}>Lista de Produtos</Text>
            {listarProdutos()}
            <Text />
            <Text style={Padrao.fontMedia}>
                Valor Total do produtos: R$ {valorTotal}
            </Text>
        </SafeAreaView >
    )
}

const estiloLista = StyleSheet.create({
    texto: {
        color: 'red',
        justifyContent: 'flex-start',
        fontSize: 20,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        padding: "50%",
        paddingHorizontal: 15,
        marginVertical: 5,
        fontWeight: "bold",
        marginTop: '50%',
        marginBottom: '50%',

    }
})