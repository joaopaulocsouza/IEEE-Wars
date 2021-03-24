import React from 'react'
import { FlatList } from 'react-native'
import Navbar from '../../../components/navbar'
import UpIcon from '../../../assets/icons/up.svg'
import DownIcon from '../../../assets/icons/down.svg'
import ManteveIcon from '../../../assets/icons/manteve.svg'
import { Container, ContentBox,BarraBottom, Posicao, Pontos, Nome, ContentText,Titulos, PosicaoView } from './estilo'

const dados = [
    {id: 'dkasjdhaj' , nick: 'João Paulo Cardoso', pontos: 500, color: '#C3C700', position: 1, icon: 'UpIcon', posicaoAntiga: 10},
    {id: 'hasdduh', nick: 'Juomzin', pontos: 450, color: 'grey', position: 2,  icon: 'UpIcon', posicaoAntiga: 1},
    {id: 'hsadu', nick: 'Juomzin', pontos: 342, color: '#AD450A', position: 3,  icon: 'DownIcon', posicaoAntiga: 2},
    {id: 'dushda', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 4, icon: 'ManteveIcon', posicaoAntiga: 5},
    {id: 'dsuahd', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 5, icon: 'DownIcon', posicaoAntiga: 7},
    {id:'dashdo', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 6, icon: 'ManteveIcon', posicaoAntiga: 4},
    {id: 'udasgdi', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 7, icon: 'ManteveIcon', posicaoAntiga: 3},
    {id: 'dashdoi', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 8, icon: 'UpIcon', posicaoAntiga: 8},
    {id: 'asdghiud', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 9, icon: 'DownIcon', posicaoAntiga: 9},
    {id: 'ysagduay', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 10, icon: 'UpIcon', posicaoAntiga: 12},
    {id: 'uiadi', nick: 'Juomzin', pontos: 12, color: '#0A38AD', position: 11, icon: 'DownIcon', posicaoAntiga: 6},
    {id: 'duhasduiah', nick: 'Juomzin', pontos: 12, color: '#B80000', position: 12, icon: 'DownIcon', posicaoAntiga: 13},
    {id: 'dushaiu', nick: 'Juomzin', pontos: 12, color: '#B80000', position: 13, icon: 'DownIcon', posicaoAntiga: 14},
    {id: 'udhsaiu', nick: 'Juomzin', pontos: 12, color: '#B80000', position: 14, icon: 'DownIcon', posicaoAntiga: 11},
]

export default () => {
    function IconePosicao(posicaoAtual, posicaoAntiga){
        if (posicaoAtual > posicaoAntiga) {
            return(<DownIcon height="16px" width="16px" style={{ paddingTop: 20}}/>)
        }if (posicaoAtual < posicaoAntiga ) {
            return( <UpIcon height="16px" width="16px"  style={{ paddingTop: 20}}/> )
        }else{
            return( <ManteveIcon height="16px" width="16px" style={{ paddingTop: 20, opacity: 0.7}} /> )
        }
    }

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
                                    <Posicao>{obj.item.position}º </Posicao>
                                    {IconePosicao(obj.item.position, obj.item.posicaoAntiga)}
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