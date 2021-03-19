import React from 'react'
import { FlatList } from 'react-native'
import Navbar from '../../../components/navbar'
import { Container, ContentBox,BarraBottom, Posicao, Pontos, Nome, ContentText,Titulos, MembrosText } from './estilo'

const dados = [
    {id: 'dkasjdhaj' , nick: 'Gamificacao', pontos: 500, color: '#C3C700', position: 1, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'hasdduh', nick: 'Gamificacao', pontos: 450, color: 'grey', position: 2, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'hsadu', nick: 'Gamificacao', pontos: 342, color: '#AD450A', position: 3, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'dushda', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 4, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'dsuahd', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 5, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id:'dashdo', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 6, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'udasgdi', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 7, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'dashdoi', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 8, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'asdghiud', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 9, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'ysagduay', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 10, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'uiadi', nick: 'Gamificacao', pontos: 12, color: '#0A38AD', position: 11, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'duhasduiah', nick: 'Gamificacao', pontos: 12, color: '#B80000', position: 12, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'dushaiu', nick: 'Gamificacao', pontos: 12, color: '#B80000', position: 13, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie'},
    {id: 'udhsaiu', nick: 'Gamificacao', pontos: 12, color: '#B80000', position: 14, membros: 'Blenda Mazetto, Gabriela Tieko, Felipe Shinji, João Paulo Cardos, Sophie '},
]

export default () => {
    return (
        <Container>
            <Navbar Nome="Ranking Projeto"/>

            <Titulos>
                <ContentText>
                    <Posicao>Pos.</Posicao>
                    <Nome>Nome</Nome>
                    <Pontos>Pontos</Pontos>
                </ContentText>
            </Titulos>
            <FlatList
                data={dados}
                renderItem={( obj ) => {
                    return(
                        <ContentBox>
                            <ContentText>
                                <Posicao>{obj.item.position}º</Posicao>
                                <Nome>{obj.item.nick}</Nome>
                                <Pontos>{obj.item.pontos}</Pontos>
                            </ContentText>
                            <MembrosText>Membros: {obj.item.membros} </MembrosText>
                            <BarraBottom style={{backgroundColor: obj.item.color}}/>
                        </ContentBox>
                    )
                }}
                keyExtractor={(item)=> item.position}
            />
        </Container>
    
    )
}