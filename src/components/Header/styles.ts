import styled from 'styled-components/native';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize';
export const Container = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    height: ${RFPercentage(37.5)}px;
    padding-top: 32px;
    padding-bottom: 24px;
    padding-right: 24px;
    padding-left: 24px;

`;

export const TopSection = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
`;

export const GreetingMessage = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: 'Poppins-SemiBold';
    color: ${({theme}) => theme.colors.shape};
`;

export const NewTransactionButton = styled.TouchableOpacity`
    
    background-color: ${({theme}) => theme.colors.detail_Primary};
    padding: 20px;
    align-items: center;
    border-radius: 8px;
    
`;

export const Content = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(10)}px;
    font-family: 'Poppins-SemiBold';
`; 

export const InfoCards = styled.View`
    width: 100%;
`;

