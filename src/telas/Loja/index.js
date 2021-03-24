import React from 'react';
import { StyleSheet, View } from 'react-native'
import { Container, Saldo, SaldoText, Esquerda, Direita, Piquis, BtnPiquis, PiquisText, TopContent, StoreContent, Box, CaixaMaior, CaixaFull, Titulo, Valor, BarraRaridade } from './estilo'
import CashIcon from '../../assets/icons/cash'
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient'
import { Item } from 'react-native-paper/lib/typescript/components/List/List';

const userDados = {Saldo: 100}
const ItemDados = {raridade: '#62038E'}

export default () => {

    const navegacao = useNavigation();

    const BtnPicsAtivo = () => {
        navegacao.navigate('Pics')
    }

    return(
        <Container>
            <TopContent>
                <Saldo>
                    <Esquerda><CashIcon/></Esquerda>
                    <Direita>
                        <SaldoText> {userDados.Saldo} </SaldoText>
                    </Direita>                
                </Saldo>
                <Piquis>
                    <BtnPiquis onPress={BtnPicsAtivo}>
                        <PiquisText>Pics</PiquisText>
                    </BtnPiquis>
                </Piquis>
            </TopContent>

            <StoreContent showsVerticalScrollIndicator={false}>
                <Box>
                    <CaixaMaior>
                        <Titulo>Item</Titulo>
                        <Valor>$500</Valor>
                        <BarraRaridade/>
                    </CaixaMaior>
                    <CaixaMaior>
                        <Titulo>Item</Titulo>
                        <Valor>$500</Valor>
                        <BarraRaridade/>
                    </CaixaMaior>
                </Box>
                <Box>
                    <CaixaMaior>
                            <Titulo>Item</Titulo>
                            <Valor>$100</Valor>
                            <BarraRaridade style={{backgroundColor: "#033B8E"}}/>
                    </CaixaMaior>
                    <CaixaMaior>
                            <Titulo>Item</Titulo>
                            <Valor>$100</Valor>
                            <BarraRaridade style={{backgroundColor: "#033B8E"}}/>
                    </CaixaMaior>
                </Box>
                <Box>
                    <CaixaFull>
                            <Titulo>Item</Titulo>
                            <Valor>$250</Valor>
                        <BarraRaridade style={{backgroundColor: ItemDados.raridade}}/>
                    </CaixaFull>
                </Box>
                <Box>
                    <CaixaFull>
                            <Titulo>Item</Titulo>
                            <Valor>$250</Valor>
                        <BarraRaridade style={{backgroundColor: ItemDados.raridade}}/>
                    </CaixaFull>
                </Box>
                <Box>
                    <CaixaMaior>
                        <Titulo>Item</Titulo>
                        <Valor>$25</Valor>
                        <BarraRaridade style={{backgroundColor: "#A1A1A1"}}/>
                    </CaixaMaior>
                    <CaixaMaior>
                        <Titulo>Item</Titulo>
                        <Valor>$50</Valor>
                        <BarraRaridade style={{backgroundColor: "#038100"}}/>
                    </CaixaMaior>
                </Box>
            </StoreContent>
        </Container>
    )

}

const styles = StyleSheet.create({
    Degrade: {
        borderRadius: 10,
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    
})