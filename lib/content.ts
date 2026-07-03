// =====================================================================
// TODO O TEXTO DO SITE VIVE NESTE ARQUIVO.
// Troque qualquer copy aqui — nada está hardcoded nos componentes.
// Itens marcados com [PREENCHER] aguardam os seus dados reais.
// =====================================================================

export const site = {
  name: "Stivva",
  domain: "https://stivva.com",
  tagline: "Secretária de IA para o seu WhatsApp — seu negócio atendendo 24 horas.",
  description:
    "Instalamos uma secretária de IA humanizada no WhatsApp do seu negócio: resposta em segundos, agendamento automático na sua agenda e follow-up de quem some — 24 horas por dia. Rio de Janeiro e todo o Brasil.",
  whatsappNumber: "5521984195055",
  whatsappDefaultMessage: "Olá! Quero ver a secretária de IA funcionando",
  email: "recepta002@gmail.com", // [PREENCHER] e-mail @stivva quando tiver
  cnpj: "CNPJ [PREENCHER quando tiver]",
  cities: ["Rio de Janeiro · RJ"],
};

export function waLink(message: string = site.whatsappDefaultMessage): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Demonstração", href: "#demonstracao" },
  { label: "Planos", href: "#planos" },
  { label: "Perguntas", href: "#perguntas" },
];

export const hero = {
  badge: "Secretária de IA para WhatsApp",
  h1Start: "Seu WhatsApp respondendo em segundos.",
  h1Highlight: "Mesmo às 3 da manhã.",
  sub: "Instalamos uma secretária de IA no WhatsApp do seu negócio: ela atende como gente, agenda direto na sua agenda e nunca deixa cliente sem resposta. Você só olha a agenda cheia.",
  ctaPrimary: "Ver funcionando no meu WhatsApp",
  ctaSecondary: "Como funciona",
};

export const proof = [
  "Resposta média < 10 segundos",
  "Atendimento 24/7",
  "Agendamento automático",
  "Follow-up de quem some",
];

export type ChatMessage = {
  from: "client" | "ai" | "system";
  text: string;
  time?: string;
};

export const chat = {
  businessName: "Clínica Aura",
  script: [
    {
      from: "client",
      text: "Oi! Vi vocês no Instagram 🙈 ainda respondem essa hora? Quanto tá a limpeza de pele?",
      time: "23:47",
    },
    {
      from: "ai",
      text: "Oi! Respondemos sim, pode falar 😊 A limpeza de pele profunda está R$ 180, com avaliação inclusa. Quer que eu já veja um horário pra você?",
      time: "23:47",
    },
    { from: "client", text: "Quero! Sábado de manhã tem?", time: "23:48" },
    {
      from: "ai",
      text: "Tem sim! Sábado tenho 9h30 ou 11h livres. Qual fica melhor?",
      time: "23:48",
    },
    { from: "client", text: "9h30 👍", time: "23:48" },
    {
      from: "ai",
      text: "Fechado! Agendei sábado às 9h30 pra você ✨ Na sexta te mando um lembrete por aqui. Qualquer coisa, é só chamar!",
      time: "23:49",
    },
    { from: "system", text: "Agendado · Sábado, 9h30 · Limpeza de pele" },
  ] as ChatMessage[],
  chips: {
    speed: { title: "Respondido em 7s", sub: "agora mesmo" },
    bookings: { title: "+6 agendamentos", sub: "hoje, fora do expediente" },
  },
};

export const pain = {
  eyebrow: "O problema",
  title: "Quanto cliente você perdeu essa semana?",
  sub: "Ninguém manda mensagem duas vezes. Se a resposta demora, o cliente já está conversando com o concorrente.",
  cards: [
    {
      stat: "62%",
      text: "das mensagens chegam fora do horário comercial — e ficam no vácuo até o dia seguinte.",
      note: "[dado ilustrativo — validar]",
    },
    {
      stat: "5 min",
      text: "é o tempo que um cliente interessado espera por resposta antes de esfriar e procurar outro lugar.",
      note: "[dado ilustrativo — validar]",
    },
    {
      stat: "3 em 10",
      text: "horários marcados viram falta quando ninguém confirma o agendamento na véspera.",
      note: "[dado ilustrativo — validar]",
    },
  ],
};

export const howItWorks = {
  eyebrow: "Como funciona",
  title: "No ar em 48 horas. Sem você mexer em nada.",
  sub: "Três passos e o seu WhatsApp nunca mais fica sem resposta.",
  steps: [
    {
      number: "01",
      title: "Conversamos 15 minutos",
      text: "Você nos conta como funciona seu atendimento: serviços, valores, horários e o jeito de falar com o seu cliente.",
    },
    {
      number: "02",
      title: "Instalamos em até 48h",
      text: "Sem trocar de número, sem app novo, sem mexer na sua rotina. Tudo configurado por nós, do início ao fim.",
    },
    {
      number: "03",
      title: "Sua secretária assume",
      text: "Ela responde, agenda e confirma sozinha — e você acompanha tudo. Seu único trabalho é ver a agenda encher.",
    },
  ],
};

