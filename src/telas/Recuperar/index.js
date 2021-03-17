import React from 'react';
import { Text } from 'react-native'
import { Container } from './estilo'
import Navbar from '../../components/navbar'
import { 
    RecuperarInput,
    RecuperarBotao,
    RecuperarTexto,
    RecuperarBotaoTexto,
    MensagemText
} from './estilo';
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react/cjs/react.development';

export default () => {

    const navegacao = useNavigation()

    const btnRecuperarAtivo = () => {
        if(emailUser != '' && nomeUser != '' && numeroUser != ''){
            if(nomeUser == 'Joao Paulo' && emailUser == "juomzingameplays@gmail.com" && numeroUser == 10){
                navegacao.navigate('mensagemSucessoRecuperar')
            }else{
                navegacao.navigate('mensagemErroRecuperar')
            }
        }else{
            alert("Preencha os campos")
        }
    }
    const [nomeUser, setNome] = useState('')
    const [emailUser, setEmail] = useState('')
    const [numeroUser, setNumero] = useState('')

    return(
        <Container>
            <Navbar Nome={"Recuperar Senha"} />          

            <RecuperarInput>
                <RecuperarTexto placeholder="Nome" placeholderTextColor="#acacac" value={nomeUser} onChangeText={t=>setNome(t)}/>
            </RecuperarInput>

            <RecuperarInput>
                <RecuperarTexto placeholder="Email" placeholderTextColor="#acacac"  value={emailUser} onChangeText={t=>setEmail(t)} />
            </RecuperarInput>

            <RecuperarInput>
                <RecuperarTexto placeholder="Número de Matrícula" placeholderTextColor="#acacac"  value={numeroUser} onChangeText={t=>setNumero(t)} />
            </RecuperarInput>

            <RecuperarBotao onPress={btnRecuperarAtivo}>
                <RecuperarBotaoTexto>
                    Recuperar
                </RecuperarBotaoTexto>
            </RecuperarBotao>

        </Container>
    )

}