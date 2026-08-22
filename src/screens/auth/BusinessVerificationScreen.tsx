import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Building, Briefcase, CloudUpload, MapPin, Info } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { FormField, SystemInfoBanner } from '../../components';
import { useAuth } from '../../navigation/RootNavigator';

export const BusinessVerificationScreen = () => {
  const [businessName, setBusinessName] = useState('');
  const [gstin, setGstin] = useState('');
  const [category, setCategory] = useState('');
  const navigation = useNavigation<any>();
  const { setRole } = useAuth();

  const handleSubmit = () => {
    // TODO: connect to backend
    setRole('business');
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* Progress bar */}
      <View className="flex-row px-5 pt-4 gap-1.5">
        {[1, 2, 3, 4, 5].map((step) => (
          <View
            key={step}
            className={`flex-1 h-1 rounded-full ${
              step <= 2 ? 'bg-blue-600' : 'bg-slate-200'
            }`}
          />
        ))}
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <Text className="text-2xl font-bold text-slate-900 mt-6">Business Verification</Text>
        <Text className="text-sm text-slate-500 mt-1 mb-5">Step 2 of 5</Text>

        {/* Info banner */}
        <SystemInfoBanner
          text="Verified businesses get 3x more applications and higher trust badges."
          icon="info"
          bgColor="bg-blue-50"
          textColor="text-blue-700"
        />

        {/* Business Details */}
        <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-6 mb-3">
          Business Details
        </Text>

        <FormField
          label="Legal Business Name"
          placeholder="e.g. Retail Hub Pvt Ltd"
          value={businessName}
          onChangeText={setBusinessName}
          icon={Building}
        />
        <FormField
          label="GSTIN / Registration Number"
          placeholder="e.g. 27AABCU9603R1ZM"
          value={gstin}
          onChangeText={setGstin}
          icon={Briefcase}
          helperText="Optional for small shops"
        />
        <FormField
          label="Business Category"
          placeholder="Select category"
          value={category}
          onChangeText={setCategory}
          type="dropdown"
          dropdownOptions={['Retail & Commerce', 'Food & Beverage', 'Technology', 'Creative Services', 'Education', 'Healthcare', 'Other']}
        />

        {/* Upload section */}
        <Text className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-3">
          Proof of Identity / Address
        </Text>

        {/* Upload card 1 */}
        <View className="bg-white rounded-xl p-4 border border-slate-100 mb-3">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-lg bg-blue-50 items-center justify-center">
              <CloudUpload size={20} color="#2563EB" />
            </View>
            <View className="ml-3 flex-1">
              <Text className="text-sm font-semibold text-slate-900">Upload Business PAN or Aadhaar</Text>
              <Text className="text-xs text-slate-400 mt-0.5">JPG, PNG or PDF • Max 5MB</Text>
            </View>
          </View>
          <TouchableOpacity className="border border-slate-200 rounded-xl py-2.5 items-center mt-3">
            <Text className="text-sm font-semibold text-slate-700">Select File</Text>
          </TouchableOpacity>
        </View>

        {/* Upload card 2 */}
        <View className="bg-white rounded-xl p-4 border border-slate-100 mb-6">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-lg bg-emerald-50 items-center justify-center">
              <MapPin size={20} color="#10B981" />
            </View>
            <View className="ml-3 flex-1">
              <Text className="text-sm font-semibold text-slate-900">Shop License / Utility Bill</Text>
              <Text className="text-xs text-slate-400 mt-0.5">For address verification</Text>
            </View>
          </View>
          <TouchableOpacity className="border border-slate-200 rounded-xl py-2.5 items-center mt-3">
            <Text className="text-sm font-semibold text-slate-700">Select File</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom */}
      <View className="px-5 pb-4 pt-2 flex-row gap-3">
        <TouchableOpacity
          className="flex-1 border border-slate-200 rounded-full py-3.5 items-center"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-base font-semibold text-slate-700">Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 bg-blue-600 rounded-full py-3.5 items-center"
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Text className="text-base font-bold text-white">Submit for Review</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
