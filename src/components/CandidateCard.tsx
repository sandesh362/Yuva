import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Zap, Star, Briefcase, MessageSquare } from 'lucide-react-native';
import { AvatarInitials } from './AvatarInitials';
import { VerifiedBadge } from './VerifiedBadge';
import type { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
  onShortlist?: () => void;
  onMessage?: () => void;
  onSelect?: () => void;
  onPress?: () => void;
  showActions?: boolean;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({
  candidate,
  onShortlist,
  onMessage,
  onSelect,
  onPress,
  showActions = true,
}) => {
  return (
    <TouchableOpacity
      className="bg-white rounded-2xl p-4 mb-3 border border-slate-100"
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <AvatarInitials
          initials={candidate.initials}
          color={candidate.avatarColor}
          size="md"
        />
        <View className="ml-3 flex-1">
          <View className="flex-row items-center">
            <Text className="text-base font-semibold text-slate-900">
              {candidate.name}
            </Text>
            {candidate.isVerified && <VerifiedBadge size={14} />}
          </View>
          <Text className="text-xs text-slate-500">{candidate.college}</Text>
        </View>
      </View>

      {/* Meta chips */}
      <View className="flex-row items-center mb-3">
        <View className="flex-row items-center bg-emerald-50 px-2 py-1 rounded-full mr-2">
          <Zap size={12} color="#10B981" />
          <Text className="text-xs font-semibold text-emerald-600 ml-1">
            {candidate.matchPercentage}% Match
          </Text>
        </View>
        <View className="flex-row items-center mr-2">
          <Star size={12} color="#F59E0B" fill="#F59E0B" />
          <Text className="text-xs font-medium text-slate-700 ml-1">
            {candidate.rating}
          </Text>
        </View>
        <View className="flex-row items-center">
          <Briefcase size={12} color="#64748B" />
          <Text className="text-xs text-slate-500 ml-1">
            {candidate.gigsCompleted} Gigs
          </Text>
        </View>
      </View>

      {/* Actions */}
      {showActions && (
        <>
          <View className="h-px bg-slate-100 mb-3" />
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              className="border border-slate-200 rounded-xl px-4 py-2"
              onPress={onShortlist}
            >
              <Text className="text-xs font-semibold text-slate-700">Shortlist</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="flex-row items-center px-4 py-2"
              onPress={onMessage}
            >
              <MessageSquare size={14} color="#64748B" />
              <Text className="text-xs font-semibold text-slate-500 ml-1">Message</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-blue-600 rounded-xl px-4 py-2"
              onPress={onSelect}
            >
              <Text className="text-xs font-bold text-white">Select</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};
