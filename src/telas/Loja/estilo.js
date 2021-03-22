import React from 'react';
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView` 
    padding: 20px
    flex:1
    background-color: #211f1c
`

export const Saldo = styled.TouchableOpacity`
    height: 30px
    width: 90px
    border: solid 1px #dcdcdc
    padding: 3px
    border-radius:  20px
    justify-content: space-around
    flex-direction: row
`

export const SaldoText = styled.Text`
    color: #dcdcdc
`

export const Esquerda = styled.View`
    width: 40%
    align-items: center
`
export const Direita = styled.View`
    width: 60%
    align-items: center
`

export const Piquis = styled.View`

`

export const BtnPiquis = styled.TouchableOpacity`
    height: 30px
    width: 90px
    border: solid 1px #dcdcdc
    background-color: #dcdcdc
    padding: 3px
    border-radius:  20px
    justify-content: center
    flex-direction: row
`

export const PiquisText = styled.Text`
    color: #211f1c
`

export const TopContent = styled.View`
    height: 100px
    width: 100%
    justify-content: space-around
    flex-direction: row
`