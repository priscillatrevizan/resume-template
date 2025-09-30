import { useContext } from "react";
import DataContext, { type Resume } from "../context/DataProvider";

export function useResume(): Resume {
  const ctx = useContext(DataContext as React.Context<Resume | null>);
  if (!ctx) throw new Error("useResume must be used within a DataProvider");
  return ctx;
}

export default useResume;
