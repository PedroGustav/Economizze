import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #00000066;
    
`;

export const StyledModal = styled.View`
    width: ${RFPercentage(40)}px;
    margin: 20px;
    border-radius: 8px;
    padding: 40px 35px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.shape};
    position: relative;
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
    font-family: 'Poppins-Bold';
    color: ${({theme}) => theme.colors.title};
`;

export const ButtonsView = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px 0 0 0;
`;

interface ButtonProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#09B678',
    red: '#E62E4D'
}

const shadowColors = {
    green: 'rgba(19, 189, 128, 0.84)',
    red: 'rgba(244, 108, 131, 0.9)',
}

export const Button = styled.TouchableHighlight<ButtonProps>`
    padding: 16px 32px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;

    ${(props) => props.isActive ? 
        css`
            background-color: ${colors[props.activeColor]};
            shadow-color: ${shadowColors[props.activeColor]};
        `
    :
        css`
            background-color: ${({theme}) => theme.colors.shape};
            shadow-color: #00000040;
        `
    }

`;
interface ButtonContentProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

export const ButtonContent = styled.Text<ButtonContentProps>`
    font-family: 'Poppins-Bold';
    font-size: 20px;
    
    ${(props) => props.isActive ?
        css`
            color: ${({theme}) => theme.colors.shape};    
        `
    :
        css`
            color: ${colors[props.activeColor]};
        `    
    }
`;


export const LastSection = styled.View`
    margin-top: 16px;
    margin-bottom: 32px;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const CheckboxFix = styled.View`
    align-items: center;
    flex-direction: row;
    flex: 1;
    margin-left: 40px;
`;
export const Checkbox = styled.Pressable`
    width: 25px;
    height: 25px;
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.title};
    border-radius: ${RFPercentage(50)}px;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
`;

interface ContentCheckboxProps{

    isFix: boolean;
}
export const ContentCheckbox = styled.View<ContentCheckboxProps>`
    width: 85%;
    height: 85%;

    ${({isFix}) => isFix ? 
        css`
            background-color: ${({theme}) => theme.colors.sub_title};
        `
    :
        css`
            background-color: transparent;
        `
}
    
    border-radius: ${RFPercentage(50)}px;

`;
export const CheckboxTitle = styled.Text`
    font-family: 'Poppins-Bold';
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(14)}px;

`;

export const SubmitButton = styled.TouchableHighlight`
    border-top-width: 1px;
    border-top-color: #8B8B8B55;
    width: 121%;
    position: absolute;
    bottom: 0;
    padding: 16px;
    align-items: center;
`;


export const Text = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: 'Poppins-Regular';
    color:  ${({theme}) => theme.colors.title};
`;

export const CloseButton = styled.TouchableOpacity`
position: absolute;
top: 16px;
right: 16px;

`;