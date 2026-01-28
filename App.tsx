import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black
} from '@expo-google-fonts/roboto';

import LandingScreen from './src/screens/landing/LandingScreen';
import { MasterProfileScreen } from './src/screens/master/MasterProfileScreen';
import { MastersListScreen } from './src/screens/master/MastersListScreen';
import "./global.css";

// Configure linking for web URLs
const linking = {
  prefixes: [],
  config: {
    screens: {
      Home: '',
      MastersList: 'masters',
      MasterProfile: 'master/:id',
    },
  },
};

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <NavigationContainer linking={linking}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: 'white' }
          }}
        >
          <Stack.Screen name="Home">
            {(props) => (
              <LandingScreen
                {...props}
                onMasterPress={() => props.navigation.navigate('MasterProfile', { id: '1' })}
                onMeetAllMasters={() => props.navigation.navigate('MastersList')}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="MastersList">
            {(props) => (
              <MastersListScreen
                {...props}
                onMasterPress={(id) => props.navigation.navigate('MasterProfile', { id })}
                onBack={() => props.navigation.navigate('Home')}
              />
            )}
          </Stack.Screen>
          <Stack.Screen name="MasterProfile">
            {(props) => (
              <MasterProfileScreen
                {...props}
                onBack={() => props.navigation.goBack()}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
