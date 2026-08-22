import React from 'react';
import { View } from 'react-native';
import { BadgeCheck } from 'lucide-react-native';

interface VerifiedBadgeProps {
  size?: number;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({ size = 14 }) => {
  return (
    <View className="ml-1">
      <BadgeCheck size={size} color="#2563EB" fill="#2563EB" strokeWidth={0} />
    </View>
  );
};
