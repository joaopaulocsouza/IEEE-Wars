import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Enviados from './Enviados'
import Recebidos from './Recebidos'
import NavBottomChavoso from './NavBottomChavoso'

const Tab = createBottomTabNavigator()

export default () => (

    <Tab.Navigator tabBar={props=><NavBottomChavoso {...props}/>} >
        <Tab.Screen name="Enviados" component={Enviados} />
        <Tab.Screen name="Recebidos" component={Recebidos} />
    </Tab.Navigator>
)
