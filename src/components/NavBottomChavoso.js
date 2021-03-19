import React from 'react'
import styled from 'styled-components/native'
import InicioIcone from '../assets/icons/home.svg'
import RankingIcone from '../assets/icons/ranking.svg'
import TarefasIcone from '../assets/icons/list'
import LojaIcone from '../assets/icons/Loja'

export default ({state, navigation}) => {

    const destino = (tela) =>{
        navigation.navigate(tela)
    }

    return(
        <Nav>
            <NavItem onPress={() => destino('Inicio')}>
                <InicioIcone height="24px" width="24px"  fill="#BCBCBC" style={{opacity: state.index===0? 1 : 0.5}} />
                <ItemText style={{opacity: state.index===0? 1 : 0.5}}>Inicio</ItemText>
            </NavItem>

            <NavItem onPress={() => destino('Tarefas')}>
                <TarefasIcone height="24px" width="24px"  fill="#BCBCBC" style={{opacity: state.index===1? 1 : 0.5}}/>
                <ItemText style={{opacity: state.index===1? 1 : 0.5}}>Tarefas</ItemText>
            </NavItem>

            <NavItem onPress={() => destino('Ranking')}>
                <RankingIcone height="24px" width="24px"  fill="#BCBCBC" style={{opacity: state.index===2? 1 : 0.5}}/>
                <ItemText style={{opacity: state.index===2? 1 : 0.5}}>Ranking</ItemText>
            </NavItem>

            <NavItem onPress={() => destino('Loja')}>
                <LojaIcone height="24px" width="24px"  fill="#BCBCBC" style={{opacity: state.index===3? 1 : 0.5}}/>
                <ItemText style={{opacity: state.index===3? 1 : 0.5}}>Loja</ItemText>
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
    padding-top: 5px
    shadow-color: #000
    shadow-opacity: 0.39
    shadow-radius: 5.30px
    elevation: 13

`

const NavItem = styled.TouchableOpacity`
    justify-content: center
    align-items: center
`

const ItemText = styled.Text`
    color: #BCBCBC
    font-size: 10px
`