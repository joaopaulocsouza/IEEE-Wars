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
    height: 60px
    width: 100%
    justify-content: space-around
    flex-direction: row
`

export const StoreContent = styled.ScrollView`
    width: 100%
`

export const Box = styled.View`
    width: 100%
    padding: 2%
    justify-content: space-between
    flex-direction: row
`

export const CaixaMaior = styled.TouchableOpacity`
    height: 200px
    width: 48%
    background-color: #312E2A
    border-radius: 10px
    shadowColor: #000
    shadowRadius: 4.65px
    elevation: 8
    shadowOpacity: 0.30
    justify-content: flex-end
    align-items: center
`

export const CaixaFull = styled.TouchableOpacity`
    height: 120px
    width: 100%
    background-color: #312E2A
    border-radius: 10px
    shadowColor: #000
    shadowRadius: 4.65px
    elevation: 8
    justify-content: flex-end
    align-items: center
    shadowOpacity: 0.30
`

export const Titulo = styled.Text`
    color: #dcdcdc
    font-weight: 100
`

export const Valor = styled.Text`
    color: #dcdcdc
    font-weight: bold
    margin: 5px
`

export const BarraRaridade = styled.View`
    width: 100%
    background-color: #E9C401
    height: 15px
    border-bottom-left-radius: 10px
    border-bottom-right-radius: 10px
`