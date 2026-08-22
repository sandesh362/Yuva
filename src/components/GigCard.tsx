import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Bookmark, MapPin, Clock, ChevronRight } from 'lucide-react-native';
import { AvatarInitials } from './AvatarInitials';
import { VerifiedBadge } from './VerifiedBadge';
import type { Gig } from '../types';

interface GigCardProps {
  gig: Gig;
  onPress?: () => void;
  onBookmark?: () => void;
  showBookmark?: boolean;
  isBookmarked?: boolean;
}

export const GigCard: React.FC<GigCardProps> = ({
  gig,
  onPress,
  onBookmark,
  showBookmark = true,
  isBookmarked = false,
}) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 mb-3 border border-slate-100"
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Header */}
      <View className="flex-row items-start justify-between mb-3">
        <View className="flex-row items-center flex-1">
          <AvatarInitials
            initials={gig.businessInitials}
            color={gig.businessAvatarColor}
            size="sm"
          />
          <View className="ml-2 flex-1">
            <View className="flex-row items-center">
              <Text className="text-xs text-slate-500">{gig.businessName}</Text>
              {gig.isBusinessVerified && <VerifiedBadge size={12} />}
            </View>
            <Text className="text-base font-semibold text-slate-900 mt-0.5" numberOfLines={1}>
              {gig.title}
            </Text>
          </View>
        </View>
        {showBookmark && (
          <TouchableOpacity onPress={onBookmark} className="p-1">
            <Bookmark
              size={18}
              color={isBookmarked ? '#2563EB' : '#94A3B8'}
              fill={isBookmarked ? '#2563EB' : 'none'}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Skill chip */}
      {gig.skills.length > 0 && (
        <View className="flex-row flex-wrap mb-3">
          <View className="bg-blue-50 px-2.5 py-1 rounded-full mr-1.5 mb-1">
            <Text className="text-xs font-medium text-blue-600">{gig.skills[0]}</Text>
          </View>
          {gig.skills.length > 1 && (
            <View className="bg-slate-100 px-2.5 py-1 rounded-full mr-1.5 mb-1">
              <Text className="text-xs text-slate-500">+{gig.skills.length - 1} more</Text>
            </View>
          )}
        </View>
      )}

      {/* Divider */}
      <View className="h-px bg-slate-100 mb-3" />

      {/* Footer */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center">
          <Text className="text-base font-bold text-slate-900">₹{gig.budget.toLocaleString('en-IN')}</Text>
          <Text className="text-xs text-slate-400 mx-2">•</Text>
          <View className="flex-row items-center">
            <Clock size={12} color="#64748B" />
            <Text className="text-xs text-slate-500 ml-1">{gig.duration}</Text>
          </View>
        </View>
        <View className="flex-row items-center">
          <View className="flex-row items-center mr-3">
            <MapPin size={12} color="#64748B" />
            <Text className="text-xs text-slate-500 ml-1">{gig.distance}</Text>
          </View>
          <TouchableOpacity onPress={onPress} className="flex-row items-center">
            <Text className="text-xs font-semibold text-blue-600">View Gig</Text>
            <ChevronRight size={14} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
