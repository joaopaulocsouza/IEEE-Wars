import React, {useState} from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { 
    Container,
    InputArea,
    LoginInput,
    CustomButton,
    CustomButtonText,
    LoginText,
    Cadastro,
    CadastroText,
    CadastroButton
} from './estilo'
import Logo from '../../assets/Logo.svg'
import User from '../../assets/icons/user.svg'
import Cadeado from '../../assets/icons/locked.svg'
import Olho from '../../assets/icons/view.svg'
import constructor from 'react'
import { useNavigation } from '@react-navigation/core';

export default () => {

    const navegacao = useNavigation();
    const [recebeUser, setUser] = useState('');
    const [recebeSenha, setSenha] = useState('');

    const botaoCadastroAtivo = () => {
        navegacao.navigate("Cadastro")
    }

    const botaoRecuperarAtivo = () => {
        navegacao.navigate("Recuperar")
    }

    const botaoEntrarAtivo = () =>{
        navegacao.navigate("Inicio")
    }

    return(
        <Container>

            <View style={{marginBottom: 30}}>
                <Logo height="120" width="120"/>
            </View>

            <InputArea>
                <LoginInput value={recebeUser} onChangeText={t=>setUser(t)} >
                    <User height="24" width="24" fill="#acacac" />
                    <LoginText placeholder="Usuário" />
                </LoginInput>

                <LoginInput value={recebeSenha} onChangeText={t=>setSenha(t)} >
                    <Cadeado height="24" width="24" fill="#acacac" />
                    <LoginText  placeholder="Senha" secureTextEntry={true}/>
                    {/* <TouchableOpacity>
                        <Olho height="24" width="24" fill="#acacac" />
                    </TouchableOpacity> */}
                </LoginInput>

                <CustomButton onPress={botaoEntrarAtivo}>
                    <CustomButtonText>Entrar</CustomButtonText>
                </CustomButton>

                <Cadastro onPress={botaoCadastroAtivo} >
                    <CadastroText>Ainda não é cadastrado? </CadastroText>
                    <CadastroButton>Cadastre-se</CadastroButton>
                </Cadastro>

                <Cadastro onPress={botaoRecuperarAtivo}>
                    <CadastroButton>Recuperar Senha</CadastroButton>
                </Cadastro>

            </InputArea>
        </Container>
    )

}