import React, { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Briefcase, Mail, Lock, Check, Phone } from 'lucide-react-native';
import { FormField } from '../../components';
import { useAuth } from '../../navigation/RootNavigator';
import { login } from '../../api/auth';

export const BusinessLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'login' | 'signup' | 'reports'>('login');
  const { completeLogin } = useAuth();
  const navigation = require('@react-navigation/native').useNavigation<any>();

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      if (user.role !== 'business') throw new Error('Please use the student sign-in for this account.');
      await completeLogin(user);
    } catch (error) { Alert.alert('Login failed', error instanceof Error ? error.message : 'Please try again.'); }
  };

  const tabs = [
    { key: 'login', label: 'Login' },
    { key: 'signup', label: 'Create Account' },
    { key: 'reports', label: 'Reports' },
  ] as const;

  const bulletPoints = [
    'All students are verified with college IDs',
    'Secure payments held until work approved',
    'Get applicants within minutes of posting',
  ];

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="items-center mt-8 mb-6">
          <View className="w-14 h-14 bg-blue-50 rounded-2xl items-center justify-center mb-3">
            <Briefcase size={28} color="#2563EB" />
          </View>
          <Text className="text-2xl font-extrabold text-slate-900">YuvaConnect Business</Text>
          <Text className="text-sm text-slate-500 mt-1 text-center">
            Find verified student talent for your local business
          </Text>
        </View>

        {/* Segmented control */}
        <View className="flex-row bg-slate-100 rounded-xl p-1 mb-6">
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab.key}
              className={`flex-1 py-2.5 rounded-lg items-center ${
                activeTab === tab.key ? 'bg-white shadow-sm' : ''
              }`}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text
                className={`text-xs font-semibold ${
                  activeTab === tab.key ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Form */}
        <FormField
          label=""
          placeholder="Business Email"
          value={email}
          onChangeText={setEmail}
          icon={Mail}
          keyboardType="email-address"
        />
        <FormField
          label=""
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          icon={Lock}
          type="password"
        />

        <TouchableOpacity className="self-end mb-4">
          <Text className="text-sm text-blue-600 font-medium">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-600 rounded-full py-3.5 items-center mb-4"
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text className="text-base font-bold text-white">Login to Dashboard</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center my-3">
          <View className="flex-1 h-px bg-slate-200" />
          <Text className="mx-4 text-xs text-slate-400 font-medium">or continue with</Text>
          <View className="flex-1 h-px bg-slate-200" />
        </View>

        {/* Social buttons */}
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity className="flex-1 border border-slate-200 rounded-xl py-3 items-center flex-row justify-center">
            <Text className="text-lg font-bold mr-2">G</Text>
            <Text className="text-sm font-semibold text-slate-700">Google</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 border border-slate-200 rounded-xl py-3 items-center flex-row justify-center">
            <Phone size={16} color="#64748B" />
            <Text className="text-sm font-semibold text-slate-700 ml-2">Phone</Text>
          </TouchableOpacity>
        </View>

        {/* Why hire card */}
        <View className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-6">
          <Text className="text-sm font-bold text-slate-900 mb-3">
            Why hire on YuvaConnect?
          </Text>
          {bulletPoints.map((point, i) => (
            <View key={i} className="flex-row items-start mb-2">
              <View className="w-5 h-5 rounded-full bg-emerald-50 items-center justify-center mt-0.5">
                <Check size={12} color="#10B981" />
              </View>
              <Text className="text-xs text-slate-600 ml-2 flex-1 leading-5">{point}</Text>
            </View>
          ))}
        </View>

        {/* Switch link */}
        <TouchableOpacity
          className="items-center mb-8"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-sm text-slate-500">
            Are you a student?{' '}
            <Text className="text-blue-600 font-semibold">Switch to Student App</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
