"use client";

import { PanelHeader } from "@/components/panel/PanelHeader";
import { AgendaCalendar } from "@/components/panel/AgendaCalendar";
import { usePanel } from "@/components/panel/PanelProvider";

export default function AgendaPage() {
  const { data, loading } = usePanel();

  return (
    <>
      <PanelHeader
        title="Agenda"
        subtitle="Agendamentos criados pela IA e pela equipe"
      />
      <div className="flex-1 p-5 md:p-6">
        {loading && !data ? (
          <div className="flex h-64 items-center justify-center">
            <div className="size-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
          </div>
        ) : (
          data && <AgendaCalendar appointments={data.appointments} />
        )}
      </div>
    </>
  );
}
