import React from 'react';
import { View, Text } from 'react-native';
import { Shield, Info } from 'lucide-react-native';

interface SystemInfoBannerProps {
  text: string;
  icon?: 'shield' | 'info';
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}

export const SystemInfoBanner: React.FC<SystemInfoBannerProps> = ({
  text,
  icon = 'shield',
  bgColor = 'bg-blue-50',
  textColor = 'text-blue-700',
  iconColor = '#2563EB',
}) => {
  const IconComponent = icon === 'shield' ? Shield : Info;

  return (
    <View className={`${bgColor} rounded-xl px-4 py-3 flex-row items-start`}>
      <IconComponent size={16} color={iconColor} style={{ marginTop: 2 }} />
      <Text className={`${textColor} text-xs ml-2 flex-1 leading-5`}>
        {text}
      </Text>
    </View>
  );
};
