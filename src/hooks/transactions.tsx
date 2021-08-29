import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';


interface Transaction{
    id: string;
    amount: number;
    category: string;
    isFix: boolean;
    title: string;
    type: 'profit' | 'withdraw';
    date: Date;
}
interface TransactionsProviderProps{
    children: ReactNode;
}
interface TransactionsContextData{
    transactions: Transaction[];
    isLoading: boolean;
    createTransaction: (transactionInput: Omit< Transaction, 'id' | 'date'>) => Promise<void>;
    deleteTransaction: (id: string) => Promise<void>;
    updateIsFix: (id: string) => Promise<void>;
}

const TransactionsContext = createContext({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [TransactionsList, setTransactionsList] = useState<Transaction[]>([]);
    const dataKey = '@Economizze:transactions';
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadTransactionsList(){
            const response = await AsyncStorage.getItem(dataKey);
            const transactions = response ? JSON.parse(response) : [];
            setTransactionsList(transactions);
            setIsLoading(false);
        }
        loadTransactionsList();
    }, [TransactionsList]);

    async function createTransaction(transactionInput: Omit<Transaction, 'id' | 'date'>) {
        try{
            const data = await AsyncStorage.getItem(dataKey);
            const currentData = data ? JSON.parse(data) : [];

            const dataFormatted = [
                ...currentData,
                transactionInput
            ];

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
            
            

             
        }catch(err){
            console.log(err);
            Alert.alert('não foi possível salvar');
        }
    }

    async function deleteTransaction(id: string){
        const newTransactions = TransactionsList.filter(transaction => transaction.id != id);
        await AsyncStorage.setItem(dataKey, JSON.stringify(newTransactions));
        setTransactionsList(newTransactions);
    };

    async function updateIsFix(id: string){
        const transaction = TransactionsList.filter(transaction => transaction.id == id);
        transaction[0].isFix = !transaction[0].isFix;
        setTransactionsList([...TransactionsList, transaction[0]]);
    }
    
    return(
        <TransactionsContext.Provider value={{ transactions: TransactionsList, createTransaction, deleteTransaction, updateIsFix, isLoading}}>
            {children}
        </TransactionsContext.Provider>
    );
    
}

export function useTransactions(){

    const context = useContext(TransactionsContext);

    if(!context){

        throw new Error('O useTransactions só pode ser usado em conjunto com o TransactionsProvider.')
    }

    return context;
}