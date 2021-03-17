
import React from 'react'
import { useNavigation } from '@react-navigation/core'

export default ({Nome, Email, Numero}) => {
    const navegacao = useNavigation()

    if(Nome === 'Joao Paulo' && Email === "Juomzingameplays@gmail.com" && Numero === 10){
        navegacao.navigate('mensagemSucessoRecuperar')
    }else{
        navegacao.navigate('mensagemErroRecuperar')
    }

    Recuperar: async ({Nome, Email, Numero}) => {
        if(Nome === 'Joao Paulo' && Email === "Juomzingameplays@gmail.com" && Numero === 10){
            navegacao.navigate('mensagemSucessoRecuperar')
        }else{
            navegacao.navigate('mensagemErroRecuperar')
        }
    }
}