// ============================================================
// YuvaConnect — Type Definitions
// ============================================================

// ---------- Enums ----------

export type UserRole = 'student' | 'business';

export type GigStatus =
  | 'open'
  | 'active'
  | 'in_progress'
  | 'completed'
  | 'pending'
  | 'draft';

export type ApplicationStatus =
  | 'applied'
  | 'pending'
  | 'shortlisted'
  | 'selected'
  | 'active'
  | 'completed'
  | 'rejected';

export type MilestoneStatus = 'done' | 'current' | 'pending';

export type NotificationType =
  | 'application'
  | 'work_update'
  | 'message'
  | 'payment'
  | 'verification';

export type WorkPreference = 'on-site' | 'remote' | 'both';

// ---------- Data Models ----------

export interface User {
  id: string;
  role: UserRole;
  name: string;
  initials: string;
  email: string;
  phone?: string;
  avatarColor: string;
  isVerified: boolean;
  location: string;
  joinedDate: string;
}

export interface StudentProfile extends User {
  role: 'student';
  college: string;
  degree: string;
  year: string;
  skills: string[];
  rating: number;
  gigsCompleted: number;
  totalEarnings: number;
  pendingEarnings: number;
  monthlyEarnings: number;
  workRadius: number;
  workPreference: WorkPreference;
  availability: string[];
}

export interface BusinessProfile extends User {
  role: 'business';
  businessName: string;
  gstin?: string;
  category: string;
  activeGigs: number;
  totalApplicants: number;
  activeWorkers: number;
  totalSpend: number;
  memberSince: string;
}

export interface Gig {
  id: string;
  title: string;
  businessId: string;
  businessName: string;
  businessInitials: string;
  businessAvatarColor: string;
  isBusinessVerified: boolean;
  category: string;
  description: string;
  skills: string[];
  budget: number;
  duration: string;
  deadline: string;
  location: string;
  distance: string;
  workType: WorkPreference;
  status: GigStatus;
  applicantCount: number;
  rating: number;
  reviewCount: number;
  deliverables: string[];
  postedDate: string;
  isSaved?: boolean;
  matchPercentage?: number;
}

export interface Application {
  id: string;
  gigId: string;
  gigTitle: string;
  businessName: string;
  businessInitials: string;
  businessAvatarColor: string;
  isBusinessVerified: boolean;
  status: ApplicationStatus;
  appliedDate: string;
  duration: string;
  budget: number;
  progress?: number;
}

export interface Candidate {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  college: string;
  degree: string;
  year: string;
  skills: string[];
  rating: number;
  gigsCompleted: number;
  matchPercentage: number;
  distance: string;
  isVerified: boolean;
  availability: string;
  portfolio: PortfolioItem[];
  reviews: Review[];
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  rating: number;
  date: string;
  price: number;
}

export interface Review {
  id: string;
  reviewerName: string;
  reviewerInitials: string;
  reviewerAvatarColor: string;
  isVerified: boolean;
  reviewerLabel: string;
  gigTitle: string;
  completionDate: string;
  rating: number;
  text: string;
  price?: number;
}

export interface MilestoneStep {
  id: string;
  label: string;
  status: MilestoneStatus;
}

export interface DeliverableItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isOutgoing: boolean;
  type: 'text' | 'system';
}

export interface ChatThread {
  id: string;
  contactName: string;
  contactInitials: string;
  contactAvatarColor: string;
  isVerified: boolean;
  isOnline: boolean;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  gigTitle?: string;
  gigBudget?: number;
  messages: Message[];
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  isRead: boolean;
  iconColor: string;
}

export interface Transaction {
  id: string;
  title: string;
  businessName?: string;
  studentName?: string;
  date: string;
  amount: number;
  status: 'paid' | 'pending' | 'in_review';
  type: 'credit' | 'debit';
}

export interface EarningsData {
  month: string;
  amount: number;
}

export interface PaymentBreakdown {
  gigAmount: number;
  platformFee: number;
  gst: number;
  totalPayout: number;
}

// ---------- Navigation Param Lists ----------

export type AuthStackParamList = {
  RoleSelection: undefined;
  StudentLogin: undefined;
  BusinessLogin: undefined;
  StudentSkills: undefined;
  StudentLocation: undefined;
  BusinessVerification: undefined;
};

export type StudentTabParamList = {
  StudentHome: undefined;
  DiscoverGigs: undefined;
  MyGigs: undefined;
  MessagesList: undefined;
  StudentProfile: undefined;
};

export type BusinessTabParamList = {
  BusinessHome: undefined;
  ManageGigs: undefined;
  PostGig: undefined;
  BusinessMessages: undefined;
  BusinessProfile: undefined;
};

export type StudentStackParamList = StudentTabParamList & {
  GigFilters: undefined;
  GigDetails: { gigId: string };
  ApplyGig: { gigId: string };
  WorkTracker: { applicationId: string };
  SubmitWork: { applicationId: string };
  RevisionRequested: { applicationId: string };
  Earnings: undefined;
  StudentNotifications: undefined;
  SavedGigs: undefined;
  StudentReviews: undefined;
  ChatThread: { threadId: string };
  RateExperience: { gigId: string };
  GlobalSearch: undefined;
};

export type BusinessStackParamList = BusinessTabParamList & {
  ManageApplicants: { gigId: string };
  CandidateProfile: { candidateId: string };
  CandidateComparison: { gigId: string };
  ConfirmSelection: { candidateId: string; gigId: string };
  BusinessWorkTracker: { gigId: string };
  PaymentDetails: { transactionId: string };
  BusinessNotifications: undefined;
  SavedTalent: undefined;
  ReportSupport: undefined;
  BusinessChatThread: { threadId: string };
};

export type RootStackParamList = {
  Auth: undefined;
  StudentApp: undefined;
  BusinessApp: undefined;
};
