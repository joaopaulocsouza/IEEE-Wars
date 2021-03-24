import React from 'react';
import { StyleSheet, FlatList, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Container, RankingContainer, RankingTitulo,Styles, BtnVerCompleto, BtnText, Traco, TabelaBox, TabelaItem,Esquerda, Direita} from './estilo'
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

const listaCaps = [
    {positio: 1, nome: 'CS', color: 'gold'},
    {positio: 2, nome: 'PES', color: 'gray'},
    {positio: 3, nome: 'RAS', color: 'blue'},
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
            <ScrollView>
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
                <LinearGradient colors={['#B81F00', '#FF6B00']} style={styles.Degrade} start={{ x: 0.7, y: 0 }} >
                    <TabelaBox>
                        <TabelaItem>
                            {listaIndividual[0].positio}º {listaIndividual[0].nome}
                        </TabelaItem>
                    </TabelaBox>
                    <TabelaBox>
                        <TabelaItem>
                            {listaIndividual[1].positio}º {listaIndividual[1].nome}
                        </TabelaItem>
                    </TabelaBox>
                    <TabelaBox>
                        <TabelaItem>
                            {listaIndividual[2].positio}º {listaIndividual[2].nome}
                        </TabelaItem>
                    </TabelaBox>
                </LinearGradient>
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
                    <LinearGradient colors={['#B81F00', '#FF6B00']} style={styles.Degrade} start={{ x: 0.6, y: 0 }} >
                        <TabelaBox>
                            <TabelaItem>
                                {listaPrjs[0].positio}º {listaPrjs[0].nome}
                            </TabelaItem>
                        </TabelaBox>
                        <TabelaBox>
                            <TabelaItem>
                                {listaPrjs[1].positio}º {listaPrjs[1].nome}
                            </TabelaItem>
                        </TabelaBox>
                        <TabelaBox>
                            <TabelaItem>
                                {listaPrjs[2].positio}º {listaPrjs[2].nome}
                            </TabelaItem>
                        </TabelaBox>
                    </LinearGradient>
                </Direita>
            </RankingContainer>

            
            <RankingContainer>
                <Esquerda>
                    <RankingTitulo>Ranking Capitulos</RankingTitulo>
                    <BtnVerCompleto  onPress={btnProjetoAtivo}>
                        <BtnText>
                            Ver tudo
                        </BtnText>
                    </BtnVerCompleto>
                </Esquerda>
                <Direita>
                    <LinearGradient colors={['#B81F00', '#FF6B00']} style={styles.Degrade} start={{ x: 0.6, y: 0 }} >
                        <TabelaBox>
                            <TabelaItem>
                                {listaCaps[0].positio}º {listaCaps[0].nome}
                            </TabelaItem>
                        </TabelaBox>
                        <TabelaBox>
                            <TabelaItem>
                                {listaCaps[1].positio}º {listaCaps[1].nome}
                            </TabelaItem>
                        </TabelaBox>
                        <TabelaBox>
                            <TabelaItem>
                                {listaCaps[2].positio}º {listaCaps[2].nome}
                            </TabelaItem>
                        </TabelaBox>
                    </LinearGradient>
                </Direita>
            </RankingContainer>
            </ScrollView>
        </Container>
    )

}

const styles = StyleSheet.create({
    Degrade: {
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }    
})