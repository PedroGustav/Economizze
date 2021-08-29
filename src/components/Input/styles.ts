import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: ${RFValue(40)}px;
    border-radius: 8px;
    border-width: 0.5px;
    border-color: ${({theme}) => theme.colors.title};
    position: relative;
    padding: 8px;
`;

export const InputArea = styled.TextInput`
    width: ${RFPercentage(100)}px;
    font-size: 20px;
    font-family: 'RedHatText-Regular';
    color: ${({theme}) => theme.colors.text};

`;

export const Placeholder = styled.Text`
    font-family: 'Poppins-SemiBold';
    font-size: ${RFValue(10)}px;
    color: ${({theme}) => theme.colors.title};
    position: absolute;
    background-color: ${({theme}) => theme.colors.shape};
    top: -14px;
    left: 10px;
    padding: 4px;
`;