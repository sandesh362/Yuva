import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { X, MapPin } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { ChipToggle } from '../../components';

const skills = ['Graphic Design', 'Social Media', 'Content Writing', 'Video Editing', 'Photography', 'Web Development', 'Data Entry', 'Marketing'];
const durations = ['Single Day', '1-3 Days', '1 Week', '1 Month+'];
const budgetPresets = ['Under ₹1k', '₹1k-₹5k', '₹5k+'];

export const GigFiltersScreen = () => {
  const navigation = useNavigation<any>();
  const [radius, setRadius] = useState(15);
  const [selectedSkills, setSelectedSkills] = useState<string[]>(['Graphic Design']);
  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('1-3 Days');

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-5 py-3 border-b border-slate-100">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <X size={22} color="#0F172A" />
        </TouchableOpacity>
        <Text className="text-lg font-bold text-slate-900">Filters</Text>
        <TouchableOpacity>
          <Text className="text-sm font-semibold text-blue-600">Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        {/* Distance */}
        <View className="mt-5">
          <View className="flex-row items-center justify-between mb-2">
            <Text className="text-base font-bold text-slate-900">Distance Radius</Text>
            <Text className="text-sm font-semibold text-blue-600">Within {radius} km</Text>
          </View>
          <View className="bg-slate-200 rounded-full h-1.5 mb-1">
            <View className="bg-blue-600 rounded-full h-1.5" style={{ width: `${(radius / 30) * 100}%` }} />
          </View>
          <View className="flex-row items-center mt-1">
            <MapPin size={12} color="#64748B" />
            <Text className="text-xs text-slate-500 ml-1">Showing gigs near Powai, Mumbai</Text>
          </View>
        </View>

        {/* Skills */}
        <View className="mt-6">
          <Text className="text-base font-bold text-slate-900 mb-3">Skills</Text>
          <View className="flex-row flex-wrap">
            {skills.map((skill) => (
              <ChipToggle
                key={skill}
                label={skill}
                isSelected={selectedSkills.includes(skill)}
                onToggle={() => toggleSkill(skill)}
              />
            ))}
          </View>
        </View>

        {/* Budget */}
        <View className="mt-6">
          <Text className="text-base font-bold text-slate-900 mb-3">Budget Range (₹)</Text>
          <View className="flex-row gap-3 mb-3">
            <View className="flex-1 flex-row items-center bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <Text className="text-slate-400 mr-1">₹</Text>
              <Text className="text-sm text-slate-400">Min</Text>
            </View>
            <View className="flex-1 flex-row items-center bg-white border border-slate-200 rounded-xl px-3 py-2.5">
              <Text className="text-slate-400 mr-1">₹</Text>
              <Text className="text-sm text-slate-400">Max</Text>
            </View>
          </View>
          <View className="flex-row flex-wrap">
            {budgetPresets.map((preset) => (
              <TouchableOpacity key={preset} className="border border-slate-200 rounded-full px-4 py-2 mr-2 mb-2">
                <Text className="text-xs font-medium text-slate-700">{preset}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Duration */}
        <View className="mt-6 mb-8">
          <Text className="text-base font-bold text-slate-900 mb-3">Gig Duration</Text>
          <View className="flex-row flex-wrap">
            {durations.map((d) => (
              <TouchableOpacity
                key={d}
                className={`border rounded-xl px-4 py-3 mr-2 mb-2 w-[47%] items-center ${
                  selectedDuration === d ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white'
                }`}
                onPress={() => setSelectedDuration(d)}
              >
                <Text className={`text-sm font-medium ${selectedDuration === d ? 'text-blue-600' : 'text-slate-700'}`}>
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Bottom */}
      <View className="px-5 pb-4 pt-2 border-t border-slate-100">
        <TouchableOpacity
          className="bg-blue-600 rounded-full py-4 items-center"
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text className="text-base font-bold text-white">Show 42 Gigs</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
