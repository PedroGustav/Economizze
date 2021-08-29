import React from 'react';
import { Amount, Container, TitleContent, Title } from './styles';
import Icon  from 'react-native-vector-icons/Feather';

interface CardProps{
    amount: number;
    type: 'income' | 'outcome'| 'profit' | 'withdraw';    
}

export function Card({ amount, type }: CardProps){
    return(
        <Container type={type} style={{marginVertical: 10}}>
            <TitleContent>
                <Icon name={`${ type === 'income' ? 'arrow-up-circle' : type === 'outcome' ? 'arrow-down-circle' : 'dollar-sign'}`} size={35} color={`${ type  === 'income' ? '#09B678' : type === 'outcome' ? '#E62E4D' : '#F6F6F6'}`}/>
                <Title type={type} >{type === 'income' ? 'Entradas' : type === 'outcome' ? 'Saídas' : 'Total'}</Title>
            </TitleContent>
            <Amount type={type}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(amount)}</Amount>
        </Container>
    );
}

