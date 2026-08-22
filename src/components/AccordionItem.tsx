import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Plus, Minus } from 'lucide-react-native';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <View className="border-b border-slate-100">
      <TouchableOpacity
        className="flex-row items-center justify-between py-4"
        onPress={() => setIsOpen(!isOpen)}
        activeOpacity={0.7}
      >
        <Text className="text-sm font-semibold text-slate-900 flex-1 pr-4">
          {question}
        </Text>
        {isOpen ? (
          <Minus size={18} color="#64748B" />
        ) : (
          <Plus size={18} color="#64748B" />
        )}
      </TouchableOpacity>
      {isOpen && (
        <View className="pb-4">
          <Text className="text-sm text-slate-500 leading-5">{answer}</Text>
        </View>
      )}
    </View>
  );
};
