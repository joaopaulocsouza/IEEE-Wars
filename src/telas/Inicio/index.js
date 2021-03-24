import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native'
import { Container, ContentBox } from './estilo'
import Navbar from '../../components/navbar'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';


export default () => {
    const navegacao = useNavigation()
    return(
        <Container>
            <Text style={{color: '#dcdcdc'}}>Olá seja Bem-vindo!</Text>
            <TouchableNativeFeedback  onPress={() => {navegacao.reset({routes: [{name: 'Login'}]})}}>
                <Text style={{color: '#dcdcdc'}}>Sair</Text>
            </TouchableNativeFeedback>
            <View style={{justifyContent: 'center', height: "65%"}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <ContentBox>

                    </ContentBox>
                    <ContentBox>

                    </ContentBox>
                </ScrollView>
            </View>

        </Container>
    )

}