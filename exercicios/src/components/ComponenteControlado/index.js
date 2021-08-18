import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput, Text } from 'react-native'
import Padrao from '../../estilo/Padrao'

export default props => {
    const [nomeDigitado, emailDigitado, telefoneDigitado] = ['', '', '']
    const [nome, setNome] = useState(nomeDigitado)
    const [email, setEmail] = useState(emailDigitado)
    const [telefone, setTel] = useState(telefoneDigitado)
    const preencher = ()=> {

    }

    return (
        <SafeAreaView style={Padrao.ex}>
            <Text>Nome Digitado:</Text>
            <Text>{nome}</Text>
            <Text>Email Digitado:</Text>
            <Text>{email}</Text>
            <Text>Telefone Digitado:</Text>
            <Text>{telefone}</Text>
            
            <Text numberOfLines={1}>               
    ______________________________________________________________
            </Text>
            <Text style={Padrao.fontMedia}>Digite os dados Abaixo</Text>
            <Text>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
            <Text>Email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <Text>Telefone:</Text>
            <TextInput
                style={styles.input}
                value={telefone}
                onChangeText={telefone => setTel(telefone)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});