import React, {useEffect} from 'react';
import { Text, View } from 'react-native'
import { Container } from './estilo';
import Logo from '../../assets/Logo.svg'
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from '@react-navigation/native';

export default () => {

    const navegation = useNavigation();
    
    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if(token !== null){

            }else{
                navegation.reset({
                    routes: [{name: 'NavBottom'}]
                })
            }
        }
        checkToken();
    }, []); 

    return(
        <Container>
            <Logo width="200" height="200"/>
        </Container>
    )

}