import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface CardProps{
    type: 'income' | 'outcome' | 'withdraw' | 'profit';
}



export const Container = styled.View<CardProps>`
    width: 100%;
    padding: 12px 12px 12px 12px ;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 8px;
    align-items: center;

    ${({ type }) => 
        type === 'profit' ?
            css`
                background-color: ${({theme}) => theme.colors.income};
                shadow-color: ${({theme}) => theme.colors.income_light};
                shadow-offset: 10px 10px;
                elevation: 10;
            `
        : type === 'withdraw' ?
            css`
                background-color: ${({theme}) => theme.colors.outcome};
                shadow-color: ${({theme}) => theme.colors.outcome_light};
                shadow-offset: 10px 10px;
                elevation: 10;
            `   
        : 
            css`
                background-color: ${({theme}) => theme.colors.shape};
                shadow-color: black;
                shadow-offset: 10px 10px;
                elevation: 10;
            `
    }   
`;

export const TitleContent = styled.View`
    flex-direction: row;
    align-items: center;
    height: 100%;
`;

export const Title = styled.Text<CardProps>`
    font-family: 'Poppins-SemiBold';
    font-size: ${RFPercentage(2.4)}px;
    padding-top: 5px;
    margin-left: 8px;
    height: 100%;
    align-self: center;
    ${({ type }) =>  
        type === 'income' ? 
            css`
                color: ${({theme}) => theme.colors.income};
            ` 
        : type === 'outcome' ?
            css`
                color: ${({theme}) => theme.colors.outcome};
            `
        : 
            css`
                color: ${({theme}) => theme.colors.shape};
            `    
    }
`;

export const Amount = styled.Text<CardProps>`
    font-family: 'Poppins-Medium';
    font-size: ${RFPercentage(2)}px;
    padding-top: 5px;

    ${({ type }) =>  
        type === 'income' ? 
            css`
                color: ${({theme}) => theme.colors.income};
            ` 
        : type === 'outcome' ?
            css`
                color: ${({theme}) => theme.colors.outcome};
            `
        : 
            css`
                color: ${({theme}) => theme.colors.shape};
            `    
    }
`;
