import type { AppointmentStatus, LeadStage } from "./types";

const stageLabels: Record<LeadStage, string> = {
  novo: "Novo",
  perguntou_preco: "Perguntou preço",
  quer_agendar: "Quer agendar",
  agendou: "Agendou",
  sumiu: "Sumiu",
  atendimento_humano: "Humano",
};

const stageColors: Record<LeadStage, string> = {
  novo: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  perguntou_preco: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  quer_agendar: "bg-violet-500/15 text-violet-300 border-violet-500/25",
  agendou: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  sumiu: "bg-white/5 text-white/45 border-white/10",
  atendimento_humano: "bg-rose-500/15 text-rose-300 border-rose-500/25",
};

const statusLabels: Record<AppointmentStatus, string> = {
  confirmado: "Confirmado",
  pendente: "Pendente",
  cancelado: "Cancelado",
  concluido: "Concluído",
};

const statusColors: Record<AppointmentStatus, string> = {
  confirmado: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  pendente: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  cancelado: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  concluido: "bg-white/5 text-white/50 border-white/10",
};

export function labelStage(stage: LeadStage): string {
  return stageLabels[stage];
}

export function colorStage(stage: LeadStage): string {
  return stageColors[stage];
}

export function labelStatus(status: AppointmentStatus): string {
  return statusLabels[status];
}

export function colorStatus(status: AppointmentStatus): string {
  return statusColors[status];
}

export function formatCurrency(value: number): string {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function formatPhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 13 && digits.startsWith("55")) {
    return `+55 (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`;
  }
  return phone;
}

export function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatRelative(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "agora";
  if (min < 60) return `${min}min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `${h}h`;
  const d = Math.floor(h / 24);
  return `${d}d`;
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function startOfWeek(date: Date): Date {
  const d = new Date(date);
  const day = d.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  d.setDate(d.getDate() + diff);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}
