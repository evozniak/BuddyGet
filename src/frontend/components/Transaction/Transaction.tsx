import * as React from 'react';
import {Text, Button, ToastAndroid, View, Pressable} from 'react-native';
import { Divider } from 'react-native-elements';
import Toast from 'react-native-root-toast';

function onPayee(){
    Toast.show("Payee..");
}

export default function AddTransaction() {
    return (
        <View>
            <View>
                <Text>R$ 55,00</Text>
            </View>
            <Pressable onPress={onPayee}>
                <View style={{ flexDirection:"row", justifyContent:'space-evenly'}}>
                    <Text>Payee</Text>
                    <Text>Restaurante Armazém</Text>
                </View>
            </Pressable>
            <Divider/>
            <Pressable onPress={onPayee}>
                <View style={{ flexDirection:"row", justifyContent:'space-evenly'}}>
                    <Text>Category</Text>
                    <Text>Alimentação fora</Text>
                </View>
            </Pressable>     
            <Divider/>
            <Pressable onPress={onPayee}>
                <View style={{ flexDirection:"row", justifyContent:'space-evenly'}}>
                    <Text>Account</Text>
                    <Text>NuBank</Text>
                </View>
            </Pressable>     
            <Divider/>
            <Pressable onPress={onPayee}>
                <View style={{ flexDirection:"row", justifyContent:'space-evenly'}}>
                    <Text>Date</Text>
                    <Text>13/02/2022</Text>
                </View>
            </Pressable> 
        </View>
    );
}