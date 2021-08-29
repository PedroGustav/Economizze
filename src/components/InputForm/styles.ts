import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Error = styled.Text`
    color: ${({theme}) => theme.colors.outcome};
    font-family: 'RedHatText-Regular';
    margin-top: -20px;
    font-size: ${RFValue(10)}px;
    margin: 2px 0;
`;