import React from 'react'
import { Button } from 'react-native'

import Padrao from '../estilo/Padrao'

export default (props) => 
        <Button style = {Padrao.botao}
            title="Right button"
            onPress={() => Alert.alert('Pressione aqui')}
        />