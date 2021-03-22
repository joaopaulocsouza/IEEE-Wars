import React from 'react';
import { Text } from 'react-native'
import { Container, Saldo, SaldoText, Esquerda, Direita, Piquis, BtnPiquis, PiquisText, TopContent } from './estilo'
import CashIcon from '../../assets/icons/cash'
import { useNavigation } from '@react-navigation/core';

const userDados = {Saldo: 100}

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
        </Container>
    )

}