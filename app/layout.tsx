import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: `${site.name} — Secretária de IA para WhatsApp | Atendimento 24h`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "secretária de IA",
    "atendimento automático WhatsApp",
    "agendamento automático",
    "IA para clínicas",
    "atendente virtual WhatsApp",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.domain,
    siteName: site.name,
    title: `${site.name} — Secretária de IA para WhatsApp`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Secretária de IA para WhatsApp`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b0f14",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.domain,
  email: site.email,
  image: `${site.domain}/opengraph-image`,
  priceRange: "R$197 - R$397 /mês",
  areaServed: [
    { "@type": "City", name: "Rio de Janeiro" },
    { "@type": "Country", name: "Brasil" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-medium focus:text-[#05130a]"
        >
          Pular para o conteúdo
        </a>
        <Providers>{children}</Providers>
        <div aria-hidden className="grain" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
