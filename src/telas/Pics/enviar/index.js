import React from 'react';
import { Container, ContentBox, Titulo, ChaveInput, Box, Btn, UserTitle, ContentBoxUser, TituloSaldo, SaldoText, Saldo, BoxDados, BtnText} from './estilo'
import Navbar from '../../../components/navbar'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, View, ScrollView, Text } from 'react-native'
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import { Modal } from '../../../components/modal';


const userDados = {Nick: 'pdrinTryHard', Saldo: 1000, Martricula: 1234567, Nome: 'Joao Pereira Silva'}

export default () => {
    const userDados = {Chave1: 'Juomzin', Chave2: 1234567, Saldo: 100}

    const navegacao = useNavigation()
    const [recebeChave, setChave] = useState('')
    const [recebeValor, setValor] = useState('')
    const [recebeDescricao, setDescricao] = useState('')

    const btnAtivo = () => {
        if (recebeChave == '' || recebeValor == '' || recebeDescricao == '' ) {
            alert('preencha todos os campos')
        }else{
            if (recebeChave == userDados.Chave1 || recebeChave == userDados.Chave2) {
                if(Number.isInteger(Number(recebeValor)) == true){
                    if (recebeValor > userDados.Saldo) {
                        alert('Saldo Insuficiente')
                    }else{
                        navegacao.navigate('mensagemSucessoPics')
                    }
                }else{
                    alert("tipo de valor não permitido! tente novamente "+recebeValor)
                }
            }else{
                alert("Chave não localizada! ")
            }
        }
    }

    return(
        <View style={{flex:1, backgroundColor: '#211f1c'}}>
            <Navbar Nome="Enviar Pics"/>
            <ScrollView>
                <Container>
                    <ContentBox>
                        <Titulo>Destino</Titulo>
                        <ChaveInput placeholderTextColor="rgba(220,220,220,0.5)" placeholder="insira a chave" value={recebeChave} onChangeText={t=>setChave(t)}/>
                    </ContentBox>
                    <ContentBox>
                        <Titulo>Valor</Titulo>
                        <ChaveInput placeholderTextColor="rgba(220,220,220,0.5)" keyboardType="number-pad" placeholder="insira o valor" value={recebeValor} onChangeText={t=>setValor(t)}/>
                    </ContentBox>
                    <ContentBox>
                        <Titulo>Descrição</Titulo>
                        <ChaveInput placeholderTextColor="rgba(220,220,220,0.5)" placeholder="insira a descrição" maxLength={40} value={recebeDescricao} onChangeText={t=>setDescricao(t)}/>
                    </ContentBox>
                    <Btn onPress={btnAtivo}>
                        <LinearGradient colors={['#FBBA37', '#F66E4E']} style={styles.Degrade} start={{ x: 0.7, y: 0 }}>
                            <BtnText>Enviar</BtnText>
                        </LinearGradient>
                    </Btn>
                </Container>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    Degrade: {
        borderRadius: 20,
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})