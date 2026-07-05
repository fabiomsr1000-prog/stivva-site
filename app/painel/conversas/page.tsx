"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { ConversationsView } from "@/components/panel/ConversationsView";
import { usePanel } from "@/components/panel/PanelProvider";

function ConversasContent() {
  const { data, loading } = usePanel();
  const searchParams = useSearchParams();
  const initialId = searchParams.get("id");

  if (loading && !data) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="size-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
      </div>
    );
  }

  return data ? (
    <ConversationsView conversations={data.conversations} initialId={initialId} />
  ) : null;
}

export default function ConversasPage() {
  return (
    <>
      <PanelHeader
        title="Conversas"
        subtitle="Histórico de atendimentos no WhatsApp"
      />
      <Suspense
        fallback={
          <div className="flex flex-1 items-center justify-center">
            <div className="size-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
          </div>
        }
      >
        <ConversasContent />
      </Suspense>
    </>
  );
}
