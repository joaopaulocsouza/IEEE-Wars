import React from 'react';
import { Text } from 'react-native'
import { Container } from './estilo'
import Navbar from '../../components/navbar'


export default () => {
    return(
        <Container>
            <Text style={{color: '#dcdcdc'}}>Tarefas</Text>
        </Container>
    )

}