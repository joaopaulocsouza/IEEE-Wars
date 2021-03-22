import React from 'react'
import Navbar from '../../../components/navbar'
import { Container, Btn, BtnText } from './estilo'
import Success from '../../../assets/icons/success.svg'
import { useNavigation } from '@react-navigation/core'
import { Titulo } from '../estilo'
import LinearGradient from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native'

export default () => {
    const navegacao = useNavigation()
    const btnRetornarAtivo = () => {
        navegacao.navigate('Pics')
    }

    return(
        <Container style={{marginTop:0}}>
            <Navbar Nome={"Pics Enviado"}/>

            <Success height="50px" width="50px" fill="green" style={{marginBottom: 20}} />
            <Titulo>Seu Pics foi enviado com sucesso!</Titulo>

            <Btn onPress={btnRetornarAtivo} style={{height:40, width: 160, marginTop: 20}}>
            <LinearGradient colors={['#FBBA37', '#F66E4E']} style={styles.Degrade} start={{ x: 0.7, y: 0 }}>
                <BtnText>
                    Voltar ao Inicio
                </BtnText>
                </LinearGradient>
            </Btn>
        
        </Container>
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