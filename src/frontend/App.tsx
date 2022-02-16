import { StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld/HelloWorld';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddTransaction from './components/Transaction/Transaction';
import { RootSiblingParent } from 'react-native-root-siblings';
import Settings from './components/Settings/Settings';
import React from 'react';
import { SimpleLineIcons, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons'; 
import Accounts from './components/Accounts/Accounts';
import { store } from './redux/store'
import { Provider } from 'react-redux'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RootSiblingParent>   
      <Provider store={store}>        
        <NavigationContainer>    
          <Tab.Navigator>
            <Tab.Screen name="Budget" component={HelloWorld} 
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <SimpleLineIcons name="envelope" color={color} size={size} />
                  ),
                }}
            />
            <Tab.Screen name="Account" component={Accounts} 
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="bank" color={color} size={size} />
                  ),
                }}          
            />
            <Tab.Screen name="Transaction" component={AddTransaction} 
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Feather name="plus-circle" color={color} size={size} />
                  ),
                }}           
            />
            <Tab.Screen name="Report" component={HelloWorld} 
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="bar-chart" color={color} size={size} />
                  ),
                }}          
            />
            <Tab.Screen name="Settings" component={Settings} 
                options={{
                  tabBarIcon: ({ color, size }) => (    
                    <Feather name="settings" color={color} size={size} />
                  ),
                }}          
            />        
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </RootSiblingParent> 
  );
}

