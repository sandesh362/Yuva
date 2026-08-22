import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBannerCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientBannerCard: React.FC<GradientBannerCardProps> = ({
  children,
  className = '',
}) => {
  return (
    <LinearGradient
      colors={['#2563EB', '#6366F1']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className={`rounded-2xl p-4 ${className}`}
    >
      {children}
    </LinearGradient>
  );
};
