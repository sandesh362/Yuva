import { Notification } from '../types';

export const studentNotifications: Notification[] = [
  // TODAY
  {
    id: 'NOTIF-001',
    type: 'application',
    title: 'Application Shortlisted!',
    description: 'Aman\'s Gourmet Cafe shortlisted you for Social Media Content Pack',
    timestamp: '10m ago',
    isRead: false,
    iconColor: '#F59E0B',
  },
  {
    id: 'NOTIF-002',
    type: 'work_update',
    title: 'Deliverable Approved',
    description: 'Modern Bites Cafe approved your concept sketches',
    timestamp: '1h ago',
    isRead: false,
    iconColor: '#10B981',
  },
  {
    id: 'NOTIF-003',
    type: 'message',
    title: 'New Message',
    description: 'Modern Bites Cafe: "The concept sketches look amazing!"',
    timestamp: '2h ago',
    isRead: true,
    iconColor: '#2563EB',
  },
  // YESTERDAY
  {
    id: 'NOTIF-004',
    type: 'payment',
    title: 'Payment Received ₹5,000',
    description: 'Payment for Product Photography has been credited to your account',
    timestamp: 'Yesterday',
    isRead: true,
    iconColor: '#10B981',
  },
  {
    id: 'NOTIF-005',
    type: 'work_update',
    title: 'Revision Requested',
    description: 'Modern Bites Cafe requested changes to your submission',
    timestamp: 'Yesterday',
    isRead: true,
    iconColor: '#EF4444',
  },
  {
    id: 'NOTIF-006',
    type: 'application',
    title: 'New Gig Match',
    description: 'Logo Design & Brand Identity matches 95% of your skills',
    timestamp: 'Yesterday',
    isRead: true,
    iconColor: '#2563EB',
  },
  // OLDER
  {
    id: 'NOTIF-007',
    type: 'verification',
    title: 'Verification Complete',
    description: 'Your student ID has been verified. You now have full access to YuvaConnect.',
    timestamp: '3 days ago',
    isRead: true,
    iconColor: '#10B981',
  },
  {
    id: 'NOTIF-008',
    type: 'work_update',
    title: 'Deadline Reminder',
    description: 'Instagram Content Pack deadline is in 2 days',
    timestamp: '4 days ago',
    isRead: true,
    iconColor: '#F59E0B',
  },
];

export const businessNotifications: Notification[] = [
  // TODAY
  {
    id: 'BNOTIF-001',
    type: 'application',
    title: 'New Applicant',
    description: 'Arjun Mehta applied for Create Instagram Content Pack',
    timestamp: '5m ago',
    isRead: false,
    iconColor: '#2563EB',
  },
  {
    id: 'BNOTIF-002',
    type: 'work_update',
    title: 'Deliverable Submitted',
    description: 'Sandesh Kumar submitted work for Product Photography',
    timestamp: '30m ago',
    isRead: false,
    iconColor: '#10B981',
  },
  {
    id: 'BNOTIF-003',
    type: 'payment',
    title: 'Payment Successful',
    description: '₹5,000 payment for Logo Design has been processed',
    timestamp: '2h ago',
    isRead: true,
    iconColor: '#10B981',
  },
  // YESTERDAY
  {
    id: 'BNOTIF-004',
    type: 'work_update',
    title: 'Work Update',
    description: 'Sneha Kapoor is 65% done with Social Media Strategy',
    timestamp: 'Yesterday',
    isRead: true,
    iconColor: '#2563EB',
  },
  {
    id: 'BNOTIF-005',
    type: 'verification',
    title: 'Verification Complete',
    description: 'Your business has been verified. Post your first gig now!',
    timestamp: 'Yesterday',
    isRead: true,
    iconColor: '#10B981',
  },
  // OLDER
  {
    id: 'BNOTIF-006',
    type: 'application',
    title: '5 New Applicants',
    description: 'Product Photography for New Catalog received 5 new applications',
    timestamp: '3 days ago',
    isRead: true,
    iconColor: '#2563EB',
  },
];

export const notificationDateGroups = {
  student: [
    { label: 'TODAY', ids: ['NOTIF-001', 'NOTIF-002', 'NOTIF-003'] },
    { label: 'YESTERDAY', ids: ['NOTIF-004', 'NOTIF-005', 'NOTIF-006'] },
    { label: 'OLDER', ids: ['NOTIF-007', 'NOTIF-008'] },
  ],
  business: [
    { label: 'TODAY', ids: ['BNOTIF-001', 'BNOTIF-002', 'BNOTIF-003'] },
    { label: 'YESTERDAY', ids: ['BNOTIF-004', 'BNOTIF-005'] },
    { label: 'OLDER', ids: ['BNOTIF-006'] },
  ],
};
