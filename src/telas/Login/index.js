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

    const ver = useState('')
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
        if(recebeUser === '' && recebeSenha === ''){
            alert('Preencha os campos')
        }else{
            if(recebeUser == 'Juomzin' && recebeSenha == '10'){
                navegacao.reset({
                    routes: [{name: 'Inicio'}]
                })
            }else{
                this.setState = ({
                    ver: 1
                });
            }
        }
    }


    return(
        <Container>

            <View style={{marginBottom: 30}}>
                <Logo height="120" width="120"/>
            </View>

            <InputArea>
                <LoginInput>
                    <User height="24" width="24" fill="#acacac" />
                    <LoginText placeholder="Usuário"  placeholderTextColor="#acacac" value={recebeUser} onChangeText={t=>setUser(t)}/>
                </LoginInput>

                <LoginInput >
                    <Cadeado height="24" width="24" fill="#acacac" />
                    <LoginText  placeholder="Senha" placeholderTextColor="#acacac" secureTextEntry={true} value={recebeSenha} onChangeText={t=>setSenha(t)}/>
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