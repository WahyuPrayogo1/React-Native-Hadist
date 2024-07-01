// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FriendProvider } from './context/FriendContext';
import FriendListScreen from './screens/FriendListScreen';
import AddFriendScreen from './screens/AddFriendScreen';
import FriendDetailScreen from './screens/FriendDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FriendStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="FriendList" component={FriendListScreen} options={{ title: 'Daftar Teman' }} />
    <Stack.Screen name="FriendDetail" component={FriendDetailScreen} options={{ title: 'Detail Teman' }} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'FriendList') {
            iconName = 'people';
          } else if (route.name === 'AddFriend') {
            iconName = 'person-add';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#6200ee',
        inactiveTintColor: 'gray',
        showLabel: false,
      }}
    >
      <Tab.Screen name="FriendList" component={FriendStack} options={{ title: 'Teman' }} />
      <Tab.Screen name="AddFriend" component={AddFriendScreen} options={{ title: 'Tambah Teman' }} />
    </Tab.Navigator>
  </NavigationContainer>
);

const App = () => {
  return (
    <FriendProvider>
      <Navigation />
    </FriendProvider>
  );
};

export default App;
