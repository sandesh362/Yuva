import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Application, ApplicationStatus, Gig, UserRole } from '../types';
import { mockApplications, mockGigs } from '../mockData/gigs';
import { clearToken } from '../api/client';
import { currentUser, type ApiUser } from '../api/auth';
import { applyToGig, fetchGigs, saveGig, unsaveGig } from '../api/gigs';

export type WorkState = 'active' | 'submitted' | 'revision' | 'approved' | 'paid';
type DemoContextValue = {
  role: UserRole | null;
  setRole: (role: UserRole | null) => void;
  completeLogin: (user: ApiUser) => Promise<void>;
  logout: () => Promise<void>;
  gigs: Gig[];
  applications: Application[];
  savedGigIds: string[];
  /** Compatibility value for legacy cards; route-aware screens use workStateByGig. */
  workState: WorkState;
  workStateByGig: Record<string, WorkState>;
  apply: (gig: Gig) => void;
  toggleSaved: (gigId: string) => void;
  updateApplication: (gigId: string, status: ApplicationStatus) => void;
  submitWork: (gigId: string) => void;
  requestRevision: (gigId: string) => void;
  approveAndPay: (gigId: string) => void;
  selectStudent: (gigId: string) => void;
  postGig: (gig: Gig) => void;
};

const DemoContext = createContext<DemoContextValue | undefined>(undefined);

export const DemoProvider = ({ children }: { children: React.ReactNode }) => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [gigs, setGigs] = useState<Gig[]>(mockGigs);
  const [applications, setApplications] = useState<Application[]>(mockApplications);
  const [savedGigIds, setSavedGigIds] = useState(mockGigs.filter((gig) => gig.isSaved).map((gig) => gig.id));
  const [workStateByGig, setWorkStateByGig] = useState<Record<string, WorkState>>({ 'GIG-001': 'active' });
  const refreshGigs = async () => { try { setGigs(await fetchGigs()); } catch (error) { console.warn('Unable to load API gigs; retaining local preview data.', error); } };
  useEffect(() => { currentUser().then(({ user }) => { setRole(user.role); refreshGigs(); }).catch(() => undefined); }, []);

  const value = useMemo<DemoContextValue>(() => ({
    role, setRole, completeLogin: async (user) => { setRole(user.role); await refreshGigs(); }, logout: async () => { await clearToken(); setRole(null); }, gigs, applications, savedGigIds, workState: workStateByGig['GIG-001'] || 'active', workStateByGig,
    apply: (gig) => {
      applyToGig(gig.id, 'My verified skills and past work are a strong match for this project. I can start right away and will keep you updated throughout.').catch((error) => console.warn('Application could not be saved', error));
      setApplications((current) => current.some((item) => item.gigId === gig.id) ? current : [{
      id: `APP-${String(current.length + 1).padStart(3, '0')}`, gigId: gig.id, gigTitle: gig.title,
      businessName: gig.businessName, businessInitials: gig.businessInitials, businessAvatarColor: gig.businessAvatarColor,
      isBusinessVerified: gig.isBusinessVerified, status: 'applied', appliedDate: 'Today', duration: gig.duration, budget: gig.budget,
      }, ...current]);
      setGigs((current) => current.map((item) => item.id === gig.id ? { ...item, applicantCount: item.applicantCount + 1 } : item));
    },
    toggleSaved: (gigId) => setSavedGigIds((ids) => { const exists = ids.includes(gigId); (exists ? unsaveGig(gigId) : saveGig(gigId)).catch((error) => console.warn('Saved gig could not be updated', error)); return exists ? ids.filter((id) => id !== gigId) : [...ids, gigId]; }),
    updateApplication: (gigId, status) => setApplications((current) => current.map((item) => item.gigId === gigId ? { ...item, status, progress: status === 'active' ? 20 : item.progress } : item)),
    submitWork: (gigId) => setWorkStateByGig((current) => ({ ...current, [gigId]: 'submitted' })),
    requestRevision: (gigId) => setWorkStateByGig((current) => ({ ...current, [gigId]: 'revision' })),
    approveAndPay: (gigId) => {
      setWorkStateByGig((current) => ({ ...current, [gigId]: 'paid' }));
      setApplications((current) => current.map((item) => item.gigId === gigId ? { ...item, status: 'completed', progress: 100 } : item));
      setGigs((current) => current.map((item) => item.id === gigId ? { ...item, status: 'completed' } : item));
    },
    selectStudent: (gigId) => {
      const gig = gigs.find((item) => item.id === gigId);
      if (!gig) return;
      setApplications((current) => {
        const existing = current.find((item) => item.gigId === gigId);
        if (existing) return current.map((item) => item.gigId === gigId ? { ...item, status: 'active', progress: 20 } : item);
        return [{ id: `APP-${String(current.length + 1).padStart(3, '0')}`, gigId, gigTitle: gig.title, businessName: gig.businessName, businessInitials: gig.businessInitials, businessAvatarColor: gig.businessAvatarColor, isBusinessVerified: true, status: 'active', appliedDate: 'Today', duration: gig.duration, budget: gig.budget, progress: 20 }, ...current];
      });
      setWorkStateByGig((current) => ({ ...current, [gigId]: 'active' }));
      setGigs((current) => current.map((item) => item.id === gigId ? { ...item, status: 'active' } : item));
    },
    postGig: (gig) => setGigs((current) => [gig, ...current]),
  }), [role, gigs, applications, savedGigIds, workStateByGig]);
  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
};

export const useDemo = () => {
  const value = useContext(DemoContext);
  if (!value) throw new Error('useDemo must be used inside DemoProvider');
  return value;
};
