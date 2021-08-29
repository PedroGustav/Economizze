import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    margin-top: 40px;
    margin-bottom: 20px;
    height: ${RFPercentage(58)}px;
    width: ${RFPercentage(45)}px;
`;
export const Table = styled.View`
    flex: 1;
`;
export const TableHeader = styled.View`
    padding: 8px;
    border-bottom-width: 0.5px;
    border-bottom-color: #8B8B8B;
    opacity: 4.2;
`;
export const Title = styled.Text`
    font-family: 'Poppins-Bold';
    font-size: ${RFPercentage(2.4)}px;
    color: ${({theme}) => theme.colors.title};
`;

export const TableBody = styled.ScrollView`

`;

export const TableRow = styled.TouchableHighlight`
    width: 100%;
`;

export const RowContent = styled.View`
    background-color: #F6F6F6;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 24px 12px 24px 12px;
`;

export const TransactionTitle = styled.Text`
    font-family: 'Poppins-Regular';
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`;


interface TransactionAmountProps{
    
    type: 'profit' | 'withdraw';

}

export const TransactionAmount = styled.Text<TransactionAmountProps>`
    font-family: 'Poppins-Regular';
    font-size: ${RFValue(14)}px;
    ${({ type }) => type === 'profit' ? 
        css`
            color: ${({ theme }) => theme.colors.income};
        `
    :
        css`
            color: ${({ theme }) => theme.colors.outcome};
        `
    }

`;

export const LoadContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