export const features = {
  eyebrow: "O que ela faz",
  title: "Uma recepcionista que nunca dorme, nunca esquece e nunca deixa no vácuo.",
  items: [
    {
      title: "Atende como gente",
      text: "Conversa natural, com empatia e no tom do seu negócio — em texto e em áudio. A maioria dos clientes nem percebe que é IA.",
    },
    {
      title: "Agenda sozinha",
      text: "Consulta os horários livres e marca direto no seu Google Calendar. Você abre a agenda e ela já está preenchida.",
    },
    {
      title: "Follow-up automático",
      text: "Cliente parou de responder? Ela retoma a conversa em 3 tempos — 20 minutos, 24h e 48h — sem parecer insistente.",
    },
    {
      title: "Plantão 24/7",
      text: "Meia-noite, domingo, feriado: toda mensagem respondida em segundos. Sem folga, sem hora extra, sem mau humor.",
    },
    {
      title: "Passa pra você na hora certa",
      text: "Assunto sério ou fora do combinado? Ela transfere a conversa pra você com um resumo do que o cliente precisa.",
    },
    {
      title: "Painel com cada cliente",
      text: "Histórico de conversas, agendamentos e funil de cada cliente organizado num painel simples — nos planos maiores.",
    },
  ],
};

export const demo = {
  eyebrow: "Demonstração",
  title: "Não acredite. Teste.",
  text: "Mandamos a secretária de IA conversar com você agora — no seu WhatsApp, sobre o seu tipo de negócio. Você faz as perguntas que os seus clientes fariam e vê a resposta chegar em segundos.",
  cta: "Quero testar no meu WhatsApp",
  ctaMessage: "Olá! Quero testar a secretária de IA no meu WhatsApp",
  videoLabel: "[VÍDEO DEMO AQUI]",
  videoHint: "vídeo de 60–90s mostrando uma conversa real",
};

export type Plan = {
  name: string;
  badge?: string;
  monthly: string;
  installLabel: string;
  blurb: string;
  features: string[];
  highlight: boolean;
  cta: string;
  waMessage: string;
};

export const pricing = {
  eyebrow: "Planos",
  title: "Escolha o tamanho da sua recepção",
  sub: "Todos os planos incluem instalação completa, personalização para o seu negócio e suporte.",
  plans: [
    {
      name: "Essencial",
      monthly: "R$ 197",
      installLabel: "instalação única de R$ 1.497",
      blurb: "Para quem quer parar de perder cliente por falta de resposta.",
      features: [
        "Secretária de IA no seu WhatsApp",
        "Respostas 24/7 em texto e áudio",
        "Personalizada para o seu negócio",
        "Transbordo para atendimento humano",
        "Suporte incluso",
      ],
      highlight: false,
      cta: "Começar com o Essencial",
      waMessage: "Olá! Tenho interesse no plano Essencial da secretária de IA",
    },
    {
      name: "Completo",
      badge: "Mais escolhido",
      monthly: "R$ 297",
      installLabel: "instalação única de R$ 2.497",
      blurb: "Para quem quer a agenda cheia sem encostar no celular.",
      features: [
        "Tudo do Essencial",
        "Agendamento automático no Google Calendar",
        "Follow-up automático em 3 tempos",
        "Confirmação e lembrete de horário",
        "Painel simples de atendimentos",
      ],
      highlight: true,
      cta: "Quero o Completo",
      waMessage: "Olá! Tenho interesse no plano Completo da secretária de IA",
    },
    {
      name: "Premium",
      monthly: "R$ 497",
      installLabel: "instalação a partir de R$ 3.497",
      blurb: "Para quem quer visão total do funil e integrações sob medida.",
      features: [
        "Tudo do Completo",
        "CRM completo com funil visual",
        "Resumo e histórico de cada cliente",
        "Dashboard de resultados",
        "Integrações sob medida",
      ],
      highlight: false,
      cta: "Falar sobre o Premium",
      waMessage: "Olá! Tenho interesse no plano Premium da secretária de IA",
    },
  ] as Plan[],
  reassurance: ["Sem fidelidade", "Instalação em 48h", "Suporte incluso em todos os planos"],
};

export const niches = {
  eyebrow: "Para quem é",
  title: "Feita para negócios que vivem de agenda",
  line: "Se o seu negócio vive de agenda, é pra você.",
  items: [
    "Clínicas de estética",
    "Odontologia",
    "Nutricionistas",
    "Fisioterapia",
    "Psicologia",
    "Barbearias",
    "Salões premium",
    "Estúdios de pilates",
    "Veterinárias",
  ],
};

