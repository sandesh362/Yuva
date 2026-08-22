import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GraduationCap, Briefcase, Shield } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { RoleSelectCard, SystemInfoBanner } from '../../components';
import type { UserRole } from '../../types';

export const RoleSelectionScreen = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const navigation = useNavigation<any>();

  const handleContinue = () => {
    if (selectedRole === 'student') {
      navigation.navigate('StudentLogin');
    } else if (selectedRole === 'business') {
      navigation.navigate('BusinessLogin');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <View className="items-center mt-8 mb-6">
          <View className="w-14 h-14 bg-blue-600 rounded-2xl items-center justify-center mb-3">
            {/* Network hub glyph */}
            <View className="items-center justify-center">
              <View className="w-3 h-3 rounded-full bg-white" />
              <View className="flex-row mt-1">
                <View className="w-1.5 h-1.5 rounded-full bg-white/80 mx-0.5" />
                <View className="w-1.5 h-1.5 rounded-full bg-white/80 mx-0.5" />
              </View>
              <View className="flex-row mt-0.5">
                <View className="w-1.5 h-1.5 rounded-full bg-white/60 mx-1" />
                <View className="w-1.5 h-1.5 rounded-full bg-white/60 mx-1" />
              </View>
            </View>
          </View>
          <Text className="text-2xl font-extrabold text-slate-900">YuvaConnect</Text>
          <Text className="text-sm text-slate-500 mt-1">Local skills. Real opportunities.</Text>
        </View>

        {/* Heading */}
        <Text className="text-xl font-bold text-slate-900 text-center mb-6">
          How do you want to use YuvaConnect?
        </Text>

        {/* Role cards */}
        <RoleSelectCard
          title="Student"
          description="Find paid micro-gigs near your college and build a real-world portfolio"
          icon={GraduationCap}
          isSelected={selectedRole === 'student'}
          onPress={() => setSelectedRole('student')}
        />
        <RoleSelectCard
          title="Business"
          description="Find verified, skilled local talent for short-term tasks and micro-projects"
          icon={Briefcase}
          isSelected={selectedRole === 'business'}
          onPress={() => setSelectedRole('business')}
        />

        {/* Trust banner */}
        <View className="mt-4">
          <SystemInfoBanner
            icon="shield"
            text="Every student and business is verified by our team to ensure a safe workspace."
            bgColor="bg-blue-50"
            textColor="text-blue-700"
          />
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View className="px-5 pb-4 pt-2">
        <TouchableOpacity
          className={`rounded-full py-4 items-center ${
            selectedRole ? 'bg-blue-600' : 'bg-blue-300'
          }`}
          onPress={handleContinue}
          disabled={!selectedRole}
          activeOpacity={0.8}
        >
          <Text className="text-base font-bold text-white">Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center mt-4 mb-2">
          <Text className="text-sm text-slate-500">
            Already have an account?{' '}
            <Text className="text-blue-600 font-semibold">Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
