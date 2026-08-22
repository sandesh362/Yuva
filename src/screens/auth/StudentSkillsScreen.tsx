import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Shield } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { ChipToggle } from '../../components';

const skillCategories = [
  {
    name: 'Design & Creative',
    skills: ['Graphic Design', 'UI/UX Design', 'Logo Design', 'Photography', 'Video Editing', 'Product Photography'],
  },
  {
    name: 'Marketing & Social',
    skills: ['Social Media', 'Content Writing', 'Marketing', 'SEO', 'Email Marketing'],
  },
  {
    name: 'Development & IT',
    skills: ['Web Development', 'Data Entry', 'Excel', 'Python', 'App Development'],
  },
];

export const StudentSkillsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    'Graphic Design',
    'Social Media',
    'Content Writing',
    'Video Editing',
  ]);
  const navigation = useNavigation<any>();

  const toggleSkill = (skill: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Progress bar */}
      <View className="flex-row px-5 pt-4 gap-1.5">
        {[1, 2, 3, 4, 5].map((step) => (
          <View
            key={step}
            className={`flex-1 h-1 rounded-full ${
              step <= 3 ? 'bg-blue-600' : 'bg-slate-200'
            }`}
          />
        ))}
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-slate-900 mt-6">What are your skills?</Text>
        <Text className="text-sm text-slate-500 mt-1 mb-5">
          Select at least 3 skills to help us match you with the right micro-gigs.
        </Text>

        {/* Search */}
        <View className="flex-row items-center bg-white border border-slate-200 rounded-xl px-3 py-2.5 mb-5">
          <Search size={18} color="#94A3B8" />
          <TextInput
            className="flex-1 ml-2 text-sm text-slate-900"
            placeholder="e.g. Photoshop, Python..."
            placeholderTextColor="#94A3B8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Selected count */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-base font-bold text-slate-900">Selected Skills</Text>
          <View className="bg-blue-50 px-3 py-1 rounded-full">
            <Text className="text-xs font-semibold text-blue-600">
              {selectedSkills.length} Selected
            </Text>
          </View>
        </View>

        {/* Skill categories */}
        {skillCategories.map((category) => (
          <View key={category.name} className="mb-5">
            <Text className="text-sm font-bold text-slate-700 mb-2">
              {category.name}
            </Text>
            <View className="flex-row flex-wrap">
              {category.skills
                .filter((s) =>
                  searchQuery
                    ? s.toLowerCase().includes(searchQuery.toLowerCase())
                    : true
                )
                .map((skill) => (
                  <ChipToggle
                    key={skill}
                    label={skill}
                    isSelected={selectedSkills.includes(skill)}
                    onToggle={() => toggleSkill(skill)}
                  />
                ))}
            </View>
          </View>
        ))}

        {/* Info banner */}
        <View className="bg-emerald-50 rounded-xl p-4 flex-row items-start mb-6">
          <Shield size={16} color="#10B981" style={{ marginTop: 2 }} />
          <Text className="text-xs text-emerald-700 ml-2 flex-1 leading-5">
            Skills are verified through your portfolio and business ratings.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom */}
      <View className="px-5 pb-4 pt-2 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Text className="text-sm font-semibold text-slate-500">Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 rounded-full py-3.5 items-center ${
            selectedSkills.length >= 3 ? 'bg-blue-600' : 'bg-blue-300'
          }`}
          onPress={() => navigation.navigate('StudentLocation')}
          disabled={selectedSkills.length < 3}
          activeOpacity={0.8}
        >
          <Text className="text-base font-bold text-white">Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
