import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #211F1C;
    color: #DCDCDC;
    width: 100%
`

export const InputArea = styled.View`
    width: 100%
    justify-content: center
    align-items: center
`

export const CustomButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50;
    background-color: #B81F00;
    border-radius: 5;
    margin-bottom: 30;
`

export const LoginInput = styled.View`
    border: 1px solid #dcdcdc
    align-items: center
    width: 80%
    border-radius : 5
    margin-bottom: 30
    padding-left: 15px
    flex-direction: row
    height: 50px
`

export const LoginText = styled.TextInput`
    color: #acacac;
    margin-left: 10px
    width: 70%
`

export const CustomButtonText = styled.Text`
    color: #dcdcdc
`
export const Cadastro = styled.TouchableOpacity`
    flex-direction: row
    margin-bottom: 15
`

export const CadastroText = styled.Text`
    color: #dcdcdc
`

export const CadastroButton = styled.Text`
    color: #B81F00
`