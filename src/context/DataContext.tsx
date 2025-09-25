import React, { createContext, useContext, useMemo } from "react";
import resumeData from "../data/resume.json";

export type Resume = typeof resumeData;

const DataContext = createContext<Resume | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // useMemo to avoid re-creating object on each render
  const value = useMemo(() => resumeData, []);
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export function useResume() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useResume must be used within a DataProvider");
  return ctx;
}

export default DataContext;
