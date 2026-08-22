import React from 'react';
import { View, Text } from 'react-native';
import { Star } from 'lucide-react-native';
import type { PortfolioItem } from '../types';

interface PortfolioItemCardProps {
  item: PortfolioItem;
}

export const PortfolioItemCard: React.FC<PortfolioItemCardProps> = ({ item }) => {
  return (
    <View className="bg-white rounded-2xl p-4 mb-3 border border-slate-100">
      <View className="flex-row items-start justify-between mb-1">
        <Text className="text-xs font-bold text-blue-600 uppercase tracking-wide">
          {item.category}
        </Text>
        <View className="flex-row items-center bg-amber-50 px-2 py-0.5 rounded-full">
          <Star size={10} color="#F59E0B" fill="#F59E0B" />
          <Text className="text-xs font-semibold text-amber-600 ml-1">
            {item.rating}
          </Text>
        </View>
      </View>
      <Text className="text-base font-semibold text-slate-900 mt-1">{item.title}</Text>
      <Text className="text-xs text-slate-500 mt-0.5">{item.subtitle}</Text>
      <View className="h-px bg-slate-100 my-3" />
      <View className="flex-row items-center justify-between">
        <Text className="text-xs text-slate-400">{item.date}</Text>
        <Text className="text-sm font-bold text-slate-900">
          ₹{item.price.toLocaleString('en-IN')}
        </Text>
      </View>
    </View>
  );
};
