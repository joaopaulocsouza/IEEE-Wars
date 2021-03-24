import React from 'react';
import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'

export const Container = styled.SafeAreaView` 
    justify-content: center;
    align-items: center;
    flex: 1
    background-color: #211f1c
`;

export const RankingContainer = styled.View`
    background-color: #2B2824
    height: 200px
    width: 90%
    border-radius: 40px
    margin: 10px
    shadow-color: #000
    shadow-opacity: 0.39
    shadow-radius: 2.30px
    elevation: 10
    flex-direction: row
`

export const Direita = styled.View`
    width: 55%
    height: 100%
    align-items: center
`

export const Esquerda = styled.View`
    width: 45%
    height: 100%
    padding: 15px
    align-items: center
`

export const RankingTitulo = styled.Text`
    color: #959595
    font-weight: 700
    font-size: 25px
`

export const BtnVerCompleto = styled.TouchableOpacity`
    background-color: #B81F00
    height: 40px
    width: 100px
    border-radius: 20px
    align-items: center
    justify-content: center
    margin-top: 55px
`

export const BtnText = styled.Text`
    color: #dcdcdc
`

export const TabelaBox = styled.View`
    height: 50px
    width: 90%
    background-color: rgba(30,30,30,0.9)
    border-radius: 10px
    justify-content: center
    margin-bottom: 10px
`

export const TabelaItem = styled.Text`
    color: #dcdcdc
    margin-top: 10px
    margin-bottom: 5px
    padding-left: 20px
`

export const Traco = styled.View`
    width: 100%
    height: 1px
    border-radius: 2px
`
