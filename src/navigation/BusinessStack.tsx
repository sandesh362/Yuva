import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LayoutGrid, Briefcase, PlusCircle, MessageSquare, User } from 'lucide-react-native';
import type { BusinessTabParamList, BusinessStackParamList } from '../types';

// Tab screens
import { BusinessDashboardScreen, ManageGigsScreen, PostGigScreen, MessagesListScreen, BusinessNotificationsScreen, SavedTalentScreen, ReportSupportScreen, ManageApplicantsScreen, CandidateProfileScreen, CandidateComparisonScreen, ConfirmSelectionScreen, BusinessWorkTrackerScreen, PaymentDetailsScreen, ChatThreadScreen } from '../screens/DemoScreens';
import { BusinessProfileScreen } from '../screens/DemoScreens';

// Stack screens

const Tab = createBottomTabNavigator<BusinessTabParamList>();
const Stack = createNativeStackNavigator<BusinessStackParamList>();

const BusinessTabNavigator = () => {
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
        name="BusinessHome"
        component={BusinessDashboardScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <LayoutGrid size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="ManageGigs"
        component={ManageGigsScreen}
        options={{
          tabBarLabel: 'Gigs',
          tabBarIcon: ({ color, size }) => <Briefcase size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="PostGig"
        component={PostGigScreen}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({ color, size, focused }) => (
            <View
              className={`w-12 h-12 rounded-full items-center justify-center -mt-4 ${
                focused ? 'bg-blue-600' : 'bg-blue-500'
              }`}
              style={{
                shadowColor: '#2563EB',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
              }}
            >
              <PlusCircle size={24} color="#FFFFFF" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BusinessMessages"
        component={MessagesListScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({ color, size }) => <MessageSquare size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="BusinessProfile"
        component={BusinessProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export const BusinessStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#F8FAFC' },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="BusinessHome" component={BusinessTabNavigator} />
      <Stack.Screen name="ManageApplicants" component={ManageApplicantsScreen} />
      <Stack.Screen name="CandidateProfile" component={CandidateProfileScreen} />
      <Stack.Screen name="CandidateComparison" component={CandidateComparisonScreen} />
      <Stack.Screen name="ConfirmSelection" component={ConfirmSelectionScreen} />
      <Stack.Screen name="BusinessWorkTracker" component={BusinessWorkTrackerScreen} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
      <Stack.Screen name="BusinessNotifications" component={BusinessNotificationsScreen} />
      <Stack.Screen name="SavedTalent" component={SavedTalentScreen} />
      <Stack.Screen name="ReportSupport" component={ReportSupportScreen} />
      <Stack.Screen name="BusinessChatThread" component={ChatThreadScreen} />
    </Stack.Navigator>
  );
};
