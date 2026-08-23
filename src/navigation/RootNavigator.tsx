import React, { createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList, UserRole } from '../types';
import type { ApiUser } from '../api/auth';

import { AuthStack } from './AuthStack';
import { StudentStack } from './StudentStack';
import { BusinessStack } from './BusinessStack';
import { DemoProvider, useDemo } from '../state/DemoContext';

// Simple auth context for role switching (no real auth)
interface AuthContextType {
  role: UserRole | null;
  setRole: (role: UserRole | null) => void;
  completeLogin: (user: ApiUser) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  role: null,
  setRole: () => {},
  completeLogin: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return <DemoProvider><NavigatorContent /></DemoProvider>;
};

const NavigatorContent = () => {
  const { role, setRole, completeLogin, logout } = useDemo();

  return (
    <AuthContext.Provider value={{ role, setRole, completeLogin, logout }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
          {role === null ? (
            <Stack.Screen name="Auth" component={AuthStack} />
          ) : role === 'student' ? (
            <Stack.Screen name="StudentApp" component={StudentStack} />
          ) : (
            <Stack.Screen name="BusinessApp" component={BusinessStack} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
