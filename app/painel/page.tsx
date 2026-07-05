"use client";

import { CalendarCheck, MessageCircle, Percent, Zap } from "lucide-react";
import { PanelHeader } from "@/components/panel/PanelHeader";
import { StatCard } from "@/components/panel/StatCard";
import { ActivityChart } from "@/components/panel/ActivityChart";
import {
  AiStatusBanner,
  LiveConversations,
  RecentAppointments,
} from "@/components/panel/DashboardWidgets";
import { usePanel } from "@/components/panel/PanelProvider";

export default function PainelDashboardPage() {
  const { data, loading } = usePanel();

  if (loading && !data) {
    return (
      <>
        <PanelHeader title="Visão geral" subtitle="Carregando painel..." />
        <div className="flex flex-1 items-center justify-center p-8">
          <div className="size-8 animate-spin rounded-full border-2 border-accent/30 border-t-accent" />
        </div>
      </>
    );
  }

  if (!data) return null;

  const { stats, activity, appointments, conversations, config } = data;

  return (
    <>
      <PanelHeader
        title="Visão geral"
        subtitle="Monitoramento em tempo real da sua secretária de IA"
      />

      <div className="flex-1 space-y-6 p-5 md:p-6">
        <AiStatusBanner
          assistantName={config.assistantName}
          active={stats.activeNow}
          avgResponseSec={stats.avgResponseSec}
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            label="Conversas hoje"
            value={stats.conversationsToday}
            icon={MessageCircle}
            trend="+12% vs ontem"
            accent="green"
            delay={0}
          />
          <StatCard
            label="Agendamentos hoje"
            value={stats.appointmentsToday}
            icon={CalendarCheck}
            trend={`${stats.appointmentsWeek} esta semana`}
            accent="blue"
            delay={0.05}
          />
          <StatCard
            label="Taxa de conversão"
            value={stats.conversionRate}
            suffix="%"
            icon={Percent}
            trend="Conversa → agendamento"
            accent="violet"
            delay={0.1}
          />
          <StatCard
            label="Tempo de resposta"
            value={stats.avgResponseSec}
            suffix="s"
            icon={Zap}
            trend="Média da IA"
            accent="amber"
            delay={0.15}
          />
        </div>

        <ActivityChart data={activity} />

        <div className="grid gap-4 lg:grid-cols-2">
          <RecentAppointments items={appointments} />
          <LiveConversations items={conversations} />
        </div>
      </div>
    </>
  );
}
