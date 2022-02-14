import React from "react";
import { LeftText, RightText, FlexView } from "./TransactionLabel.styled";

interface TransactionLabelProps {
    labelName: string;
    value: string;
}
  

export default function TransactionLabel(props: TransactionLabelProps){
    return (
        <FlexView>
            <LeftText>{props.labelName}</LeftText>
            <RightText>{props.value}</RightText>
        </FlexView>
    );
}