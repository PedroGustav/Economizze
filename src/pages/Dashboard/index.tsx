import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { NewTransactionModal } from '../../components/NewTransactionModal';
import { TransactionsTable } from '../../components/TransactionsTable';

import { Container } from './styles';

export const Dashboard = () => {

    const [ newTransactionModalIsOpen, setNewTransactionModalIsOpen ] = useState(false);

    const requestOpenNewTransactionModal = () => {
        setNewTransactionModalIsOpen(true);
    }

    const requestCloseNewTransactionModal = () => {
        
        setNewTransactionModalIsOpen(false);
    }
    return(
        <Container>
            <Header onRequestOpenNewTransactionModal={requestOpenNewTransactionModal}/>
            <NewTransactionModal isOpen={newTransactionModalIsOpen} onRequestClose={requestCloseNewTransactionModal}/>
            <TransactionsTable/>
        </Container>       
    )
}