import React from 'react';
import { StyleSheet, ScrollView } from 'react-native'
import { Container, Saldo, SaldoText, Link, Links, Funcao, Nome, CardMembro, CaixaMembros, StoreContent, Box, CaixaMaior, CaixaFull, Titulo, Valor, BarraRaridade } from './estilo'
import UserIcon from '../../assets/icons/user'
import GitHubIcon from '../../assets/icons/github'
import LinkedInIcon from '../../assets/icons/linkedin'
import { useNavigation } from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient'
import Navbar from '../../components/navbar'

export default () => {

    const navegacao = useNavigation();

    const BtnPicsAtivo = () => {
        navegacao.navigate('Pics')
    }

    return(
        <Container>
            <Navbar Nome="Créditos" />
            <ScrollView>
            <Box>
                <Titulo>
                    Equipe
                </Titulo>
                <CaixaMembros>

                     <CardMembro>
                        <UserIcon height="70px" width="70px" fill="#dcdcdc" />
                        <Nome>Blenda Mazetto</Nome>
                        <Funcao>Back-End</Funcao>
                        <Links>
                            <Link>
                                <GitHubIcon height="25px"  width="25px" />
                            </Link>
                            <Link>
                                <LinkedInIcon height="25px"  width="25px"  fill="#DCDCDC"/>
                            </Link>
                        </Links>
                    </CardMembro>

                    <CardMembro>
                        <UserIcon height="70px" width="70px" fill="#dcdcdc" />
                        <Nome>Gabriela Tieko</Nome>
                        <Funcao>Front-End</Funcao>
                        <Links>
                            <Link>
                                <GitHubIcon height="25px"  width="25px" />
                            </Link>
                            <Link>
                                <LinkedInIcon height="25px"  width="25px"  fill="#DCDCDC"/>
                            </Link>
                        </Links>
                    </CardMembro>
                </CaixaMembros>
                <CaixaMembros>
                    <CardMembro>
                        <UserIcon height="70px" width="70px" fill="#dcdcdc" />
                        <Nome>Felipe Shinji</Nome>
                        <Funcao>Back-End</Funcao>
                        <Links>
                            <Link>
                                <GitHubIcon height="25px"  width="25px" />
                            </Link>
                            <Link>
                                <LinkedInIcon height="25px"  width="25px"  fill="#DCDCDC"/>
                            </Link>
                        </Links>
                    </CardMembro>

                    <CardMembro>
                        <UserIcon height="70px" width="70px" fill="#dcdcdc" />
                        <Nome>João Paulo Cardoso</Nome>
                        <Funcao>Full-Stack</Funcao>
                        <Links>
                            <Link>
                                <GitHubIcon height="25px"  width="25px"/>
                            </Link>
                            <Link>
                                <LinkedInIcon height="25px"  width="25px"  fill="#DCDCDC"/>
                            </Link>
                        </Links>
                    </CardMembro>
                </CaixaMembros>
                <CaixaMembros>
                    <CardMembro>
                        <UserIcon height="70px" width="70px" fill="#dcdcdc" />
                        <Nome>Sophie</Nome>
                        <Funcao>Back-End</Funcao>
                        <Links>
                            <Link>
                                <GitHubIcon height="25px"  width="25px" />
                            </Link>
                            <Link>
                                <LinkedInIcon height="25px"  width="25px"  fill="#DCDCDC"/>
                            </Link>
                        </Links>
                    </CardMembro>
                </CaixaMembros>
            </Box>
            </ScrollView>            
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