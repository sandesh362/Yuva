import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, ChevronRight, Sparkles, SlidersHorizontal } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { GigCard, AvatarInitials } from '../../components';
import { mockGigs } from '../../mockData/gigs';
import { studentUser } from '../../mockData/user';

const filterChips = [
  { label: 'Near me', icon: '📍' },
  { label: 'Budget: ₹1k', icon: '💰' },
  { label: 'Design', icon: '🎨' },
  { label: 'Verified', icon: '✓' },
];

export const DiscoverGigsScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-xl font-bold text-slate-900">Find your next opportunity</Text>
              <View className="flex-row items-center mt-1">
                <MapPin size={12} color="#64748B" />
                <Text className="text-xs text-slate-500 ml-1">{studentUser.location}</Text>
              </View>
            </View>
            <AvatarInitials initials={studentUser.initials} color={studentUser.avatarColor} size="sm" />
          </View>
        </View>

        {/* Search */}
        <View className="px-5 mb-3">
          <View className="flex-row items-center bg-white border border-slate-200 rounded-xl px-3 py-3">
            <Search size={18} color="#94A3B8" />
            <TextInput
              className="flex-1 ml-2 text-sm text-slate-900"
              placeholder="Search gigs, skills or businesses"
              placeholderTextColor="#94A3B8"
            />
          </View>
        </View>

        {/* Filter chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-5 mb-4">
          {filterChips.map((chip, i) => (
            <TouchableOpacity
              key={i}
              className="flex-row items-center bg-white border border-slate-200 rounded-full px-3.5 py-2 mr-2"
              onPress={() => navigation.navigate('GigFilters')}
            >
              <Text className="text-xs mr-1">{chip.icon}</Text>
              <Text className="text-xs font-medium text-slate-700">{chip.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Skill match banner */}
        <View className="px-5 mb-5">
          <TouchableOpacity className="bg-gradient-to-r from-blue-600 to-indigo-500 rounded-xl">
            <View className="bg-blue-600 rounded-xl px-4 py-3 flex-row items-center justify-between">
              <View className="flex-row items-center flex-1">
                <Sparkles size={16} color="#FCD34D" />
                <Text className="text-sm font-semibold text-white ml-2">
                  92% Skill Match — Gigs matching your Graphic Design profile
                </Text>
              </View>
              <ChevronRight size={16} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Nearby gigs */}
        <View className="px-5">
          <View className="mb-3">
            <Text className="text-lg font-bold text-slate-900">Nearby Gigs</Text>
            <Text className="text-xs text-slate-500 mt-0.5">Gigs within 5km of your location</Text>
          </View>
          {mockGigs.map((gig) => (
            <GigCard
              key={gig.id}
              gig={gig}
              onPress={() => navigation.navigate('GigDetails', { gigId: gig.id })}
              onBookmark={() => {
                // TODO: connect to backend
              }}
              isBookmarked={gig.isSaved}
            />
          ))}
        </View>

        <View className="h-8" />
      </ScrollView>
    </SafeAreaView>
  );
};
