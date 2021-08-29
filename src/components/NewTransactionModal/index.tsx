import React, { useState, useEffect } from 'react';

import {Alert, Keyboard,
        Modal,
        TouchableWithoutFeedback,
} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputForm } from '../InputForm';
import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Feather';
import { ButtonsView, Button, ButtonContent, Container, StyledModal, Title, SubmitButton, LastSection, Text, CheckboxFix, Checkbox, ContentCheckbox, CheckboxTitle } from './styles';
import { CloseButton } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import  uuid from 'react-native-uuid';
import { useTransactions } from '../../hooks/transactions';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

type TransactionType = 'profit' | 'withdraw' | 'default';

interface FormData{
    title: string;
    category: string;
    amount: number;
}

const schema = Yup.object().shape({
    title: Yup
    .string()
    .required('Nome é obrigatório'),
    
    category: Yup
    .string()
    .required('Informe uma categoria'),
    
    amount: Yup
    .number()
    .typeError('Informa um valor válido')
    .positive('Informe um valor positivo')
    .required('Informe um valor')
})

export function NewTransactionModal({ isOpen , onRequestClose}: NewTransactionModalProps){
    const [transactionType, setTransactionType] = useState<TransactionType>('default');
    const [isFix, setIsFix] = useState(false);
    const dataKey = '@Economizze:transactions';

    const { createTransaction } = useTransactions();

    const { 
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema)});

    async function handleRegister(form: FormData){
        if(transactionType == 'default'){
            return Alert.alert(
                'Selecione uma categoria',
                'Você não selecionou nenhuma categoria',
                [
                    {text: 'Entendi'},
                ],
                
                
            );
        }
        const newTransaction = {
            id: String(uuid.v4()),
            title: form.title,
            category: form.category,
            amount: form.amount,
            type: transactionType,
            isFix: isFix,
            date: Intl.DateTimeFormat('pt-BR').format(new Date())
        }

        await createTransaction(newTransaction);

        reset();
        setTransactionType('default');
        setIsFix(false);
        onRequestClose();
    };
    
    function closeModal(){
        setTransactionType('default');
        onRequestClose();
    }

    useEffect(() => {
        async function loadData(){
            const data = await AsyncStorage.getItem(dataKey);
            console.log(JSON.parse(data!));
        }

        loadData();
    }, []);
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Modal
                animationType='fade'
                visible={isOpen}
                onRequestClose={closeModal}        
                transparent={true}
                >
                        <Container>
                            <StyledModal>
                                <Title>Cadastrar nova transação</Title>
                                <CloseButton onPress={closeModal}>
                                    <Icon name='x' size={25} color={'#363F5F'}/>
                                </CloseButton>
                                <InputForm
                                    name="title"
                                    placeholder={'Título'} 
                                    style={{ width: 320}}
                                    control={control}
                                    autoCapitalize="sentences"
                                    autoCorrect={false}
                                    error={errors.title && errors.title.message}
                                />
                                <InputForm
                                    name="category"
                                    placeholder={'Categoria'} 
                                    style={{ width: 320}}
                                    control={control}
                                    autoCapitalize="sentences"
                                    autoCorrect={false}
                                    error={errors.category && errors.category.message}
                                />
                                <ButtonsView>

                                    {/* Botão 'Entradas' */}
                                    <Button
                                    activeOpacity={0.9}
                                    underlayColor='#f8f8f8'
                                    style={{
                                        width: 150,
                                        shadowOffset: {
                                            width: 0,
                                            height: 26,
                                        },
                                        shadowOpacity: 0.58,
                                        shadowRadius: 16.00,
                            
                                        elevation: 4,
                                    }} 
                                    isActive={ transactionType === 'profit'}
                                    onPress={() => setTransactionType('profit')}
                                    activeColor={'green'}
                                    >
                                        <ButtonContent
                                        isActive={ transactionType === 'profit'}
                                        activeColor={'green'}
                                    
                                        >Entradas</ButtonContent> 
                                    </Button>


                                    {/* Botão 'Saídas' */}
                                    <Button
                                    activeOpacity={0.9}
                                    underlayColor='#f8f8f8'
                                    style={{
                                        width: 150,
                                        shadowColor: "#00000070",
                                        shadowOffset: {
                                            width: 0,
                                            height: 26,
                                        },
                                        shadowOpacity: 0.58,
                                        shadowRadius: 16.00,
                            
                                        elevation: 4,
                                    }}
                                    isActive={ transactionType === 'withdraw'}
                                    onPress={() => setTransactionType('withdraw')}
                                    activeColor={'red'}
                                    >
                                        <ButtonContent 
                                        
                                        isActive={ transactionType === 'withdraw'}
                                        activeColor={'red'}
                                        >
                                        Saídas
                                        </ButtonContent> 
                                    </Button>
                                    
                                </ButtonsView>
                                <LastSection>
                                    <InputForm 
                                        placeholder={'Valor'}
                                        style={{width: 130 }}
                                        control={control}
                                        name="amount"
                                        keyboardType={'numeric'}
                                        error={errors.amount && errors.amount.message}
                                    />

                                    <CheckboxFix>
                                        <Checkbox
                                        onPress={() => setIsFix(!isFix)}
                                        >
                                            <ContentCheckbox
                                            isFix={isFix}
                                            />
                                        </Checkbox>

                                        <CheckboxTitle>Fixa</CheckboxTitle>
                                    </CheckboxFix>
                                
                                </LastSection>


                                <SubmitButton
                                activeOpacity={0.9}
                                underlayColor='#f8f8f8'
                                onPress={handleSubmit(handleRegister)}
                                style={{
                                    borderBottomRightRadius: 8,
                                    borderBottomLeftRadius: 8
                                }}

                                >
                                    <Text>Cadastrar</Text>
                                </SubmitButton>
                            </StyledModal>
                        </Container>
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    );
}