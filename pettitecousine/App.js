import * as React from 'react';
import { Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MainScreen from './screens/main_screen';

const SegundaScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5F8670' }}></View>
);

const TerceraScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Third!</Text>
  </View>
);

const FourthScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Fourth!</Text>
  </View>
);

const LoginScreen = ({ onLoginSuccess }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (username === 'diego' && password === '123') {
      onLoginSuccess();
    } else {
      alert('Error al ingresar. Vuelve a Intentarlo');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#820300' }}>
      <Text style={{ fontSize: 28, fontWeight: 'light', color: '#FF9800', marginBottom: 40 }}>Mon Pettite Cousine</Text>
      <TextInput
        placeholder="Correo Electronico"
        value={username}
        onChangeText={setUsername}
        style={{ height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 20, width: '80%', padding: 10, borderRadius: 15, borderWidth:2, color: 'white' }}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 20, width: '80%', padding: 10, borderRadius: 15, borderWidth:2, color: 'white' }}
      />
      <View style={{ width: '80%', marginBottom: 20 }}>
        <Button title="Login" color="#FF9800" onPress={handleLogin} />
      </View>
    </View>
  );
};

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 70, justifyContent: 'center', backgroundColor: '#B80000' }}>
        <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'light', color: 'white', fontFamily: "" }}>Mon Pettite Cousine</Text>
      </View>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'First') {
                iconName = 'public';
              } else if (route.name === 'Second') {
                iconName = 'fastfood';
              } else if (route.name === 'Third') {
                iconName = 'cake';
              } else if (route.name === 'Fourth') {
                iconName = 'favorite';
              }
              return <Icon name={iconName} size={25} color={'#FF9800'} />;
            },
            tabBarStyle: { backgroundColor: '#820300' },
          })}
          tabBarOptions={{
            showIcon: true,
            showLabel: false,
          }}
        >
          <Tab.Screen name="First" component={MainScreen} />
          <Tab.Screen name="Second" component={SegundaScreen} />
          <Tab.Screen name="Third" component={TerceraScreen} />
          <Tab.Screen name="Fourth" component={FourthScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
