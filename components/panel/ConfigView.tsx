"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Clock, Plus, Save, Sparkles, Trash2 } from "lucide-react";
import type { ClinicConfig } from "@/lib/panel/types";
import { formatCurrency } from "@/lib/panel/utils";

type ConfigViewProps = {
  config: ClinicConfig;
};

export function ConfigView({ config: initial }: ConfigViewProps) {
  const [config, setConfig] = useState(initial);
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="gborder-strong rounded-2xl p-5 md:p-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-accent/15">
            <Sparkles className="size-6 text-accent" />
          </div>
          <div>
            <h2 className="font-display text-lg font-bold text-white">Company Brain</h2>
            <p className="text-sm text-white/45">
              Tudo que a secretária de IA precisa saber sobre sua clínica
            </p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="gborder rounded-2xl p-5">
          <div className="mb-4 flex items-center gap-2">
            <Bot className="size-4 text-accent" />
            <h3 className="font-display font-semibold text-white">Identidade da IA</h3>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="text-xs font-medium text-white/40">Nome da clínica</span>
              <input
                value={config.name}
                onChange={(e) => setConfig({ ...config, name: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-accent/40 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-white/40">Nome da secretária</span>
              <input
                value={config.assistantName}
                onChange={(e) => setConfig({ ...config, assistantName: e.target.value })}
                className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-accent/40 focus:outline-none"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-white/40">Tom de voz</span>
              <textarea
                value={config.tone}
                onChange={(e) => setConfig({ ...config, tone: e.target.value })}
                rows={3}
                className="mt-1.5 w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white focus:border-accent/40 focus:outline-none"
              />
            </label>
          </div>
        </section>

        <section className="gborder rounded-2xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-accent-2" />
              <h3 className="font-display font-semibold text-white">Horário de funcionamento</h3>
            </div>
          </div>

          <ul className="space-y-2">
            {config.hours.map((h, i) => (
              <li
                key={h.day}
                className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-3 py-2"
              >
                <button
                  type="button"
                  onClick={() => {
                    const hours = [...config.hours];
                    hours[i] = { ...h, enabled: !h.enabled };
                    setConfig({ ...config, hours });
                  }}
                  className={`relative h-5 w-9 shrink-0 rounded-full transition ${
                    h.enabled ? "bg-accent" : "bg-white/15"
                  }`}
                  aria-label={`${h.enabled ? "Desativar" : "Ativar"} ${h.day}`}
                >
                  <span
                    className={`absolute top-0.5 size-4 rounded-full bg-white transition ${
                      h.enabled ? "left-[18px]" : "left-0.5"
                    }`}
                  />
                </button>
                <span className="w-16 text-sm text-white/70">{h.day}</span>
                {h.enabled ? (
                  <div className="flex flex-1 items-center gap-2 text-sm text-white/50">
                    <input
                      type="time"
                      value={h.open}
                      onChange={(e) => {
                        const hours = [...config.hours];
                        hours[i] = { ...h, open: e.target.value };
                        setConfig({ ...config, hours });
                      }}
                      className="rounded-lg border border-white/[0.08] bg-transparent px-2 py-1 text-white"
                    />
                    <span>—</span>
                    <input
                      type="time"
                      value={h.close}
                      onChange={(e) => {
                        const hours = [...config.hours];
                        hours[i] = { ...h, close: e.target.value };
                        setConfig({ ...config, hours });
                      }}
                      className="rounded-lg border border-white/[0.08] bg-transparent px-2 py-1 text-white"
                    />
                  </div>
                ) : (
                  <span className="text-sm text-white/25">Fechado</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="gborder rounded-2xl p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-display font-semibold text-white">Serviços e preços</h3>
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-white/50 hover:text-white"
          >
            <Plus className="size-3.5" /> Adicionar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/[0.06] text-xs uppercase tracking-wider text-white/30">
                <th className="pb-3 pr-4 font-medium">Serviço</th>
                <th className="pb-3 pr-4 font-medium">Preço</th>
                <th className="pb-3 pr-4 font-medium">Duração</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {config.services.map((svc, i) => (
                <tr key={svc.id} className="border-b border-white/[0.04]">
                  <td className="py-3 pr-4">
                    <input
                      value={svc.name}
                      onChange={(e) => {
                        const services = [...config.services];
                        services[i] = { ...svc, name: e.target.value };
                        setConfig({ ...config, services });
                      }}
                      className="w-full rounded-lg border border-transparent bg-transparent px-2 py-1 text-white hover:border-white/[0.08] focus:border-accent/40 focus:outline-none"
                    />
                  </td>
                  <td className="py-3 pr-4 text-white/60">{formatCurrency(svc.price)}</td>
                  <td className="py-3 pr-4 text-white/60">{svc.durationMin} min</td>
                  <td className="py-3">
                    <button
                      type="button"
                      onClick={() => {
                        const services = [...config.services];
                        services[i] = { ...svc, active: !svc.active };
                        setConfig({ ...config, services });
                      }}
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${
                        svc.active
                          ? "border-accent/25 bg-accent/10 text-accent"
                          : "border-white/10 bg-white/5 text-white/35"
                      }`}
                    >
                      {svc.active ? "Ativo" : "Inativo"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="gborder rounded-2xl p-5">
        <h3 className="mb-4 font-display font-semibold text-white">Regras de atendimento</h3>
        <ul className="space-y-2">
          {config.rules.map((rule, i) => (
            <li key={i} className="flex items-center gap-2">
              <input
                value={rule}
                onChange={(e) => {
                  const rules = [...config.rules];
                  rules[i] = e.target.value;
                  setConfig({ ...config, rules });
                }}
                className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm text-white focus:border-accent/40 focus:outline-none"
              />
              <button
                type="button"
                className="flex size-9 shrink-0 items-center justify-center rounded-xl text-white/30 hover:bg-rose-500/10 hover:text-rose-400"
                aria-label="Remover regra"
              >
                <Trash2 className="size-4" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex justify-end pb-6">
        <button
          type="button"
          onClick={handleSave}
          className={`flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition ${
            saved
              ? "bg-accent text-[#04130a]"
              : "bg-accent text-[#04130a] hover:brightness-110"
          }`}
        >
          <Save className="size-4" />
          {saved ? "Salvo!" : "Salvar alterações"}
        </button>
      </div>
    </div>
  );
}
