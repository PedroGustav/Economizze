import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #00000066;
    
`;

export const StyledModal = styled.View`
    width: ${RFValue(250)}px;
    margin: 20px;
    border-radius: 8px;
    padding: 24px 40px 0px 40px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.shape};
    position: relative;
`;

export const Title = styled.Text`
    font-family: 'Poppins-Bold';
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(22)}px;
    margin-bottom: 20px;
    margin-top: 10px;
    text-align: center;
`;


export const Details = styled.View`
    width: 100%;
    margin-bottom: 24px;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    
    justify-content: space-between;
`;

export const RowTitle = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: ${RFValue(14)}px;
    color: ${({theme}) => theme.colors.title};
`;

export const Category = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: 'Poppins-Regular';
    font-size: ${RFValue(12)}px;
    width: 115px;
    text-align: right;
`;

interface TypeProps{
    type: 'profit' | 'withdraw';
}
export const Type = styled.Text<TypeProps>`

    ${({type}) => type === 'profit' ? 
        css`
            color: ${({theme}) => theme.colors.income};
        `
    :
        css`
            color: ${({theme}) => theme.colors.outcome};
        `
    };
    font-family: 'Poppins-Regular';
    font-size: ${RFValue(12)}px;
`;

export const Amount = styled.Text<TypeProps>`
    ${({type}) => type === 'profit' ? 
        css`
            color: ${({theme}) => theme.colors.income};
        `
    :
        css`
            color: ${({theme}) => theme.colors.outcome};
        `
    };
    font-family: 'Poppins-Regular';
    font-size: ${RFValue(12)}px;
`;

export const AlterFixButton = styled.TouchableHighlight`
    width: 128%;
    padding: 16px;
    border-top-width: 0.5px;
    border-top-color: ${({theme}) => theme.colors.text} ;
    align-items: center;
`;
export const DeleteTransactionButton = styled.TouchableHighlight`
    width: 128%;
    padding: 16px;
    border-top-width: 0.5px;
    border-top-color: ${({theme}) => theme.colors.text};
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const Text = styled.Text`
    font-family: 'Poppins-SemiBold';
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(12)}px;
`;

export const CloseButton = styled.TouchableOpacity`
position: absolute;
top: 16px;
right: 16px;

`;

export const Date = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: 'Poppins-Regular';
    font-size: ${RFValue(12)}px;
`;