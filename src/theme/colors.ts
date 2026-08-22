// ============================================================
// YuvaConnect — Color Tokens & Theme Constants
// ============================================================

export const colors = {
  // Primary
  primary: '#2563EB',        // blue-600
  primaryLight: '#EFF6FF',   // blue-50
  gradientEnd: '#6366F1',    // indigo-500

  // Status
  success: '#10B981',        // emerald-500
  successLight: '#ECFDF5',   // emerald-50
  successDark: '#047857',    // emerald-700
  warning: '#F59E0B',        // amber-500
  warningLight: '#FFFBEB',   // amber-50
  error: '#EF4444',          // red-500
  errorLight: '#FEF2F2',     // red-50

  // Backgrounds
  background: '#F8FAFC',     // slate-50
  card: '#FFFFFF',
  cardBorder: '#F1F5F9',     // slate-100
  divider: '#E2E8F0',        // slate-200

  // Text
  textPrimary: '#0F172A',    // slate-900
  textSecondary: '#64748B',  // slate-500
  textTertiary: '#6B7280',   // gray-500
  textWhite: '#FFFFFF',

  // Misc
  skillChipBg: '#ECFDF5',   // emerald-50
  skillChipText: '#047857',  // emerald-700
  infoChipBg: '#EFF6FF',    // blue-50
  infoChipText: '#2563EB',  // blue-600
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 9999,
} as const;

export const fontSize = {
  xs: 12,
  sm: 13,
  base: 14,
  md: 16,
  lg: 18,
  xl: 22,
  '2xl': 26,
  '3xl': 28,
  '4xl': 32,
} as const;
