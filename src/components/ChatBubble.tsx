import React from 'react';
import { View, Text } from 'react-native';

interface ChatBubbleProps {
  text: string;
  timestamp: string;
  isOutgoing: boolean;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({
  text,
  timestamp,
  isOutgoing,
}) => {
  return (
    <View
      className={`max-w-[80%] mb-3 ${isOutgoing ? 'self-end' : 'self-start'}`}
    >
      <View
        className={`px-4 py-3 rounded-2xl ${
          isOutgoing
            ? 'bg-blue-600 rounded-br-sm'
            : 'bg-slate-100 rounded-bl-sm'
        }`}
      >
        <Text
          className={`text-sm ${isOutgoing ? 'text-white' : 'text-slate-900'}`}
        >
          {text}
        </Text>
      </View>
      <Text
        className={`text-xs text-slate-400 mt-1 ${
          isOutgoing ? 'text-right' : 'text-left'
        }`}
      >
        {timestamp}
      </Text>
    </View>
  );
};
