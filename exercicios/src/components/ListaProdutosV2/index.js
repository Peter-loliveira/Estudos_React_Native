import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList } from 'react-native'
import Padrao from '../../estilo/Padrao'
import produtos from './produtos'

export default props => {
    const itens = ({item}) => {
        return <Text style = {estiloLista.texto}>
            {item.id < 10 ? 0 : ''}{/* Colocado para que item com valor menor que  10 tenham 2 digitos */}
            {item.id}) {item.nome} - Valor: R$ {item.preco}
        </Text>
    }

    return (
        <SafeAreaView style={estiloLista.container}>
            <Text style={[Padrao.fontGrande, { alignItems: 'center', marginBottom: 10 }]}>Lista de Produtos V2</Text>
            
            <FlatList
                data = {produtos}
                renderItem = { itens }
                keyExtractor = { item => `${item.id}`}
            />
        </SafeAreaView >
    )
}

const estiloLista = StyleSheet.create({
    texto: {
        color: 'red',
        justifyContent: 'flex-start',
        fontSize: 18,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
        padding: "50%",
        paddingHorizontal: 15,
        marginVertical: 5,
        fontWeight: "bold",
        marginTop: '10%',
        marginBottom: '10%',

    }
})