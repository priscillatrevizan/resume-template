import { useContext } from "react";
import DataContext from "../context/DataProvider";

export function useResume() {
  const ctx = useContext(DataContext as any);
  if (!ctx) throw new Error("useResume must be used within a DataProvider");
  return ctx;
}

export default useResume;
