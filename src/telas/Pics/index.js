import React from 'react';
import { Container, ContentBox, Titulo, Nome, Chave,Chaves, ChaveInput, Box, Btn, UserTitle, ContentBoxUser, TituloSaldo, SaldoText, Saldo, BoxDados, BtnText} from './estilo'
import Navbar from '../../components/navbar'
import { useState } from 'react/cjs/react.development';
import CoinIcon from '../../assets/icons/cash'
import UserIcon from '../../assets/icons/user'
import CardIcon from '../../assets/icons/id-card-1.svg'
import SendItem from '../../assets/icons/paper-plane-1.svg'
import HistoricoIcon from '../../assets/icons/notebook-4.svg'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core';

const userDados = {Nick: 'pdrinTryHard', Saldo: 1000, Martricula: 1234567, Nome: 'Joao Pereira Silva'}

export default () => {
    const navegacao = useNavigation()
    const btnEnviarAtivo = () => {
        navegacao.navigate('EnviarPics')
    }
    const btnHistorico = () => {
        navegacao.navigate('NavPics')
    }

    return(
        <View style={{flex:1, backgroundColor: '#211f1c', justifyContent: 'center'}}>
        <Navbar Nome="Pics"/>
        <ScrollView>            
        <Container style={{marginTop: 80}}>

            <ContentBoxUser>
                <UserIcon height="60px" width="60px" fill="#FFFFFF" />
                <UserTitle>{userDados.Nome}</UserTitle>
            </ContentBoxUser>

            <View style={{flexDirection: 'row'}}>

                <ContentBox style={{backgroundColor: 'rgba(0,0,0,0)'}}>
                    <LinearGradient colors={['#5D0274', '#FF003D']} style={styles.Degrade} start={{ x: 0.7, y: 0 }} >
                    <TituloSaldo><Titulo>Minhas Chaves</Titulo></TituloSaldo>
                        <Chaves>
                            <Box>
                                <UserIcon height="25px" width="25px" fill="white"/>
                                <BoxDados>
                                    <Nome>Usuário</Nome> 
                                    <Chave>{userDados.Nick} </Chave>
                                </BoxDados>
                            </Box>
                            <Box>
                                <CardIcon height="25px" width="25px" fill="white"/>
                                <BoxDados>
                                    <Nome>Maricula</Nome> 
                                    <Chave>{userDados.Martricula} </Chave>
                                </BoxDados>
                            </Box>
                        </Chaves>
                        </LinearGradient>
                </ContentBox>

                <ContentBox style={styles.estilo}>
                    <TituloSaldo>
                        <CoinIcon  height="15px"  width="15px" style={{marginRight: 5}}/>
                        <Titulo>Coins</Titulo>
                    </TituloSaldo>
                    <Saldo>
                        <SaldoText>$ {userDados.Saldo} </SaldoText>
                    </Saldo>
                </ContentBox>
            </View>
            <View style={{flexDirection: 'row'}}>

            <ContentBox style={styles.estilo}>
                    <TituloSaldo>
                        <SendItem  fill="#FFFFFF" height="15px"  width="15px" style={{marginRight: 5}}/>
                        <Titulo>Enviar Pics</Titulo>
                    </TituloSaldo>
                    <Btn onPress={btnEnviarAtivo}>
                        <BtnText>Enviar</BtnText>
                    </Btn>
                </ContentBox>

                <ContentBox style={styles.estilo}>
                    <TituloSaldo>
                        <HistoricoIcon fill="#FFFFFF" height="15px"  width="15px" style={{marginRight: 5}}/>
                        <Titulo>Histórico</Titulo>
                    </TituloSaldo>
                    <Btn onPress={btnHistorico}>
                        <BtnText>Ver mais</BtnText>
                    </Btn>
                </ContentBox>
            </View>
        </Container>
        </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    Degrade: {
        borderRadius: 30,
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    estilo: {
        borderRadius: 30,
        flex: 1,
        justifyContent: 'space-evenly',
    } 
    
})