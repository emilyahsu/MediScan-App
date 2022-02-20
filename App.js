import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import PhotosScreen from './screens/PhotosScreen';
import CalendarScreen from './screens/CalendarScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Photos"
          component={PhotosScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{
            animation: 'fade',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
