import React from 'react';
import { TextInputProps, ViewProps } from 'react-native';
import { Container, Placeholder, InputArea } from './styles';

interface InputProps extends TextInputProps{
    placeholder: string;
}
export function Input({placeholder, ...all}: InputProps){

    return(

        <Container style={{ marginVertical: 16}}> 
            <Placeholder>{placeholder}:</Placeholder>
            <InputArea {...all }/>
        </Container>
    )
}