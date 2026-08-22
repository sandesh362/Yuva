import React from 'react';
import { View, Text } from 'react-native';
import { Check, Circle } from 'lucide-react-native';
import type { MilestoneStep } from '../types';

interface MilestoneStepperProps {
  steps: MilestoneStep[];
  variant: 'horizontal' | 'vertical';
}

const StepNode: React.FC<{ step: MilestoneStep }> = ({ step }) => {
  if (step.status === 'done') {
    return (
      <View className="w-8 h-8 rounded-full bg-emerald-500 items-center justify-center">
        <Check size={16} color="#FFFFFF" strokeWidth={3} />
      </View>
    );
  }
  if (step.status === 'current') {
    return (
      <View className="w-8 h-8 rounded-full border-[3px] border-blue-600 items-center justify-center">
        <View className="w-3 h-3 rounded-full bg-blue-600" />
      </View>
    );
  }
  // pending
  return (
    <View className="w-8 h-8 rounded-full bg-slate-200 items-center justify-center">
      <View className="w-3 h-3 rounded-full bg-slate-400" />
    </View>
  );
};

export const MilestoneStepper: React.FC<MilestoneStepperProps> = ({
  steps,
  variant,
}) => {
  if (variant === 'horizontal') {
    return (
      <View className="flex-row items-start justify-between px-2">
        {steps.map((step, i) => (
          <View key={step.id} className="items-center flex-1">
            <View className="flex-row items-center w-full justify-center">
              {i > 0 && (
                <View
                  className={`h-0.5 flex-1 ${
                    steps[i - 1].status === 'done' ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}
                />
              )}
              <StepNode step={step} />
              {i < steps.length - 1 && (
                <View
                  className={`h-0.5 flex-1 ${
                    step.status === 'done' ? 'bg-emerald-500' : 'bg-slate-200'
                  }`}
                />
              )}
            </View>
            <Text
              className={`text-xs mt-1.5 text-center ${
                step.status === 'current'
                  ? 'text-blue-600 font-bold'
                  : step.status === 'done'
                  ? 'text-emerald-600 font-medium'
                  : 'text-slate-400'
              }`}
            >
              {step.label}
            </Text>
          </View>
        ))}
      </View>
    );
  }

  // Vertical variant
  return (
    <View className="pl-4">
      {steps.map((step, i) => (
        <View key={step.id} className="flex-row">
          <View className="items-center">
            <StepNode step={step} />
            {i < steps.length - 1 && (
              <View
                className={`w-0.5 h-10 ${
                  step.status === 'done' ? 'bg-emerald-500' : 'bg-slate-200'
                }`}
              />
            )}
          </View>
          <View className="ml-3 pb-8">
            <Text
              className={`text-sm ${
                step.status === 'current'
                  ? 'text-blue-600 font-bold'
                  : step.status === 'done'
                  ? 'text-slate-900 font-medium'
                  : 'text-slate-400'
              }`}
            >
              {step.label}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
