import styled from 'styled-components/native';

export const FlexView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
`;

export const RightText = styled.Text`
    font-size: 30;
    color: red;
    font-weight: 900;
    text-align:right
    flex-grow:1;
    justify-content: space-between;
    padding: 15px;  
`;

export const Switch = styled.Switch`
    padding-left: 10px;
`;
