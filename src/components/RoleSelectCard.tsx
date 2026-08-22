import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckCircle } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

interface RoleSelectCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isSelected: boolean;
  onPress: () => void;
}

export const RoleSelectCard: React.FC<RoleSelectCardProps> = ({
  title,
  description,
  icon: Icon,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`rounded-2xl p-5 mb-3 border-2 ${
        isSelected
          ? 'bg-blue-50 border-blue-600'
          : 'bg-white border-slate-100'
      }`}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View className="flex-row items-start justify-between">
        <View className="flex-row items-start flex-1">
          <View
            className={`w-12 h-12 rounded-xl items-center justify-center ${
              isSelected ? 'bg-blue-100' : 'bg-slate-50'
            }`}
          >
            <Icon size={24} color={isSelected ? '#2563EB' : '#64748B'} />
          </View>
          <View className="ml-3 flex-1">
            <Text className="text-lg font-bold text-slate-900">{title}</Text>
            <Text className="text-sm text-slate-500 mt-1 leading-5">{description}</Text>
          </View>
        </View>
        {isSelected && (
          <View className="w-6 h-6 rounded-full bg-blue-600 items-center justify-center ml-2">
            <CheckCircle size={16} color="#FFFFFF" fill="#2563EB" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
