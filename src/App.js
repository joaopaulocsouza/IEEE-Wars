import React from 'react'
import Login from './telas/Login'
import MainStack from './stacks/MainStack'
import { NavigationContainer} from '@react-navigation/native'
import {Text, View} from 'react-native'

export default function App(){
    return(
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}
