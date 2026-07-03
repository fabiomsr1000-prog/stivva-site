"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  BatteryFull,
  CalendarCheck,
  Camera,
  CheckCheck,
  ChevronLeft,
  Mic,
  Phone,
  Plus,
  Signal,
  Video,
  Wifi,
  Zap,
} from "lucide-react";
import { chat, type ChatMessage } from "@/lib/content";

const script = chat.script;

function Bubble({ msg, animate }: { msg: ChatMessage; animate: boolean }) {
  if (msg.from === "system") {
    return (
      <motion.div
        initial={animate ? { opacity: 0, y: 10, scale: 0.97 } : false}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="my-1 flex justify-center"
      >
        <div className="flex items-center gap-2 rounded-lg bg-[#1d2b32] px-3 py-2 text-[11px] font-medium text-[#a8b8c0] shadow-md">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
            <CalendarCheck className="size-3" />
          </span>
          {msg.text}
        </div>
      </motion.div>
    );
  }

  const out = msg.from === "client";
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 10, scale: 0.97 } : false}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`flex ${out ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[82%] rounded-lg px-2.5 py-1.5 text-[12.5px] leading-snug text-[#e9edef] shadow ${
          out ? "rounded-tr-none bg-[#005c4b]" : "rounded-tl-none bg-[#202c33]"
        }`}
      >
        <span>{msg.text}</span>
        <span className="ml-2 inline-flex translate-y-[3px] items-center gap-1 text-[9.5px] text-white/50">
          {msg.time}
          {out && <CheckCheck className="size-3 text-[#53bdeb]" />}
        </span>
      </div>
    </motion.div>
  );
}

export function PhoneMockup() {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);
  // com prefers-reduced-motion, mostra a conversa completa sem animar
  const shown = reduced ? script.length : count;

  useEffect(() => {
    if (reduced) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const schedule = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

    const play = (i: number) => {
      if (i >= script.length) {
        // pausa antes de recomeçar o loop
        schedule(() => {
          setCount(0);
          play(0);
        }, 4200);
        return;
      }
      const msg = script[i];
      if (msg.from === "ai") {
        schedule(() => {
          setTyping(true);
          schedule(() => {
            setTyping(false);
            setCount(i + 1);
            play(i + 1);
          }, 1400);
        }, 500);
      } else {
        schedule(
          () => {
            setCount(i + 1);
            play(i + 1);
          },
          i === 0 ? 900 : 1300,
        );
      }
    };

    play(0);
    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  return (
    <div className="relative mx-auto w-fit">
      {/* glow atrás do celular */}
      <div aria-hidden className="pointer-events-none absolute -inset-16 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[110px]" />
        <div className="absolute right-0 top-10 h-[260px] w-[260px] rounded-full bg-accent-2/20 blur-[100px]" />
      </div>

      {/* moldura do celular */}
      <div className="relative h-[600px] w-[295px] rounded-[46px] border border-white/10 bg-[#161b26] p-[10px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] sm:h-[640px] sm:w-[315px]">
        <div
          aria-hidden
          className="absolute left-1/2 top-[18px] z-10 h-[22px] w-[92px] -translate-x-1/2 rounded-full bg-[#05080c]"
        />
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[36px] bg-[#0b141a]">
          {/* barra de status */}
          <div className="flex items-center justify-between bg-[#1f2c34] px-6 pb-1 pt-3.5 text-[10px] font-semibold text-white/85">
            <span>23:47</span>
            <span className="flex items-center gap-1">
              <Signal className="size-3" />
              <Wifi className="size-3" />
              <BatteryFull className="size-4" />
            </span>
          </div>

          {/* cabeçalho do WhatsApp */}
          <div className="flex items-center gap-2.5 border-b border-black/30 bg-[#1f2c34] px-3 py-2.5">
            <ChevronLeft className="size-5 shrink-0 text-[#8696a0]" />
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-display text-sm font-bold text-white">
              {chat.businessName.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[13px] font-semibold text-[#e9edef]">{chat.businessName}</p>
              <p className="text-[10.5px] text-accent">{typing ? "digitando…" : "online"}</p>
            </div>
            <Video className="size-5 shrink-0 text-[#8696a0]" />
            <Phone className="size-4 shrink-0 text-[#8696a0]" />
          </div>

          {/* mensagens */}
          <div className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden px-2.5 pb-2.5">
            <div className="mb-1 self-center rounded-md bg-[#1d2b32] px-2.5 py-1 text-[10px] font-medium text-[#8696a0]">
              Hoje
            </div>
            {script.slice(0, shown).map((msg, i) => (
              <Bubble key={i} msg={msg} animate={!reduced} />
            ))}
            {typing && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="flex justify-start"
              >
                <div className="flex items-center gap-1 rounded-lg rounded-tl-none bg-[#202c33] px-3.5 py-3 shadow">
                  <span className="typing-dot size-1.5 rounded-full bg-[#8696a0]" />
                  <span className="typing-dot size-1.5 rounded-full bg-[#8696a0]" />
                  <span className="typing-dot size-1.5 rounded-full bg-[#8696a0]" />
                </div>
              </motion.div>
            )}
          </div>

          {/* barra de digitação */}
          <div className="flex items-center gap-2 bg-[#1f2c34] px-2 py-2">
            <div className="flex h-9 flex-1 items-center gap-2 rounded-full bg-[#2a3942] px-3 text-[12px] text-[#8696a0]">
              <Plus className="size-4 shrink-0" />
              <span className="flex-1">Mensagem</span>
              <Camera className="size-4 shrink-0" />
            </div>
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-[#05130a]">
              <Mic className="size-4" />
            </div>
          </div>
        </div>
      </div>

      {/* chips flutuantes */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-8 top-24 hidden sm:block"
      >
        <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#111826]/85 px-3.5 py-2.5 shadow-xl backdrop-blur-md">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
            <Zap className="size-4" />
          </span>
          <span>
            <span className="block text-xs font-semibold text-white">{chat.chips.speed.title}</span>
            <span className="block text-[10px] text-white/50">{chat.chips.speed.sub}</span>
          </span>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-8 bottom-28 hidden sm:block"
      >
        <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#111826]/85 px-3.5 py-2.5 shadow-xl backdrop-blur-md">
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent-2/15 text-accent-2">
            <CalendarCheck className="size-4" />
          </span>
          <span>
            <span className="block text-xs font-semibold text-white">{chat.chips.bookings.title}</span>
            <span className="block text-[10px] text-white/50">{chat.chips.bookings.sub}</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
