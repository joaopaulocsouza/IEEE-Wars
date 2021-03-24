import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView` 
    flex:1
    background-color: #211f1c
    width: 100%
`

export const Box = styled.View`
    width: 100%
    padding: 2%
    justify-content: center
    margin-top: 80px
    align-items: center
`


export const Titulo = styled.Text`
    color: #dcdcdc
    font-weight: 700
    font-size: 20px
`

export const CaixaMembros = styled.View`
    width: 100%
    margin-top: 20px
    flex-direction: row
    justify-content: space-around
`

export const CardMembro = styled.View`
    width: 47%
    padding-top: 20px
    padding-bottom: 20px
    background-color: #292723
    border-radius: 10px
    align-items: center

`

export const Nome = styled.Text`
    margin-top: 20px
    color: #dcdcdc
    font-weight: bold
`
export const Funcao = styled.Text`
    color: rgba(255,255,255,0.5)
`

export const Links = styled.View`
    flex-direction: row
`

export const Link = styled.TouchableOpacity`
    margin: 10px
`