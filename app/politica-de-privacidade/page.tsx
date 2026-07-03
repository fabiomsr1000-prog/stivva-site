import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { privacy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como tratamos os dados de quem visita o nosso site e de quem conversa com as secretárias de IA que instalamos.",
};

export default function PoliticaDePrivacidade() {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Voltar para o início
        </Link>
        <h1 className="mt-8 font-display text-4xl font-bold tracking-tight text-white">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-white/40">Última atualização: {privacy.updatedAt}</p>
        <p className="mt-8 leading-relaxed text-white/65">{privacy.intro}</p>
        {privacy.sections.map((section) => (
          <section key={section.title} className="mt-10">
            <h2 className="font-display text-xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3 leading-relaxed text-white/65">{section.body}</p>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
