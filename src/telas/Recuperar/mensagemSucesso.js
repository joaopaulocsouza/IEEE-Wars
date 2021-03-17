import React from 'react'
import Navbar from '../../components/navbar'
import { MensagemText } from './estilo'
import { Container, RecuperarBotao, RecuperarBotaoTexto } from './estilo'
import Success from '../../assets/icons/success.svg'
import { useNavigation } from '@react-navigation/core'

export default () => {
    const navegacao = useNavigation()
    const btnRetornarAtivo = () => {
        navegacao.navigate('Login')
    }

    return(
        <Container>
            <Navbar Nome={"Recuperar Senha"}/>

            <Success height="50" width="50" fill="green" style={{marginBottom: 20}} />
            <MensagemText>Sua solicitação foi recebida com sucesso, acesse seu email para concluir a recuperação da senha!</MensagemText>
            <RecuperarBotao onPress={btnRetornarAtivo}>
                <RecuperarBotaoTexto>
                    Voltar ao Inicio
                </RecuperarBotaoTexto>
            </RecuperarBotao>
        
        </Container>
    )
}