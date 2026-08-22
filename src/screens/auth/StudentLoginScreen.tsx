import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Lock, Shield } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FormField } from '../../components';
import { useAuth } from '../../navigation/RootNavigator';

export const StudentLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setRole } = useAuth();
  const navigation = require('@react-navigation/native').useNavigation<any>();

  const handleLogin = () => {
    // TODO: connect to backend
    setRole('student');
  };

  const handleSignup = () => {
    navigation.navigate('StudentSkills');
  };

  return (
    <View className="flex-1 bg-slate-50">
      {/* Gradient header */}
      <LinearGradient
        colors={['#2563EB', '#0D9488']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="pt-16 pb-24 px-6 items-center"
      >
        <View className="w-14 h-14 bg-white/20 rounded-2xl items-center justify-center mb-3">
          <View className="items-center justify-center">
            <View className="w-3 h-3 rounded-full bg-white" />
            <View className="flex-row mt-1">
              <View className="w-1.5 h-1.5 rounded-full bg-white/80 mx-0.5" />
              <View className="w-1.5 h-1.5 rounded-full bg-white/80 mx-0.5" />
            </View>
          </View>
        </View>
        <Text className="text-2xl font-extrabold text-white">YuvaConnect</Text>
        <Text className="text-sm text-white/80 mt-1">Local skills. Real opportunities.</Text>
      </LinearGradient>

      {/* Login card overlapping gradient */}
      <ScrollView
        className="flex-1 -mt-16 px-5"
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <Text className="text-xl font-bold text-slate-900 mb-1">Welcome Back</Text>
          <Text className="text-sm text-slate-500 mb-6">Login to your verified account</Text>

          <FormField
            label=""
            placeholder="Email or Phone"
            value={email}
            onChangeText={setEmail}
            icon={User}
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
            <Text className="text-base font-bold text-white">Login to YuvaConnect</Text>
          </TouchableOpacity>

          {/* Divider */}
          <View className="flex-row items-center my-3">
            <View className="flex-1 h-px bg-slate-200" />
            <Text className="mx-4 text-xs text-slate-400 font-medium">OR</Text>
            <View className="flex-1 h-px bg-slate-200" />
          </View>

          {/* Google */}
          <TouchableOpacity className="border border-slate-200 rounded-full py-3.5 items-center flex-row justify-center">
            <Text className="text-lg font-bold mr-2">G</Text>
            <Text className="text-sm font-semibold text-slate-700">Continue with Google</Text>
          </TouchableOpacity>
        </View>

        {/* Sign up link */}
        <TouchableOpacity className="items-center mt-5" onPress={handleSignup}>
          <Text className="text-sm text-slate-500">
            Don't have an account?{' '}
            <Text className="text-blue-600 font-semibold">Create Account</Text>
          </Text>
        </TouchableOpacity>

        {/* Security banner */}
        <View className="bg-emerald-50 rounded-full py-2.5 px-4 flex-row items-center justify-center mt-4 mb-8">
          <Shield size={14} color="#10B981" />
          <Text className="text-xs text-emerald-700 ml-2 font-medium">
            Your data is protected with bank-grade security
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};
