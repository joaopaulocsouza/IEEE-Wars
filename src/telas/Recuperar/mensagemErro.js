import React from 'react'
import Navbar from '../../components/navbar'
import { Container, RecuperarBotao, RecuperarBotaoTexto, contatoTextBotao, MensagemText } from './estilo'
import Erro from '../../assets/icons/error.svg'
import { useNavigation } from '@react-navigation/core'

export default () => {

    const navegacao = useNavigation()
    const btnTenteNovamenteAtivo = () => {
        navegacao.navigate('Recuperar')
    }

    return(
        <Container>
            <Navbar Nome={"Recuperar Senha"}/>

            <Erro height="50px" width="50px" fill="red" style={{marginBottom: 20}} />
            <MensagemText>Sua solicitação não pode ser atendida! verifique os dados informados e tente novamente.</MensagemText>
            <RecuperarBotao onPress={btnTenteNovamenteAtivo}>
                <RecuperarBotaoTexto>
                    Tente Novamente
                </RecuperarBotaoTexto>
            </RecuperarBotao>            
        </Container>
    )
}