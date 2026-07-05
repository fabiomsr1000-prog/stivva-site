"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Bot, Search, User } from "lucide-react";
import type { Conversation } from "@/lib/panel/types";
import {
  colorStage,
  formatPhone,
  formatRelative,
  formatTime,
  labelStage,
} from "@/lib/panel/utils";

type ConversationsViewProps = {
  conversations: Conversation[];
  initialId?: string | null;
};

export function ConversationsView({ conversations, initialId }: ConversationsViewProps) {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(
    initialId ?? conversations[0]?.id ?? null,
  );

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return conversations;
    return conversations.filter(
      (c) =>
        c.contactName.toLowerCase().includes(q) ||
        c.lastMessage.toLowerCase().includes(q) ||
        c.contactPhone.includes(q),
    );
  }, [conversations, query]);

  const selected = conversations.find((c) => c.id === selectedId) ?? filtered[0];

  return (
    <div className="flex h-[calc(100vh-73px)] flex-col md:flex-row">
      <div className="flex w-full flex-col border-b border-white/[0.06] md:w-[340px] md:border-b-0 md:border-r">
        <div className="border-b border-white/[0.06] p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/30" />
            <input
              type="search"
              placeholder="Buscar conversa..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-white/30 focus:border-accent/40 focus:outline-none"
            />
          </div>
        </div>

        <ul className="flex-1 overflow-y-auto p-2">
          {filtered.map((conv) => (
            <li key={conv.id}>
              <button
                type="button"
                onClick={() => setSelectedId(conv.id)}
                className={`mb-1 w-full rounded-xl px-3 py-3 text-left transition ${
                  selected?.id === conv.id
                    ? "border border-accent/25 bg-accent/10"
                    : "border border-transparent hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 text-sm font-bold">
                    {conv.contactName.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium text-white">{conv.contactName}</p>
                      <span className="shrink-0 text-[10px] text-white/30">
                        {formatRelative(conv.lastMessageAt)}
                      </span>
                    </div>
                    <p className="truncate text-xs text-white/40">{conv.lastMessage}</p>
                    <span
                      className={`mt-1.5 inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium ${colorStage(conv.stage)}`}
                    >
                      {labelStage(conv.stage)}
                    </span>
                  </div>
                  {conv.unread > 0 && (
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-[#04130a]">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        {selected ? (
          <>
            <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-accent/30 to-accent-2/20 font-bold text-white">
                  {selected.contactName.charAt(0)}
                </div>
                <div>
                  <p className="font-display font-semibold text-white">{selected.contactName}</p>
                  <p className="text-xs text-white/40">{formatPhone(selected.contactPhone)}</p>
                </div>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium ${colorStage(selected.stage)}`}
              >
                {labelStage(selected.stage)}
              </span>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {selected.messages.map((msg, i) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`flex ${msg.from === "client" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-2.5 ${
                      msg.from === "client"
                        ? "rounded-bl-md border border-white/[0.08] bg-white/[0.05] text-white"
                        : msg.from === "ai"
                          ? "rounded-br-md border border-accent/20 bg-accent/10 text-white"
                          : "rounded-br-md border border-accent-2/20 bg-accent-2/10 text-white"
                    }`}
                  >
                    {msg.from !== "client" && (
                      <p className="mb-1 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                        {msg.from === "ai" ? (
                          <>
                            <Bot className="size-3 text-accent" /> IA
                          </>
                        ) : (
                          <>
                            <User className="size-3" /> Humano
                          </>
                        )}
                      </p>
                    )}
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                    <p className="mt-1 text-[10px] text-white/30">{formatTime(msg.at)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center text-sm text-white/35">
            Selecione uma conversa
          </div>
        )}
      </div>
    </div>
  );
}
