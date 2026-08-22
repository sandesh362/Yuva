import React from 'react';
import { View, Text } from 'react-native';
import type { LucideIcon } from 'lucide-react-native';

interface StatCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  value: string | number;
  label: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  icon: Icon,
  iconColor,
  iconBg,
  value,
  label,
}) => {
  return (
    <View className="bg-white rounded-2xl p-4 flex-1 border border-slate-100">
      <View
        className="w-8 h-8 rounded-lg items-center justify-center mb-2"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={16} color={iconColor} />
      </View>
      <Text className="text-2xl font-bold text-slate-900">
        {typeof value === 'number' ? value.toLocaleString('en-IN') : value}
      </Text>
      <Text className="text-xs text-slate-500 mt-0.5">{label}</Text>
    </View>
  );
};
