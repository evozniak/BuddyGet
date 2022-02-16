import styled from 'styled-components/native';
import { Button } from 'react-native-elements';

export const FlexViewVertical = styled.View`
    flex-direction: column ;
    justify-content: flex-start;
    height: 100%;
`;

export const FlexViewHorizontal = styled.View`
    flex-direction: row;
    justify-content: flex-start;
`;

export const HeaderText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    padding-left: 20px;
    padding-top: 10px;
    border-color: black;    
    border-bottom-width: 1px;
`;

const ItemText = styled.Text`
    
    padding: 15px;
    font-size: 16px;
    color: dimgray;
    border-color: darkgray;
    border-top-width: .5px;
`;

export const LeftText = styled(ItemText)`
font-size: 15px;
`;

export const RightText = styled(ItemText)`
  
  text-align:right
  flex-grow:1;
  justify-content: space-between;
  padding: 15px;
`;

export const AddAccount = styled(Button).attrs({
    containerStyle: {
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
        margin: 15,
        marginTop: 'auto' }
    })``;