import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Inicio from '../telas/Inicio'
import Loja from '../telas/Loja'
import Ranking from '../telas/Ranking'
import Tarefas from '../telas/Tarefas'
import NavBottomChavoso from './NavBottomChavoso'

const Tab = createBottomTabNavigator();

export default () => (


    <Tab.Navigator tabBar={props=><NavBottomChavoso {...props}/>}>
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Tarefas" component={Tarefas}  />
        <Tab.Screen name="Ranking" component={Ranking} />
        <Tab.Screen name="Loja" component={Loja} />
    </Tab.Navigator>
)