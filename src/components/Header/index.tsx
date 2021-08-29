import React from 'react';
import { Container, Content, GreetingMessage, InfoCards, NewTransactionButton, TopSection } from './styles';
import { Card } from '../Card';
import { useTransactions } from '../../hooks/transactions';

interface HeaderProps{
    onRequestOpenNewTransactionModal: () => void;
}
export function Header({ onRequestOpenNewTransactionModal }: HeaderProps){
    const { transactions } = useTransactions();

    const totalDeposits = transactions.reduce((acc, transaction) => {
        
        if(transaction.type === 'profit'){
            return acc + transaction.amount;
        }

        return acc;
    }, 0);

    const totalWithdraws = transactions.reduce((acc, transaction) => {
        
        if(transaction.type === 'withdraw'){
            return acc - transaction.amount;
        }

        return acc;
    }, 0);


    return(
        <Container>
            <TopSection>
                <GreetingMessage>
                    Bem vindo, Pedro
                </GreetingMessage>
                <NewTransactionButton
                activeOpacity={0.8}
                onPress={onRequestOpenNewTransactionModal}
                >
                    <Content>Nova transação</Content>
                </NewTransactionButton>
            </TopSection>

            <InfoCards>
                <Card type={'income'} amount={totalDeposits}/>
                <Card type={'outcome'} amount={totalWithdraws}/>
                <Card type={totalDeposits + totalWithdraws <= 0 ? 'withdraw' : 'profit' } amount={totalDeposits + totalWithdraws}/>
            </InfoCards>
        </Container>
    );
}