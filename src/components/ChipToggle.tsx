import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface ChipToggleProps {
  label: string;
  isSelected: boolean;
  onToggle: () => void;
  showCheck?: boolean;
}

export const ChipToggle: React.FC<ChipToggleProps> = ({
  label,
  isSelected,
  onToggle,
  showCheck = false,
}) => {
  return (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full mr-2 mb-2 border ${
        isSelected
          ? 'bg-blue-600 border-blue-600'
          : 'bg-white border-slate-200'
      }`}
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <Text
        className={`text-sm font-medium ${
          isSelected ? 'text-white' : 'text-slate-700'
        }`}
      >
        {showCheck && isSelected ? '✓ ' : ''}{label}
      </Text>
    </TouchableOpacity>
  );
};
