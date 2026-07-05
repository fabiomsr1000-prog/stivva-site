"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { PanelSnapshot } from "@/lib/panel/types";
import { getDemoSnapshot } from "@/lib/panel/demo-data";

type PanelContextValue = {
  data: PanelSnapshot | null;
  loading: boolean;
  refresh: () => Promise<void>;
};

const PanelContext = createContext<PanelContextValue | null>(null);

export function PanelProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<PanelSnapshot | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/panel");
      if (res.ok) {
        setData(await res.json());
      } else {
        setData(getDemoSnapshot());
      }
    } catch {
      setData(getDemoSnapshot());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
    const id = setInterval(() => void refresh(), 30_000);
    return () => clearInterval(id);
  }, [refresh]);

  const value = useMemo(() => ({ data, loading, refresh }), [data, loading, refresh]);

  return <PanelContext.Provider value={value}>{children}</PanelContext.Provider>;
}

export function usePanel() {
  const ctx = useContext(PanelContext);
  if (!ctx) throw new Error("usePanel must be used within PanelProvider");
  return ctx;
}
