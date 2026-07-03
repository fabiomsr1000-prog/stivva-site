import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { site } from "@/lib/content";
import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-14">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="flex items-center gap-2.5 font-display text-2xl font-bold tracking-tight text-white">
              <BrandMark className="size-7" />
              <span>
                {site.name.toLowerCase()}
                <span className="text-accent">.</span>
              </span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">{site.tagline}</p>
          </div>
          <div className="flex flex-col gap-3.5 text-sm text-white/60">
            <p className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-accent" aria-hidden />
              {site.cities.join(" · ")} · atendimento em todo o Brasil
            </p>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 transition-colors hover:text-white"
            >
              <Mail className="size-4 shrink-0 text-accent" aria-hidden />
              {site.email}
            </a>
            <Link
              href="/politica-de-privacidade"
              className="text-white/50 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              Política de privacidade
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-white/[0.06] pt-6 text-xs text-white/35 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p>{site.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}
