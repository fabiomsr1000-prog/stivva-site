"use client";

import { PanelHeader } from "@/components/panel/PanelHeader";
import { ConfigView } from "@/components/panel/ConfigView";
import { usePanel } from "@/components/panel/PanelProvider";

export default function ConfiguracaoPage() {
  const { data, loading } = usePanel();

  return (
    <>
      <PanelHeader
        title="Configuração"
        subtitle="Serviços, horários e regras da secretária de IA"
      />
      <div className="flex-1 p-5 md:p-6">
        {loading && !data ? (
          <div className="flex h-64 items-center justify-center">
            <div className="size-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
          </div>
        ) : (
          data && <ConfigView config={data.config} />
        )}
      </div>
    </>
  );
}
