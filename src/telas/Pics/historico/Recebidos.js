import React from 'react'
import Navbar from '../../../components/navbar'
import { Container } from '../estilo'
import { FlatList } from 'react-native-gesture-handler'
import { ContentBox, Topo, DadosTitulo, DadosDado, Titulo, DescricaoBox, DescricaoText, Dados } from './estilo'

const dados = [
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 16},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 15},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key:14},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 13},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 12},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 11},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 10},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 9},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 8},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 7},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 6},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 5},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 4},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>',key: 3},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key:2},
    {Origem: 'Juomzin', valor: 10, descricao: 'Lorem ipsum eta C:\Users\tivap\Desktop\GAMIFICACAO\desenvolvimento\Gamificacao\IEEEWars>', key: 1},

]

export default () => {
    return(
        <Container >
            <Navbar Nome="Histórico"/>
            <FlatList
                style={{marginTop: 60}}
                data={dados}
                renderItem={(obj) => {
                    return(
                    <ContentBox>
                        <Topo>
                            <Dados>
                                <DadosTitulo>Origem </DadosTitulo>
                                <DadosDado>{obj.item.Origem}</DadosDado>
                            </Dados>
                            <Dados>
                                <DadosTitulo>Valor </DadosTitulo>
                                <DadosDado>${obj.item.valor}</DadosDado>
                            </Dados>
                        </Topo>
                        <DescricaoBox>
                            <Titulo>Descricao</Titulo>
                            <DescricaoText>{obj.item.descricao}</DescricaoText>
                        </DescricaoBox>
                    </ContentBox>
                    )
                }}
            />
        </Container>
    )
}