import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MapPin, ChevronRight, Store, Laptop, Info } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../navigation/RootNavigator';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const StudentLocationScreen = () => {
  const [workRadius, setWorkRadius] = useState(15);
  const [workPref, setWorkPref] = useState<'on-site' | 'remote'>('on-site');
  const [selectedDays, setSelectedDays] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri']);
  const navigation = useNavigation<any>();
  const { setRole } = useAuth();

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleContinue = () => {
    // TODO: connect to backend — complete onboarding
    setRole('student');
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Progress bar */}
      <View className="flex-row px-5 pt-4 gap-1.5">
        {[1, 2, 3, 4, 5].map((step) => (
          <View
            key={step}
            className={`flex-1 h-1 rounded-full ${
              step <= 4 ? 'bg-blue-600' : 'bg-slate-200'
            }`}
          />
        ))}
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-slate-900 mt-6">Location & Availability</Text>
        <Text className="text-sm text-slate-500 mt-1 mb-5">Step 4 of 5</Text>

        {/* Work Location */}
        <Text className="text-sm font-bold text-slate-700 mb-2">Work Location</Text>
        <Text className="text-xs text-slate-500 mb-3">Where do you want to find gigs?</Text>

        <TouchableOpacity className="bg-white rounded-xl p-4 flex-row items-center justify-between border border-slate-100 mb-4">
          <View className="flex-row items-center">
            <MapPin size={18} color="#2563EB" />
            <View className="ml-3">
              <Text className="text-xs text-slate-400">Current Location</Text>
              <Text className="text-sm font-semibold text-slate-900">Powai, Mumbai, Maharashtra</Text>
            </View>
          </View>
          <ChevronRight size={18} color="#94A3B8" />
        </TouchableOpacity>

        {/* Map placeholder */}
        <View className="bg-blue-50 rounded-xl h-40 items-center justify-center mb-4 overflow-hidden">
          <View className="w-32 h-32 rounded-full border-2 border-blue-300 border-dashed items-center justify-center">
            <View className="w-20 h-20 rounded-full border-2 border-blue-200 border-dashed items-center justify-center">
              <View className="w-4 h-4 rounded-full bg-blue-600" />
            </View>
          </View>
          <Text className="text-xs text-blue-600 font-medium mt-2">Map Preview</Text>
        </View>

        {/* Radius slider area */}
        <View className="flex-row items-center justify-between mb-1">
          <Text className="text-sm font-bold text-slate-700">Work Radius</Text>
          <Text className="text-sm font-bold text-blue-600">{workRadius} km</Text>
        </View>
        <View className="bg-slate-200 rounded-full h-1.5 mb-2">
          <View className="bg-blue-600 rounded-full h-1.5" style={{ width: `${(workRadius / 30) * 100}%` }} />
        </View>
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity onPress={() => setWorkRadius(Math.max(1, workRadius - 5))}>
            <Text className="text-xs text-blue-600 font-medium">- 5km</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWorkRadius(Math.min(30, workRadius + 5))}>
            <Text className="text-xs text-blue-600 font-medium">+ 5km</Text>
          </TouchableOpacity>
        </View>

        {/* Work Preference */}
        <Text className="text-sm font-bold text-slate-700 mb-3">Work Preference</Text>
        <View className="flex-row gap-3 mb-6">
          <TouchableOpacity
            className={`flex-1 rounded-xl p-4 border-2 items-center ${
              workPref === 'on-site' ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white'
            }`}
            onPress={() => setWorkPref('on-site')}
          >
            <Store size={24} color={workPref === 'on-site' ? '#2563EB' : '#94A3B8'} />
            <Text className={`text-sm font-semibold mt-2 ${workPref === 'on-site' ? 'text-blue-600' : 'text-slate-500'}`}>
              On-site
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 rounded-xl p-4 border-2 items-center ${
              workPref === 'remote' ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white'
            }`}
            onPress={() => setWorkPref('remote')}
          >
            <Laptop size={24} color={workPref === 'remote' ? '#2563EB' : '#94A3B8'} />
            <Text className={`text-sm font-semibold mt-2 ${workPref === 'remote' ? 'text-blue-600' : 'text-slate-500'}`}>
              Remote
            </Text>
          </TouchableOpacity>
        </View>

        {/* Availability */}
        <Text className="text-sm font-bold text-slate-700 mb-2">Availability</Text>
        <Text className="text-xs text-slate-500 mb-3">When are you free to take up gigs?</Text>
        <View className="flex-row justify-between mb-3">
          {days.map((day) => (
            <TouchableOpacity
              key={day}
              className={`w-10 h-10 rounded-full items-center justify-center ${
                selectedDays.includes(day) ? 'bg-blue-600' : 'bg-white border border-slate-200'
              }`}
              onPress={() => toggleDay(day)}
            >
              <Text className={`text-xs font-bold ${selectedDays.includes(day) ? 'text-white' : 'text-slate-500'}`}>
                {day.substring(0, 2)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row items-start bg-amber-50 rounded-xl p-3 mb-6">
          <Info size={14} color="#F59E0B" style={{ marginTop: 2 }} />
          <Text className="text-xs text-amber-700 ml-2 flex-1 leading-5">
            Most MSMEs prefer students available for at least 4 hours on selected days.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom */}
      <View className="px-5 pb-4 pt-2">
        <TouchableOpacity
          className="bg-blue-600 rounded-full py-4 items-center"
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text className="text-base font-bold text-white">Save & Continue →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
