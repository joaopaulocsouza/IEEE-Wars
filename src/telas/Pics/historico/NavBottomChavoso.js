import React from 'react'
import styled from 'styled-components/native'

export default ({state, navigation}) => {

    const destino = (tela) =>{
        navigation.navigate(tela)
    }

    return(
        <Nav>
            <NavItem onPress={() => destino('Enviados')}>
                <Barra style={{backgroundColor: state.index===0? 'red' : 'white', opacity: state.index===0? 1 : 0.5}} />
                <ItemText style={{color: state.index===0? 'red' : 'white', opacity: state.index===0? 1 : 0.5}}>Enviados</ItemText>
            </NavItem>

            <NavItem onPress={() => destino('Recebidos')}>
            <Barra style={{backgroundColor: state.index===1? 'red' : 'white', opacity: state.index===1? 1 : 0.5}} />
                <ItemText style={{color: state.index===1? 'red' : 'white' , opacity: state.index===1? 1 : 0.5}}>Recebidos</ItemText>
            </NavItem>
        </Nav>
    )
}

const Nav = styled.View`
    height: 60px
    justify-content: space-around
    align-items: center
    background-color: #211f1c
    width: 100%
    flex-direction: row
    shadow-color: #000
    shadow-opacity: 0.39
    shadow-radius: 5.30px
    elevation: 13

`
const Barra = styled.View`
    height: 2px
    width: 100%
    margin-bottom: 15px
`

const NavItem = styled.TouchableOpacity`
    align-items: center
    width: 50%
    height: 100%
`

const ItemText = styled.Text`
    color: #BCBCBC
    font-size: 15px
`