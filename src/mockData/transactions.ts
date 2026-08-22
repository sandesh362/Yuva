import { Transaction, EarningsData, PaymentBreakdown } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: 'TXN-001',
    title: 'Product Photography',
    businessName: 'Retail Hub',
    studentName: 'Sandesh Kumar',
    date: '18 Oct 2025',
    amount: 5000,
    status: 'paid',
    type: 'credit',
  },
  {
    id: 'TXN-002',
    title: 'Instagram Content Pack',
    businessName: 'Modern Bites Cafe',
    studentName: 'Sandesh Kumar',
    date: '15 Oct 2025',
    amount: 2500,
    status: 'in_review',
    type: 'credit',
  },
  {
    id: 'TXN-003',
    title: 'Logo Design',
    businessName: 'Fresh Bakes Studio',
    studentName: 'Sandesh Kumar',
    date: '10 Oct 2025',
    amount: 8000,
    status: 'paid',
    type: 'credit',
  },
  {
    id: 'TXN-004',
    title: 'Social Media Strategy',
    businessName: 'FitZone Gym',
    studentName: 'Sandesh Kumar',
    date: '05 Oct 2025',
    amount: 3500,
    status: 'paid',
    type: 'credit',
  },
  {
    id: 'TXN-005',
    title: 'Content Writing',
    businessName: 'TechStart Solutions',
    studentName: 'Sneha Kapoor',
    date: '01 Oct 2025',
    amount: 3000,
    status: 'paid',
    type: 'credit',
  },
  {
    id: 'TXN-006',
    title: 'Data Entry',
    businessName: 'Retail Hub',
    studentName: 'Priya Sharma',
    date: '28 Sep 2025',
    amount: 1500,
    status: 'paid',
    type: 'credit',
  },
];

export const earningsChartData: EarningsData[] = [
  { month: 'May', amount: 4200 },
  { month: 'Jun', amount: 6800 },
  { month: 'Jul', amount: 5500 },
  { month: 'Aug', amount: 9200 },
  { month: 'Sep', amount: 8400 },
  { month: 'Oct', amount: 12400 },
];

export const samplePaymentBreakdown: PaymentBreakdown = {
  gigAmount: 5000,
  platformFee: 250,
  gst: 45,
  totalPayout: 4705,
};

export const reviewRatingBreakdown = [
  { stars: 5, count: 18 },
  { stars: 4, count: 4 },
  { stars: 3, count: 1 },
  { stars: 2, count: 1 },
  { stars: 1, count: 0 },
];

export const reviewAchievements = [
  'On Time',
  'Pro Communication',
  'High Quality',
  'Reliable',
];
