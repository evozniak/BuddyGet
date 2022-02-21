import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
//GetRandomValues is not supported need to import react-native-get-random-values first then uuid
//See: https://github.com/uuidjs/uuid#getrandomvalues-not-supported

export default function uuid(){
    return uuidv4();
}