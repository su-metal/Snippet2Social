
'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  isPro: boolean;
  usageCount: number;
  maxUsage: number;
  togglePro: () => void;
  incrementUsage: () => void;
  resetUsage: () => void;
}

const MAX_FREE_USAGE = 5;

const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * UserProvider manages the user's plan status and usage tracking.
 * We use explicit prop typing instead of React.FC to avoid common "missing children" errors in some TS configurations.
 */
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPro, setIsPro] = useState(false);
  const [usageCount, setUsageCount] = useState(0);

  const togglePro = () => setIsPro((prev) => !prev);
  const incrementUsage = () => setUsageCount((prev) => prev + 1);
  const resetUsage = () => setUsageCount(0);

  const maxUsage = isPro ? Infinity : MAX_FREE_USAGE;

  return (
    <UserContext.Provider value={{ 
      isPro, 
      usageCount, 
      maxUsage, 
      togglePro, 
      incrementUsage, 
      resetUsage 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
