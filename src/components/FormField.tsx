import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Eye, EyeOff, ChevronDown } from 'lucide-react-native';
import type { LucideIcon } from 'lucide-react-native';

interface FormFieldProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  icon?: LucideIcon;
  type?: 'text' | 'password' | 'textarea' | 'dropdown';
  dropdownOptions?: string[];
  helperText?: string;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  icon: Icon,
  type = 'text',
  dropdownOptions = [],
  helperText,
  keyboardType = 'default',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <View className="mb-4">
      <Text className="text-sm font-semibold text-slate-900 mb-1.5">{label}</Text>
      <View
        className={`flex-row items-${type === 'textarea' ? 'start' : 'center'} border border-slate-200 rounded-xl px-3 ${
          type === 'textarea' ? 'py-3 min-h-[100px]' : 'py-0'
        } bg-white`}
      >
        {Icon && (
          <Icon
            size={18}
            color="#94A3B8"
            style={type === 'textarea' ? { marginTop: 2 } : {}}
          />
        )}
        {type === 'dropdown' ? (
          <TouchableOpacity
            className="flex-1 flex-row items-center justify-between py-3 ml-2"
            onPress={() => {
              // TODO: connect to backend — show picker
              setShowDropdown(!showDropdown);
              if (dropdownOptions.length > 0 && !value) {
                onChangeText(dropdownOptions[0]);
              }
            }}
          >
            <Text
              className={`text-sm ${value ? 'text-slate-900' : 'text-slate-400'}`}
            >
              {value || placeholder || 'Select...'}
            </Text>
            <ChevronDown size={18} color="#94A3B8" />
          </TouchableOpacity>
        ) : (
          <TextInput
            className={`flex-1 text-sm text-slate-900 ${Icon ? 'ml-2' : ''} ${
              type === 'textarea' ? '' : 'py-3'
            }`}
            placeholder={placeholder}
            placeholderTextColor="#94A3B8"
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={type === 'password' && !showPassword}
            multiline={type === 'textarea'}
            textAlignVertical={type === 'textarea' ? 'top' : 'center'}
            keyboardType={keyboardType}
          />
        )}
        {type === 'password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={18} color="#94A3B8" />
            ) : (
              <Eye size={18} color="#94A3B8" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {helperText && (
        <Text className="text-xs text-slate-400 mt-1">{helperText}</Text>
      )}
    </View>
  );
};
