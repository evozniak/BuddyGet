import React from 'react';
import {Text, ToastAndroid, View, Pressable} from 'react-native';
import { Divider, Button } from 'react-native-elements';
import Toast from 'react-native-root-toast';
import TransactionLabel from '../TransactionLabel/TransactionLabel';
import TransactionValue from '../TransactionValue/TransactionValue';
import { FlexView, SaveButton } from './Transaction.styled';

function onPayee(){
    Toast.show("Payee..");
}

function Save(){
    Toast.show("Salvei a parada...");
}

export default function AddTransaction() {
    return (
        <FlexView>
            <View>
                <TransactionValue/>
                <Pressable onPress={onPayee}>
                    <TransactionLabel labelName="Payee" value="Restaurante Armazém"/>
                </Pressable>
                <Divider/>
                <Pressable onPress={onPayee}>
                    <TransactionLabel labelName="Category" value="Alimentação fora"/>                
                </Pressable>     
                <Divider/>
                <Pressable onPress={onPayee}>
                    <TransactionLabel labelName="Account" value="NuBank"/>                        
                </Pressable>     
                <Divider/>
                <Pressable onPress={onPayee}>
                    <TransactionLabel labelName="Date" value="13/02/2022"/>                    
                </Pressable>    
            </View>
            <SaveButton onPress={Save} title={'Save transaction'}/>
        </FlexView>
    );
}