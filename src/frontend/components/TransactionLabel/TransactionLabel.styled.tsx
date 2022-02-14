import styled from 'styled-components/native';

export const FlexView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
`;

export const LeftText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  padding: 15px;
`;

export const RightText = styled.Text`
  font-size: 18px;
  color: gray;
  font-weight: 400;
  text-align:right
  flex-grow:1;
  justify-content: space-between;
  padding: 15px;
`;
