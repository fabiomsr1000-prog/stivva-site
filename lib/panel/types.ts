export type AppointmentStatus = "confirmado" | "pendente" | "cancelado" | "concluido";

export type LeadStage =
  | "novo"
  | "perguntou_preco"
  | "quer_agendar"
  | "agendou"
  | "sumiu"
  | "atendimento_humano";

export type Service = {
  id: string;
  name: string;
  price: number;
  durationMin: number;
  active: boolean;
};

export type BusinessHours = {
  day: string;
  dayIndex: number;
  open: string;
  close: string;
  enabled: boolean;
};

export type ClinicConfig = {
  name: string;
  assistantName: string;
  tone: string;
  whatsappNumber: string;
  rules: string[];
  services: Service[];
  hours: BusinessHours[];
};

export type Appointment = {
  id: string;
  patientName: string;
  patientPhone: string;
  service: string;
  serviceId: string;
  professional: string;
  start: string;
  end: string;
  status: AppointmentStatus;
  source: "ia" | "manual";
  notes?: string;
};

export type Message = {
  id: string;
  from: "client" | "ai" | "human";
  text: string;
  at: string;
};

export type Conversation = {
  id: string;
  contactName: string;
  contactPhone: string;
  stage: LeadStage;
  lastMessage: string;
  lastMessageAt: string;
  unread: number;
  booked: boolean;
  messages: Message[];
};

export type DashboardStats = {
  conversationsToday: number;
  appointmentsToday: number;
  appointmentsWeek: number;
  conversionRate: number;
  avgResponseSec: number;
  activeNow: boolean;
};

export type ActivityPoint = {
  label: string;
  conversations: number;
  appointments: number;
};

export type PanelSnapshot = {
  stats: DashboardStats;
  activity: ActivityPoint[];
  appointments: Appointment[];
  conversations: Conversation[];
  config: ClinicConfig;
  updatedAt: string;
};
