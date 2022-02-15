import { Button } from 'react-native-elements';
import styled from 'styled-components/native';

export const FlexView = styled.View`
    flex-direction: column ;
    justify-content: flex-start;
    height: 100%;
`;

export const SaveButton = styled(Button).attrs({
    containerStyle: {
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        margin: 15,
        marginTop: 'auto' }
    })``;
