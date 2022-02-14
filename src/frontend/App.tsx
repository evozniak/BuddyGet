import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTransaction from './components/Transaction/Transaction';
import { RootSiblingParent } from 'react-native-root-siblings';
import Settings from './components/Settings/Settings';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RootSiblingParent>     
      <NavigationContainer>    
        <Tab.Navigator>
          <Tab.Screen name="Budget" component={HelloWorld} />
          <Tab.Screen name="Account" component={HelloWorld} />
          <Tab.Screen name="Transactions" component={AddTransaction} />
          <Tab.Screen name="Report" component={HelloWorld} />
          <Tab.Screen name="Settings" component={Settings} />        
        </Tab.Navigator>
      </NavigationContainer>
    </RootSiblingParent> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
