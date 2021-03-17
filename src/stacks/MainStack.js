import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Carregamento from '../telas/Carregamento'
import Login from '../telas/Login'
import Cadastro from '../telas/Cadastro'
import Inicio from '../telas/Inicio'
import Recuperar from '../telas/Recuperar'
import mensagemSucessoRecuperar from '../telas/Recuperar/mensagemSucesso'
import mensagemErroRecuperar from '../telas/Recuperar/mensagemErro'
import { useNavigation } from '@react-navigation/core'
import { Button } from 'react-native'
import Seta from '../assets/icons/seta.svg'

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
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="mensagemSucessoRecuperar" component={mensagemSucessoRecuperar} />
        <Stack.Screen name="mensagemErroRecuperar" component={mensagemErroRecuperar} />
    </Stack.Navigator>
    
)