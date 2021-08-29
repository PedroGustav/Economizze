import React from 'react';
import { Dashboard } from './src/pages/Dashboard';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native';
import { TransactionsProvider } from './src/hooks/transactions';

export default function App(){
  return(
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={'#2A83B6'}/>
      <TransactionsProvider>
        <Dashboard/>
      </TransactionsProvider>
    </ThemeProvider>
    
  )
}