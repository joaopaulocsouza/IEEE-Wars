import React from 'react';
import { Text, TextInput, View } from 'react-native'
import { Container } from './estilo'

export default () => {
    return(
        <Container>
            <View>
                <Text>Usuário</Text>
                <TextInput name="user"></TextInput>
            </View>
        </Container>
    )

}