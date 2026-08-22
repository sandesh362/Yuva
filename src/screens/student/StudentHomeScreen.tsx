import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, ChevronRight, MapPin, Search, SlidersHorizontal, Check, Map } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { GigCard, GradientBannerCard, AvatarInitials } from '../../components';
import { studentUser } from '../../mockData/user';
import { useDemo } from '../../state/DemoContext';

export const StudentHomeScreen = () => {
  const navigation = useNavigation<any>();
  const { gigs, savedGigIds, toggleSaved } = useDemo();

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="px-5 pt-4 pb-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-xl font-bold text-slate-900">Good evening, {studentUser.name.split(' ')[0]} 👋</Text>
              <TouchableOpacity className="flex-row items-center mt-1">
                <MapPin size={12} color="#64748B" />
                <Text className="text-xs text-slate-500 ml-1">{studentUser.location}</Text>
                <ChevronRight size={12} color="#94A3B8" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              className="relative"
              onPress={() => navigation.navigate('StudentNotifications')}
            >
              <Bell size={22} color="#0F172A" />
              <View className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 items-center justify-center">
                <Text className="text-[9px] font-bold text-white">3</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Search bar */}
        <View className="px-5 mb-4">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => navigation.navigate('GlobalSearch')}
          >
            <View className="flex-1 flex-row items-center bg-white border border-slate-200 rounded-xl px-3 py-3 mr-2">
              <Search size={18} color="#94A3B8" />
              <Text className="text-sm text-slate-400 ml-2">Search gigs, skills or businesses</Text>
            </View>
            <View className="w-11 h-11 bg-blue-600 rounded-xl items-center justify-center">
              <SlidersHorizontal size={18} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Verification banner */}
        <View className="px-5 mb-5">
          <GradientBannerCard>
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-xs text-white/70 font-medium">Verification Status</Text>
                <View className="flex-row items-center mt-1">
                  <Check size={14} color="#10B981" />
                  <Text className="text-base font-bold text-white ml-1">Verified Student</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('StudentProfile')}>
                <Text className="text-sm font-semibold text-white/90">My Portfolio →</Text>
              </TouchableOpacity>
            </View>
          </GradientBannerCard>
        </View>

        {/* Recommended */}
        <View className="px-5">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-bold text-slate-900">Recommended for you</Text>
            <TouchableOpacity onPress={() => navigation.navigate('DiscoverGigs')}>
              <Text className="text-sm font-semibold text-blue-600">See All</Text>
            </TouchableOpacity>
          </View>
          {gigs.slice(0, 3).map((gig) => (
            <GigCard
              key={gig.id}
              gig={gig}
              onPress={() => navigation.navigate('GigDetails', { gigId: gig.id })}
              onBookmark={() => toggleSaved(gig.id)}
              isBookmarked={savedGigIds.includes(gig.id)}
            />
          ))}
        </View>

        {/* Near campus */}
        <View className="px-5 mt-4 mb-8">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-bold text-slate-900">Near your campus</Text>
            <TouchableOpacity className="flex-row items-center">
              <Map size={14} color="#2563EB" />
              <Text className="text-sm font-semibold text-blue-600 ml-1">Map View</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-blue-50 rounded-2xl h-40 items-center justify-center">
            <MapPin size={24} color="#2563EB" />
            <Text className="text-xs text-blue-600 font-medium mt-2">Map Preview — Powai Area</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