export const faq = {
  eyebrow: "Perguntas frequentes",
  title: "O que todo mundo pergunta antes de contratar",
  items: [
    {
      q: "Parece robô?",
      a: "Não. Ela conversa com naturalidade, tem empatia e responde até em áudio, no tom do seu negócio. Na prática, a maioria dos clientes não percebe que está falando com uma IA — e quem percebe, elogia a rapidez.",
    },
    {
      q: "Preciso trocar de número ou instalar algum app?",
      a: "Não. A secretária funciona no WhatsApp que você já usa, com o mesmo número. Você não instala nada, não aprende ferramenta nova e não muda nada na sua rotina.",
    },
    {
      q: "E se a IA não souber responder?",
      a: "Ela reconhece na hora quando o assunto foge do combinado e transfere a conversa para você, com um resumo do que o cliente precisa. Nenhum cliente fica sem resposta.",
    },
    {
      q: "Quanto tempo leva para instalar?",
      a: "Até 48 horas depois da nossa primeira conversa. Nesse período, configuramos serviços, valores, horários e o jeito de falar do seu atendimento — tudo por nossa conta.",
    },
    {
      q: "Tem fidelidade?",
      a: "Não. Sem contrato de fidelidade e sem multa: você pode cancelar quando quiser. Preferimos te manter pelo resultado, não pela burocracia.",
    },
    {
      q: "Funciona com áudio?",
      a: "Sim. Ela entende os áudios que seus clientes mandam e também pode responder em áudio, com voz natural — porque muito cliente prefere falar a digitar.",
    },
    {
      q: "Meus dados e os dos meus clientes ficam seguros?",
      a: "Sim. As conversas são usadas apenas para o seu atendimento, com sigilo e em conformidade com a LGPD, a lei brasileira de proteção de dados. Nada é vendido nem compartilhado, e você pode pedir a exclusão a qualquer momento.",
    },
    {
      q: "Quanto custa depois da instalação?",
      a: "Só a mensalidade fixa do seu plano. Sem cobrança por mensagem, sem taxa escondida e sem surpresa no fim do mês.",
    },
  ],
};

export const finalCta = {
  title: "Cada hora sem resposta é um cliente no concorrente.",
  sub: "Chame agora e veja a secretária de IA respondendo no seu WhatsApp em poucos minutos.",
  cta: "Chamar no WhatsApp",
};

export const privacy = {
  updatedAt: "2 de julho de 2026",
  intro:
    "Esta política explica, em linguagem simples, como tratamos os dados de quem visita o nosso site e de quem conversa com as secretárias de IA que instalamos.",
  sections: [
    {
      title: "Quem somos",
      body: `A ${site.name} é uma agência de atendimento inteligente para WhatsApp, com base no Rio de Janeiro (RJ) e atuação em todo o Brasil. Para dúvidas sobre esta política, fale com a gente pelo e-mail ${site.email}.`,
    },
    {
      title: "Quais dados coletamos",
      body: "No site, não coletamos dados pessoais automaticamente: não usamos formulários próprios e o contato acontece pelo WhatsApp, por iniciativa sua. Nas conversas com a secretária de IA dos nossos clientes, podem ser tratados dados como nome, número de telefone, mensagens trocadas e informações de agendamento (serviço, data e horário).",
    },
    {
      title: "Para que usamos os dados",
      body: "Usamos os dados exclusivamente para operar o atendimento contratado: responder mensagens, agendar horários, enviar lembretes e confirmações e permitir que o dono do negócio acompanhe as conversas no painel. Não usamos os dados para outras finalidades.",
    },
    {
      title: "Compartilhamento",
      body: "Não vendemos dados pessoais. As informações das conversas ficam acessíveis apenas ao negócio que você contatou e aos provedores de tecnologia estritamente necessários para o funcionamento do serviço, sempre sob obrigações de confidencialidade.",
    },
    {
      title: "Armazenamento e segurança",
      body: "Adotamos medidas técnicas e organizacionais para proteger os dados, incluindo acesso restrito, criptografia em trânsito e retenção pelo tempo necessário à prestação do serviço ou ao cumprimento de obrigações legais.",
    },
    {
      title: "Seus direitos (LGPD)",
      body: `Nos termos da Lei Geral de Proteção de Dados (Lei 13.709/2018), você pode solicitar a qualquer momento: confirmação do tratamento, acesso, correção, anonimização ou exclusão dos seus dados. Basta enviar um e-mail para ${site.email} que responderemos em até 15 dias.`,
    },
    {
      title: "Cookies",
      body: "Este site não utiliza cookies de rastreamento próprios. Caso ferramentas de análise de audiência venham a ser adotadas, esta política será atualizada antes.",
    },
    {
      title: "Alterações desta política",
      body: "Podemos atualizar esta política para refletir melhorias no serviço ou mudanças legais. A data da última atualização aparece no topo desta página.",
    },
  ],
};
