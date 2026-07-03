# Stivva — site institucional

Site one-page da agência de secretárias de IA para WhatsApp.
**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion. 100% estático, pronto para a Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Trocar textos

**Toda a copy do site vive em [`lib/content.ts`](lib/content.ts)** — nome da agência, WhatsApp, planos, FAQ, conversa do mockup, política de privacidade. Nada está hardcoded nos componentes.

Procure por `[PREENCHER]` nesse arquivo para achar o que falta preencher:

| Campo | Onde |
| --- | --- |
| `site.name` | Nome definitivo da agência (logo, títulos, SEO) |
| `site.domain` | Domínio final (SEO, OpenGraph, sitemap) |
| `site.whatsappNumber` | Número com DDI+DDD, só dígitos (ex.: `5571999998888`) |
| `site.instagramHandle` / `site.instagramUrl` | Instagram da agência |
| `site.email` | E-mail de contato |
| `site.cnpj` | CNPJ (rodapé) |
| `pain.cards[*].note` | Estatísticas marcadas como `[dado ilustrativo — validar]` |
| Seção Demonstração | Placeholder `[VÍDEO DEMO AQUI]` — suba o vídeo e substitua o player em `components/Demo.tsx` |

## Verificar o build

```bash
npm run build
```

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório. Zero configuração: a Vercel detecta Next.js sozinha.
3. **Domínio:** registre o `.com.br` no [Registro.br](https://registro.br) (~R$ 40/ano). No painel da Vercel, em *Settings → Domains*, adicione o domínio e aponte o DNS no Registro.br (registro `A` para `76.76.21.21` ou `CNAME` para `cname.vercel-dns.com`).
4. Atualize `site.domain` em `lib/content.ts` com o domínio final e faça um novo deploy.
