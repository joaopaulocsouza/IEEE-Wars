import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.View` 
    justify-content: center;
    align-items: center;
    flex:1
    background-color: #211f1c
    margin-top: 80px
`;



export const ContentBox = styled.View`
    width: 90%
    background-color: #312E2A
    justify-content: center
    padding-left: 5%
    height: 140px
    border-radius: 10px
    margin-bottom: 14px
`
export const Titulo = styled.Text`
    color: #dcdcdc
    font-weight: bold
    margin-bottom: 20px
    font-size: 20px
`

export const ChaveInput = styled.TextInput`
    width: 90%
    background: #211f1c
    border-radius: 10px
    color: #dcdcdc
    padding-left: 10px
`

export const Btn = styled.TouchableOpacity`
    width: 90%
    height: 70px
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
    height: 120px
    margin-bottom: 14px
    background-color: #282621
    width: 95%
    border-radius: 20px
    flex-direction: row
    align-items: center
    justify-content: flex-start
    padding: 20px
`