import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.View` 
    justify-content: center;
    align-items: center;
    flex:1
    background-color: #211f1c
`;



export const ContentBox = styled.View`
    width: 42.5%
    background-color: #312E2A
    margin: 2.5%
    align-items: center
    height: 180px
`
export const Titulo = styled.Text`
    color: #dcdcdc
    font-weight: bold
`

export const Nome = styled.Text`
    color: white
    font-weight: bold
    font-size: 11px

`

export const  Chave = styled.Text`
    color: #dcdcdc
    font-size: 11px
`

export const Box = styled.View`
    flex-direction: row
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px
    align-items: center
    padding: 2.5px
    margin-bottom: 10px
    width: 100%
`

export const Chaves = styled.View`
    width: 90%
`

export const ChaveInput = styled.TextInput`
`

export const Btn = styled.TouchableOpacity`
    background-color: #B81000
    width: 70%
    height: 40px
    align-items: center
    justify-content: center
    border-radius: 20px
`

export const BtnText = styled.Text`
    color: #dcdcdc
`

export const TituloSaldo = styled.View`
    flex-direction: row
    align-items: center
    margin-bottom: 10px
`

export const SaldoText = styled.Text`
    color: #dcdcdc
    opacity: 2
`

export const Saldo = styled.View`
    background-color: #282621
    width: 90%
    padding: 5px
    border-radius: 10px
    height: 40px
    justify-content: center
`
export const BoxDados = styled.View`
    margin-left: 10px
`

export const UserTitle = styled.Text`
    margin-left: 20px
    color: white
    font-size: 20px
`

export const ContentBoxUser = styled.View`
    height: 80px
    margin-bottom: 14px
    background-color: #282621
    width: 95%
    border-radius: 20px
    flex-direction: row
    align-items: center
    justify-content: flex-start
    padding: 20px
`