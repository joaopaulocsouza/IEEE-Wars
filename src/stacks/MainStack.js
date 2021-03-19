import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Carregamento from '../telas/Carregamento'
import Login from '../telas/Login'
import Cadastro from '../telas/Cadastro'
import Pics from '../telas/Pics'
import Recuperar from '../telas/Recuperar'
import mensagemSucessoRecuperar from '../telas/Recuperar/mensagemSucesso'
import mensagemErroRecuperar from '../telas/Recuperar/mensagemErro'
import NavBottom from '../components/NavBottom'
import RankingIndividual from '../telas/Ranking/RankingIndividual'
import RankingProjetos from '../telas/Ranking/RankingProjeto'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Carregamento"
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Carregamento" component={Carregamento} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Recuperar" component={Recuperar} />
        <Stack.Screen name="mensagemSucessoRecuperar" component={mensagemSucessoRecuperar} />
        <Stack.Screen name="mensagemErroRecuperar" component={mensagemErroRecuperar} />
        <Stack.Screen name="NavBottom" component={NavBottom} />
        <Stack.Screen name="Pics" component={Pics} />
        <Stack.Screen name="RankingIndividual" component={RankingIndividual} />
        <Stack.Screen name="RankingProjetos" component={RankingProjetos} />
    </Stack.Navigator>
    
)