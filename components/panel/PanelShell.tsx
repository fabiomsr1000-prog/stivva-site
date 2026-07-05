"use client";

import type { ReactNode } from "react";
import { PanelProvider } from "./PanelProvider";
import { PanelSidebar } from "./PanelSidebar";
import { PanelMobileNav } from "./PanelMobileNav";

export function PanelShell({ children }: { children: ReactNode }) {
  return (
    <PanelProvider>
      <div className="relative flex min-h-screen bg-bg text-white">
        <div
          className="panel-glow -left-32 top-0 size-[420px] bg-accent/10"
          aria-hidden
        />
        <div
          className="panel-glow right-0 top-1/3 size-[360px] bg-accent-2/8"
          aria-hidden
        />
        <div className="panel-grid pointer-events-none absolute inset-0" aria-hidden />

        <PanelSidebar />

        <div className="relative flex min-h-screen min-w-0 flex-1 flex-col pb-20 md:pb-0">
          {children}
        </div>
        <PanelMobileNav />
      </div>
    </PanelProvider>
  );
}
