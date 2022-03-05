import React from "react";
import { Text, View, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';


export default function AccountEditor() {
  return (
    <View>
      <Text>Account Type</Text>
      <Picker>
        <Picker.Item label="Checking" value="checking" />
        <Picker.Item label="Savings" value="savings" />          
      </Picker>
      <Text>Name</Text>
      <TextInput></TextInput>
      <Text>Balance</Text>
      <TextInput keyboardType="numeric"></TextInput>
    </View>
  );
}
