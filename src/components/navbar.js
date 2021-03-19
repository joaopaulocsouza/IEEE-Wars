import { useNavigation } from '@react-navigation/core'
import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import Seta from '../assets/icons/seta.svg'

export default ({Nome}) => {
    const navegacao = useNavigation();
    
    const botaoVoltarPressionado = () =>{
        navegacao.goBack()
    }

    return(
        <Navbar>
            <BotaoVoltar onPress={botaoVoltarPressionado}>
                <Seta height="24px" width="24px" fill="#dcdcdc" stroke="#dcdcdc"/>
            </BotaoVoltar>
            <NavbarText>
                {Nome}
            </NavbarText>
            <TextDir>
            </TextDir>
        </Navbar>
    )
}

const Navbar = styled.SafeAreaView`
    width: 100%
    background-color: #211F1C
    align-items: center
    height: 60px
    flex-direction: row
    shadow-color: #000
    shadow-opacity: 0.39
    shadow-radius: 5.30px
    elevation: 13
    justify-content: space-between
    padding: 20px
    position: absolute
    z-index: 2
    top: 0    
`

const NavbarText = styled.Text`
    color: #dcdcdc
    text-align: center
    font-weight: bold
    font-size: 18px
`

const BotaoVoltar = styled.TouchableOpacity`
`

const TextDir = styled.Text`
    color: #211f1c
    margin-right: 10px
    height: 24px
    width: 24px
`