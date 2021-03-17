import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView` 
    justify-content: center
    align-items: center
    flex: 1
    position: relative
    background-color: #211f1c
`;

export const RecuperarInput = styled.View`
    border: 1px solid #dcdcdc
    width: 80%
    margin-bottom: 30px
    padding-left: 15px 
    border-radius: 5px
    height: 50px
`

export const RecuperarTexto = styled.TextInput`
    margin-left: 10px
`

export const RecuperarBotao = styled.TouchableOpacity`
    width: 80%
    justify-content: center
    align-items: center
    height: 50px
    border-radius: 5px
    background-color: #B81F00
    
`

export const RecuperarBotaoTexto = styled.Text`
    color: #dcdcdc
`

export const MensagemText = styled.Text`
    color: #dcdcdc
    width: 80%
    font-size: 16px
    text-align: center
    margin-bottom: 40px
`
export const contatoBotao = styled.TouchableOpacity`
    flex-direction: row
`

export const contatoText = styled.Text``

export const contatoTextBotao = styled.Text``