import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Carregamento from '../telas/Carregamento'
import Login from '../telas/Login'
import Cadastro from '../telas/Cadastro'

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Carregamento"
        screenOptions={{headerShown: false}}
    >
        <Stack.Screen name="Carregamento" component={Carregamento} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
)