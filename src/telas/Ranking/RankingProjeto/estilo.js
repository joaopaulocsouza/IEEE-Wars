import React from 'react'
import styled from 'styled-components'

export const Container = styled.SafeAreaView`
    flex: 1
    background-color: #211f1c
    padding-top: 70px
    align-items: center
`

export const ContentBox = styled.View`
    width: 90%
    border-radius: 20px
    background-color: #2B2824
    align-items: center
    margin-bottom: 14px
    margin-left: 2.5%
    shadow-color: #000
    shadow-opacity: 0.39
    shadow-radius: 5.30px
    elevation: 13
`

export const ContentText = styled.View`
    flex-direction: row
    padding-top: 20px
    width: 100%
    justify-content: space-around
    height: 64px
`

export const Pontos = styled.Text`
    color: #dcdcdc
`

export const Nome = styled.Text`
    color: #dcdcdc
`

export const Posicao = styled.Text`
    color: #dcdcdc
`

export const BarraBottom = styled.View`
    width: 90%
    height: 20px
    border-top-left-radius: 10px
    border-top-right-radius: 10px
    justify-content: flex-end
`
export const Titulos = styled.View`
    width: 100%
    align-items: center
`
export const MembrosText = styled.Text`
    color: #dcdcdc
    padding-left: 10px
    padding-right: 10px
    margin-bottom: 20px
`