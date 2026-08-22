import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Compass, Briefcase, MessageSquare, User } from 'lucide-react-native';
import type { StudentTabParamList, StudentStackParamList } from '../types';

// Tab screens
import { StudentHomeScreen } from '../screens/student/StudentHomeScreen';
import { DiscoverGigsScreen } from '../screens/student/DiscoverGigsScreen';
import { MyGigsScreen, MessagesListScreen, StudentProfileScreen, GigDetailsScreen, ApplyGigScreen, WorkTrackerScreen, SubmitWorkScreen, RevisionRequestedScreen, EarningsScreen, NotificationsScreen, SavedGigsScreen, ReviewsScreen, ChatThreadScreen, RateExperienceScreen, GlobalSearchScreen } from '../screens/DemoScreens';

// Stack screens
import { GigFiltersScreen } from '../screens/student/GigFiltersScreen';

const Tab = createBottomTabNavigator<StudentTabParamList>();
const Stack = createNativeStackNavigator<StudentStackParamList>();

const StudentTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#94A3B8',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F1F5F9',
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: 8,
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
          marginTop: 2,
        },
      }}
    >
      <Tab.Screen
        name="StudentHome"
        component={StudentHomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="DiscoverGigs"
        component={DiscoverGigsScreen}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, size }) => <Compass size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="MyGigs"
        component={MyGigsScreen}
        options={{
          tabBarLabel: 'My Gigs',
          tabBarIcon: ({ color, size }) => <Briefcase size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="MessagesList"
        component={MessagesListScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => <MessageSquare size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="StudentProfile"
        component={StudentProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export const StudentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#F8FAFC' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="StudentHome" component={StudentTabNavigator} />
      <Stack.Screen name="GigFilters" component={GigFiltersScreen} options={{ presentation: 'modal' }} />
      <Stack.Screen name="GigDetails" component={GigDetailsScreen} />
      <Stack.Screen name="ApplyGig" component={ApplyGigScreen} />
      <Stack.Screen name="WorkTracker" component={WorkTrackerScreen} />
      <Stack.Screen name="SubmitWork" component={SubmitWorkScreen} />
      <Stack.Screen name="RevisionRequested" component={RevisionRequestedScreen} />
      <Stack.Screen name="Earnings" component={EarningsScreen} />
      <Stack.Screen name="StudentNotifications" component={NotificationsScreen} />
      <Stack.Screen name="SavedGigs" component={SavedGigsScreen} />
      <Stack.Screen name="StudentReviews" component={ReviewsScreen} />
      <Stack.Screen name="ChatThread" component={ChatThreadScreen} />
      <Stack.Screen name="RateExperience" component={RateExperienceScreen} options={{ presentation: 'modal' }} />
      <Stack.Screen name="GlobalSearch" component={GlobalSearchScreen} />
    </Stack.Navigator>
  );
};
