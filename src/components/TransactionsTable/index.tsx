import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTransactions } from '../../hooks/transactions';
import { DetailsTransactionModal } from '../DetailsTransactionModal';
import { Container, Table, TableHeader, Title, TableBody, TableRow, RowContent, TransactionTitle, TransactionAmount, LoadContainer, } from './styles';
import { useTheme } from 'styled-components';

interface Transaction{
    id: string;
    amount: number;
    category: string;
    isFix: boolean;
    title: string;
    type: 'profit' | 'withdraw';
    date: Date;
}


export function TransactionsTable(){
    const [TransactionDetailsModalIsOpen, setTransactionDetailsModalIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState<'profit' | 'withdraw'>('profit');
    const [date, setDate] = useState(new Date());
    const [isFix, setIsFix] = useState(false);
    const [amount, setAmount] = useState(0);
    const [transactionId, setTransactionId] = useState('');

    const { transactions, isLoading } = useTransactions();
    const theme = useTheme();
    function SetTransactionDetailsModal({title, category, amount, type, date, isFix, id}: Transaction){
        setTitle(title);
        setCategory(category);
        setAmount(amount);
        setType(type);
        setDate(date);
        setIsFix(isFix);
        setTransactionId(id);

        openTransactionDetailsModal();
    };
    function openTransactionDetailsModal(){
        setTransactionDetailsModalIsOpen(true);
    }

    function closeTransactionDetailsModal(){
        setTransactionDetailsModalIsOpen(false);
    }
    
    return(
        <>
        <DetailsTransactionModal
            amount={amount}
            category={category}
            date={date}
            type={type}
            isFix={isFix}
            title={title}
            id={transactionId}
            isOpen={TransactionDetailsModalIsOpen}
            onRequestClose={closeTransactionDetailsModal}
        />
        <Container>
            <ActivityIndicator />
            {
                isLoading ? <LoadContainer><ActivityIndicator color={theme.colors.sub_title}/></LoadContainer> :
                <>
                    <Table>
                        <TableHeader>
                            <Title>Tabela de transações</Title>
                        </TableHeader>
                        <TableBody showsVerticalScrollIndicator={false}>                

                            {transactions.map(transaction => (
                                <TableRow 
                                activeOpacity={0.9}
                                underlayColor='#8B8B8B'
                                onPress={() => SetTransactionDetailsModal(transaction)}
                                key={transaction.id}
                                >
                                    <RowContent>
                                        <TransactionTitle>{transaction.title}</TransactionTitle>
                                        <TransactionAmount type={transaction.type}>{`${transaction.type === 'profit' ? '' : '- '}${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(transaction.amount)}`}</TransactionAmount>
                                    </RowContent>
                                </TableRow>
                                
                            ))}

                        </TableBody>
                    </Table>

                </>
            }
        </Container>
        </>
    )
}