import React from 'react'
import { FlatList } from 'react-native'
import Navbar from '../../../components/navbar'
import UpIcon from '../../../assets/icons/up.svg'
import DownIcon from '../../../assets/icons/down.svg'
import ManteveIcon from '../../../assets/icons/manteve.svg'
import { Container, ContentBox,BarraBottom, Posicao, Pontos, Nome, ContentText,Titulos, PosicaoView } from './estilo'

const dados = [
    {id: 'dkasjdhaj' , nick: 'João Paulo Cardoso', pontos: 500, color: '#C3C700', position: 1, icon: 'UpIcon'},
    {id: 'hasdduh', nick: 'Juomzin', pontos: 450, color: 'grey', position: 2,  icon: 'UpIcon'},
    {id: 'hsadu', nick: 'Juomzin', pontos: 342, color: '#AD450A', position: 3,  icon: 'DownIcon'},
    {id: 'dushda', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 4, icon: 'ManteveIcon'},
    {id: 'dsuahd', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 5, icon: 'DownIcon'},
    {id:'dashdo', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 6, icon: 'ManteveIcon'},
    {id: 'udasgdi', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 7, icon: 'ManteveIcon'},
    {id: 'dashdoi', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 8, icon: 'UpIcon'},
    {id: 'asdghiud', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 9, icon: 'DownIcon'},
    {id: 'ysagduay', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 10, icon: 'UpIcon'},
    {id: 'uiadi', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 11, icon: 'DownIcon'},
    {id: 'duhasduiah', nick: 'Juomzin', pontos: 12, color: '#B80000', position: 12, icon: 'DownIcon'},
    {id: 'dushaiu', nick: 'Juomzin', pontos: 12, color: '#B80000', position: 13, icon: 'DownIcon'},
    {id: 'udhsaiu', nick: 'Juomzin', pontos: 12, color: '#B80000', position: 14, icon: 'DownIcon'},
]

export default () => {
    return (
        <Container>
            <Navbar Nome="Ranking Individual"/>

            <Titulos>
                <ContentText>
                    <Posicao>Posição</Posicao>
                    <Nome>Nome</Nome>
                    <Pontos>Pontos</Pontos>
                </ContentText>
            </Titulos>
            <FlatList
                style={BarraBottom}
                data={dados}
                renderItem={( obj ) => {
                    return(
                        <ContentBox>
                            <ContentText>
                                <PosicaoView>
                                    <Posicao>{obj.item.position}º  </Posicao>
                                    <DownIcon height="16px"  width="16px"/>
                                </PosicaoView>
                                <Nome>{obj.item.nick}</Nome>
                                <Pontos>{obj.item.pontos}</Pontos>
                            </ContentText>
                            <BarraBottom style={{backgroundColor: obj.item.color}}/>
                        </ContentBox>
                    )
                }}
                keyExtractor={(item)=> item.position}
            />
        </Container>
    
    )
}