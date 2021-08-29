import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useTransactions } from '../../hooks/transactions';

import { 
    Container,
    StyledModal, 
    Title,
    Details,
    Row,
    RowTitle,
    Category,
    Type,
    Amount,
    AlterFixButton,
    DeleteTransactionButton,
    Text,
    CloseButton,
    Date
} from './styles';

interface DetailsTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    category: string;
    type: 'profit' | 'withdraw';
    amount: number;
    date: Date;
    isFix: boolean;
    id: string;
}

export function DetailsTransactionModal({ 
    isOpen,
    onRequestClose,
    amount,
    category,
    date,
    isFix,
    title,
    type,
    id
}: DetailsTransactionModalProps){

    const { deleteTransaction, updateIsFix } = useTransactions();

    async function handleUpdateIsFix(id: string){
        await updateIsFix(id);
        onRequestClose();
    }
    async function handleDeleteRegister(id: string){

        await deleteTransaction(id);
        onRequestClose();
    }
    return(

        <Container>
            <Modal
            animationType='fade'
            visible={isOpen}
            onRequestClose={onRequestClose}        
            transparent={true}
            >
                <Container>
                    <StyledModal>
                        <Title>{title}</Title>
                        <CloseButton onPress={onRequestClose}>
                            <Icon name='x' size={25} color={'#363F5F'}/>
                        </CloseButton>
                        <Details>
                            <Row>
                                <RowTitle>Categoria:</RowTitle>
                                <Category>{category}</Category>
                            </Row>
                            <Row>
                                <RowTitle>Tipo:</RowTitle>
                                <Type type={type}>{type === 'profit' ? 'Entrada' : 'Saída'}</Type>
                            </Row>
                            <Row>
                                <RowTitle>Valor:</RowTitle>
                                <Amount type={type}>{`${type === 'profit' ? '' : '- '}${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(amount)}`}</Amount>
                            </Row>
                            <Row>
                                <RowTitle>Data:</RowTitle>
                                <Date>{date}</Date>
                            </Row>
                        </Details>
                        <AlterFixButton
                            activeOpacity={0.9}
                            underlayColor='#f8f8f8'
                            onPress={() => handleUpdateIsFix(id)}

                            >
                                <Text>{isFix ? "Alterar para despesa 'Não fixa'" : "Alterar para despesa Fixa"}</Text>
                        </AlterFixButton>


                        <DeleteTransactionButton
                            activeOpacity={0.9}
                            underlayColor='#f8f8f8'
                            onPress={() => handleDeleteRegister(id)}
                            style={{
                                borderBottomRightRadius: 8,
                                borderBottomLeftRadius: 8
                            }}
                            >
                                <Text style={{ 
                                    color: '#E62E4D'
                                }}>Deletar registro</Text>
                        </DeleteTransactionButton>
                    </StyledModal>
                </Container>
            </Modal>
        </Container>
    );
}