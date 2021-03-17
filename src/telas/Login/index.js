import React, {useState} from 'react';
import { Text, TextInput, View } from 'react-native'
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

export default () => {

    const [recebeUser, setUser] = useState('')
    const [recebeSenha, setSenha] = useState('')


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

                <LoginInput value={recebeSenha} onChangeText={t=>setUser(t)} >
                    <Cadeado height="24" width="24" fill="#acacac" />
                    <LoginText placeholder="Senha" secureTextEntry={true}/>
                    <Olho height="24" width="24" fill="#acacac" />
                </LoginInput>

                <CustomButton>
                    <CustomButtonText>Entrar</CustomButtonText>
                </CustomButton>

                <Cadastro>
                    <CadastroText>Ainda não é cadastrado? </CadastroText>
                    <CadastroButton>Cadastre-se</CadastroButton>
                </Cadastro>

                <Cadastro>
                    <CadastroButton>Recuperar Senha</CadastroButton>
                </Cadastro>

            </InputArea>
        </Container>
    )

}