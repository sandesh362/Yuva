import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../types';

import { RoleSelectionScreen } from '../screens/auth/RoleSelectionScreen';
import { StudentLoginScreen } from '../screens/auth/StudentLoginScreen';
import { BusinessLoginScreen } from '../screens/auth/BusinessLoginScreen';
import { StudentSkillsScreen } from '../screens/auth/StudentSkillsScreen';
import { StudentLocationScreen } from '../screens/auth/StudentLocationScreen';
import { BusinessVerificationScreen } from '../screens/auth/BusinessVerificationScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#F8FAFC' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="StudentLogin" component={StudentLoginScreen} />
      <Stack.Screen name="BusinessLogin" component={BusinessLoginScreen} />
      <Stack.Screen name="StudentSkills" component={StudentSkillsScreen} />
      <Stack.Screen name="StudentLocation" component={StudentLocationScreen} />
      <Stack.Screen name="BusinessVerification" component={BusinessVerificationScreen} />
    </Stack.Navigator>
  );
};
