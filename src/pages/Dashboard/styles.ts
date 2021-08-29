import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
    align-items: center;
    
`;

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: 30px;
    font-family: "Poppins-Regular";
    
    
`