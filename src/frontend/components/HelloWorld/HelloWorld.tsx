import {Text, Button, ToastAndroid, View} from 'react-native';
import Toast from 'react-native-root-toast';

function getMessage(): string{
    return "Olá fran";
}

function showToast(){
    Toast.show(getMessage());
}

export default function HelloWorld() {
    return (
        <View>
            <Text>{getMessage()}</Text>
            <Button onPress={showToast} title="Clique aqui."/>
            <Button onPress={showToast} title="Botão 2"/>
        </View>
    );
}