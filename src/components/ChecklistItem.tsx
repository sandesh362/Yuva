import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Check, Square } from 'lucide-react-native';

interface ChecklistItemProps {
  text: string;
  isCompleted: boolean;
  onToggle?: () => void;
  interactive?: boolean;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  text,
  isCompleted,
  onToggle,
  interactive = false,
}) => {
  const Wrapper = interactive ? TouchableOpacity : View;

  return (
    <Wrapper
      className="flex-row items-center py-2.5"
      {...(interactive ? { onPress: onToggle, activeOpacity: 0.7 } : {})}
    >
      {isCompleted ? (
        <View className="w-6 h-6 rounded-md bg-emerald-500 items-center justify-center">
          <Check size={14} color="#FFFFFF" strokeWidth={3} />
        </View>
      ) : (
        <View className="w-6 h-6 rounded-md border-2 border-slate-200" />
      )}
      <Text
        className={`ml-3 text-sm flex-1 ${
          isCompleted ? 'text-slate-900' : 'text-slate-600'
        }`}
      >
        {text}
      </Text>
    </Wrapper>
  );
};
