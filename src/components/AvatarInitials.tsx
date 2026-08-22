import React from 'react';
import { View, Text } from 'react-native';

interface AvatarInitialsProps {
  initials: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { container: 'w-8 h-8', text: 'text-xs' },
  md: { container: 'w-10 h-10', text: 'text-sm' },
  lg: { container: 'w-16 h-16', text: 'text-xl' },
};

export const AvatarInitials: React.FC<AvatarInitialsProps> = ({
  initials,
  color,
  size = 'md',
}) => {
  const s = sizeMap[size];
  return (
    <View
      className={`${s.container} rounded-full items-center justify-center`}
      style={{ backgroundColor: color + '20' }}
    >
      <Text
        className={`${s.text} font-bold`}
        style={{ color }}
      >
        {initials}
      </Text>
    </View>
  );
};
