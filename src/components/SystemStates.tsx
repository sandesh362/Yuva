import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchX, WifiOff, CheckCircle, Loader } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

// ——— EmptyState ———

interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon = SearchX,
  title,
  subtitle,
  actionLabel,
  onAction,
}) => {
  return (
    <View className="flex-1 items-center justify-center py-16 px-8">
      <View className="w-16 h-16 rounded-full bg-slate-100 items-center justify-center mb-4">
        <Icon size={28} color="#94A3B8" />
      </View>
      <Text className="text-lg font-bold text-slate-900 text-center">{title}</Text>
      {subtitle && (
        <Text className="text-sm text-slate-500 text-center mt-2">{subtitle}</Text>
      )}
      {actionLabel && onAction && (
        <TouchableOpacity
          className="mt-4 border border-slate-200 rounded-xl px-6 py-2.5"
          onPress={onAction}
        >
          <Text className="text-sm font-semibold text-slate-700">{actionLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// ——— ErrorState ———

interface ErrorStateProps {
  title?: string;
  subtitle?: string;
  onRetry?: () => void;
}

export const ErrorState: React.FC<ErrorStateProps> = ({
  title = 'Connection Lost',
  subtitle = 'Please check your internet connection and try again.',
  onRetry,
}) => {
  return (
    <View className="bg-red-50 rounded-2xl p-5 mx-4 my-4 items-center">
      <View className="w-10 h-10 rounded-full bg-red-100 items-center justify-center mb-3">
        <WifiOff size={20} color="#EF4444" />
      </View>
      <Text className="text-base font-bold text-slate-900 text-center">{title}</Text>
      <Text className="text-xs text-slate-500 text-center mt-1">{subtitle}</Text>
      {onRetry && (
        <TouchableOpacity onPress={onRetry} className="mt-3">
          <Text className="text-sm font-semibold text-blue-600">Retry</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// ——— SuccessState ———

interface SuccessStateProps {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}

export const SuccessState: React.FC<SuccessStateProps> = ({
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
}) => {
  return (
    <View className="flex-1 items-center justify-center py-16 px-8">
      <View className="w-16 h-16 rounded-full bg-emerald-50 items-center justify-center mb-4">
        <CheckCircle size={32} color="#10B981" />
      </View>
      <Text className="text-xl font-bold text-slate-900 text-center">{title}</Text>
      {subtitle && (
        <Text className="text-sm text-slate-500 text-center mt-2">{subtitle}</Text>
      )}
      {primaryLabel && onPrimary && (
        <TouchableOpacity
          className="mt-6 bg-blue-600 rounded-full px-8 py-3.5"
          onPress={onPrimary}
        >
          <Text className="text-sm font-bold text-white">{primaryLabel}</Text>
        </TouchableOpacity>
      )}
      {secondaryLabel && onSecondary && (
        <TouchableOpacity onPress={onSecondary} className="mt-3">
          <Text className="text-sm font-semibold text-slate-500">{secondaryLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

// ——— SkeletonLoader ———

export const SkeletonLoader: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <View className="px-4 py-4">
      {Array.from({ length: lines }).map((_, i) => (
        <View
          key={i}
          className="bg-slate-100 rounded-2xl h-24 mb-3 animate-pulse"
          style={{ opacity: 1 - i * 0.15 }}
        />
      ))}
    </View>
  );
};
