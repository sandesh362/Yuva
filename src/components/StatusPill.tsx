import React from 'react';
import { View, Text } from 'react-native';
import type { ApplicationStatus, GigStatus } from '../types';

type PillStatus = ApplicationStatus | GigStatus | 'paid' | 'in_review' | 'revision' | 'info';

interface StatusPillProps {
  status: PillStatus;
  label?: string;
}

const statusStyles: Record<string, { bg: string; text: string; label: string }> = {
  applied: { bg: 'bg-blue-50', text: 'text-blue-600', label: 'Applied' },
  pending: { bg: 'bg-amber-50', text: 'text-amber-600', label: 'Pending' },
  shortlisted: { bg: 'bg-amber-50', text: 'text-amber-600', label: 'Shortlisted' },
  selected: { bg: 'bg-emerald-50', text: 'text-emerald-600', label: 'Selected' },
  active: { bg: 'bg-emerald-50', text: 'text-emerald-600', label: 'Active' },
  completed: { bg: 'bg-emerald-50', text: 'text-emerald-600', label: 'Completed' },
  rejected: { bg: 'bg-red-50', text: 'text-red-500', label: 'Rejected' },
  open: { bg: 'bg-blue-50', text: 'text-blue-600', label: 'Open' },
  in_progress: { bg: 'bg-blue-50', text: 'text-blue-600', label: 'In Progress' },
  draft: { bg: 'bg-slate-100', text: 'text-slate-500', label: 'Draft' },
  paid: { bg: 'bg-emerald-50', text: 'text-emerald-600', label: 'Paid' },
  in_review: { bg: 'bg-amber-50', text: 'text-amber-600', label: 'In Review' },
  revision: { bg: 'bg-red-50', text: 'text-red-500', label: 'Revision Requested' },
  info: { bg: 'bg-blue-50', text: 'text-blue-600', label: 'Info' },
};

export const StatusPill: React.FC<StatusPillProps> = ({ status, label }) => {
  const style = statusStyles[status] || statusStyles.info;
  return (
    <View className={`${style.bg} px-3 py-1 rounded-full`}>
      <Text className={`${style.text} text-xs font-semibold`}>
        {label || style.label}
      </Text>
    </View>
  );
};
