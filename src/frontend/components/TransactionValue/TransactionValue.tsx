import React, { useState } from "react";
import { FlexView, RightText, Switch } from "./TransactionValue.styled";

export default function TransactionValue() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);    
    return (
        <FlexView>
            <Switch
            trackColor={{ false: "#777575", true: "#177a2d" }}
            thumbColor={isEnabled ? "#777575" : "#177a2d"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
            <RightText>
                -R$55,00
            </RightText>
        </FlexView>
    );
}