import React from 'react';
import { Text, FlatList } from 'react-native'
import { LinearGradient } from '';
import { Container, RankingContainer, RankingTitulo,Styles, BtnVerCompleto, BtnText, Traco, Tabela, TabelaItem,Esquerda, Direita} from './estilo'
import { useNavigation } from '@react-navigation/core';
import MedalhaIcon from '../../assets/icons/medalha.svg'

const listaIndividual = [
    {positio: 1, nome: 'Juomz', color: 'gold'},
    {positio: 2, nome: 'Juomz', color: 'gray'},
    {positio: 3, nome: 'Juomz', color: 'blue'},
]

const listaPrjs = [
    {positio: 1, nome: 'Gamificacao', color: 'gold'},
    {positio: 2, nome: 'Gamificacao', color: 'gray'},
    {positio: 3, nome: 'Gamificacao', color: 'blue'},
]

export default () => {

    const navegacao = useNavigation()
    const btnIndividualAtivo = () => {
        navegacao.navigate('RankingIndividual')
    }

    const btnProjetoAtivo = () => {
        navegacao.navigate('RankingProjetos')
    }

    return(
        <Container>
            <RankingContainer>
                <Esquerda>
                    <RankingTitulo>Ranking Individual</RankingTitulo>
                    <BtnVerCompleto onPress={btnIndividualAtivo}>
                        <BtnText>
                            Ver tudo
                        </BtnText>
                    </BtnVerCompleto>
                </Esquerda>
                <Direita>
                    <Tabela>
                        <TabelaItem>
                            {listaIndividual[0].positio}º {listaIndividual[0].nome}
                        </TabelaItem>
                        <Traco style={{backgroundColor: listaIndividual[0].color}} />
                        <TabelaItem>
                             {listaIndividual[1].positio}º {listaIndividual[1].nome}
                        </TabelaItem>
                        <Traco style={{backgroundColor: listaIndividual[1].color}}/>
                        <TabelaItem>
                            {listaIndividual[2].positio}º {listaIndividual[2].nome}
                        </TabelaItem>
                        <Traco style={{backgroundColor: listaIndividual[2].color}}/>
                    </Tabela>
                </Direita>
            </RankingContainer>

            <RankingContainer>
                <Esquerda>
                    <RankingTitulo>Ranking Projetos</RankingTitulo>
                    <BtnVerCompleto  onPress={btnProjetoAtivo}>
                        <BtnText>
                            Ver tudo
                        </BtnText>
                    </BtnVerCompleto>
                </Esquerda>
                <Direita>
                    <Tabela>
                        <TabelaItem>
                            {listaPrjs[0].positio}º {listaPrjs[0].nome}
                        </TabelaItem>
                        <Traco style={{backgroundColor: listaPrjs[0].color}} />
                        <TabelaItem>
                            {listaPrjs[1].positio}º {listaPrjs[1].nome}
                        </TabelaItem>
                        <Traco style={{backgroundColor: listaPrjs[1].color}}/>
                        <TabelaItem>
                            {listaPrjs[2].positio}º {listaPrjs[2].nome}
                        </TabelaItem>
                        <Traco style={{backgroundColor: listaPrjs[2].color}}/>
                    </Tabela>
                </Direita>
            </RankingContainer>

        </Container>
    )

}