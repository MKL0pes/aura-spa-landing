import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Instagram, Menu, Phone, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import heroPhoto from "@/assets/hero-massage.jpg.asset.json";
import facialPhoto from "@/assets/facial-ritual.jpg.asset.json";
import oilsPhoto from "@/assets/oils-towels.jpg.asset.json";
import backPhoto from "@/assets/back-massage.jpg.asset.json";
import drainagePhoto from "@/assets/drainage.jpg.asset.json";
import detailPhoto from "@/assets/massage-detail.jpg.asset.json";
import headPhoto from "@/assets/head-massage.jpg.asset.json";
import footPhoto from "@/assets/foot-massage.jpg.asset.json";

const whatsapp = "https://wa.me/5561992891404";

const procedures = [
  { name: "Drenagem Linfática", price: "R$ 69,90", image: drainagePhoto.url, description: "Técnica manual realizada com movimentos suaves, lentos e ritmados, direcionados ao trajeto do sistema linfático. Ideal para quem busca uma experiência corporal leve e cuidadosa, com foco em bem-estar e sensação de leveza." },
  { name: "Massagem Relaxante", price: "R$ 49,90", image: backPhoto.url, description: "Massagem corporal realizada com movimentos contínuos, suaves e ritmados, podendo incluir deslizamentos, amassamentos e pressão moderada. Ideal para desacelerar, relaxar e dedicar um momento ao próprio bem-estar." },
  { name: "Ventosaterapia", price: "R$ 55,90", image: detailPhoto.url, description: "Técnica que utiliza ventosas sobre a pele, produzindo uma pressão negativa localizada e estímulo mecânico dos tecidos. A aplicação é personalizada de acordo com a região trabalhada e a tolerância de cada cliente." },
];

const packages = [
  { name: "Pausa Essencial", price: "R$ 134,90", items: ["3 Massagens Relaxantes"], note: "De R$ 149,70 por R$ 134,90." },
  { name: "Momento Ladrilhar", price: "R$ 219,90", items: ["5 Massagens Relaxantes"], note: "De R$ 249,50 por R$ 219,90." },
  { name: "Ritual da Leveza", price: "R$ 319,90", items: ["5 Drenagens Linfáticas"], note: "De R$ 349,50 por R$ 319,90." },
  { name: "Equilíbrio", price: "R$ 269,90", items: ["2 Drenagens Linfáticas", "2 Massagens Relaxantes", "1 Ventosaterapia"], note: "Total de 5 sessões." },
  { name: "Pausa Ladrilhar", price: "R$ 449,90", items: ["10 Massagens Relaxantes"] },
  { name: "Ritual da Leveza", price: "R$ 619,90", items: ["10 Drenagens Linfáticas"] },
];

const additions = [
  ["Ritual Facial com Argila", "R$ 29,90"],
  ["Ritual de Hidratação dos Pés", "R$ 24,90"],
  ["Massagem Relaxante nos Pés", "R$ 14,90"],
  ["Massagem Relaxante nas Mãos", "R$ 14,90"],
  ["Massagem no Couro Cabeludo", "R$ 14,90"],
  ["Pés + Mãos ou Couro Cabeludo", "R$ 39,90"],
];

const policies: { title: string; body: string; wide?: boolean }[] = [
  { title: "Agendamento", body: "Atendimentos mediante agendamento prévio. Informe nome, procedimento desejado, data e horário de preferência." },
  { title: "Confirmação", body: "Sinal de 30% do valor do procedimento para reservar. O horário só é confirmado após o sinal. O restante é pago no dia." },
  { title: "Remarcações e cancelamentos", body: "Avise com no mínimo 3 horas de antecedência. Cancelamentos ou alterações dentro desse período, e faltas sem aviso, resultam na perda do sinal de 30%, que não será devolvido. Remarcações sujeitas à disponibilidade da agenda.", wide: true },
  { title: "Atrasos", body: "Chegue no horário marcado. Atrasos podem reduzir o tempo do atendimento. Atrasos acima de 15 minutos sem aviso podem ser considerados desistência, com perda do sinal.", wide: true },
  { title: "Pagamento", body: "Pix, dinheiro, cartão ou boleto, conforme disponibilidade. Pacotes em até 3x no cartão." },
  { title: "Promoções", body: "Válidas no período divulgado e não cumulativas, salvo quando especificado." },
  { title: "Pacotes", body: "Utilizados conforme as condições informadas na contratação." },
  { title: "Nosso compromisso", body: "Cada horário é reservado para você. Pontualidade e comunicação mantêm a experiência tranquila para todas." },
];

const mapEmbed =
  "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240.12726344187524!2d-47.82652411592439!3d-15.643059856649444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1790446309500!5m2!1spt-BR!2sbr";
const mapsLink =
  "https://maps.google.com/?q=-15.643059856649444,-47.82652411592439";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ladrilhar Spa | Massagens e rituais de cuidado" },
    { name: "description", content: "Conheça os procedimentos, rituais, pacotes e a política de agendamento do Ladrilhar Spa. Agende pelo WhatsApp." },
    { property: "og:title", content: "Ladrilhar Spa | Massagens e rituais de cuidado" },
    { property: "og:description", content: "Um espaço para desacelerar e dedicar um momento ao seu bem-estar." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Brand({ light = false }: { light?: boolean }) {
  return <a href="#inicio" className={`font-display text-2xl ${light ? "text-primary-foreground" : "text-primary"}`}>Ladrilhar <span className="italic text-gold">Spa</span></a>;
}

function BookingButton({ light = false, label = "Agende seu horário" }: { light?: boolean; label?: string }) {
  return <Button asChild variant={light ? "spa-light" : "spa"} size="spa"><a href={whatsapp} target="_blank" rel="noreferrer">{label}<ArrowRight /></a></Button>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="inicio" className="bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-primary-foreground/20">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <Brand light />
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.14em] text-primary-foreground md:flex">
            <a href="#sobre" className="transition-opacity hover:opacity-65">Sobre</a><a href="#servicos" className="transition-opacity hover:opacity-65">Serviços</a><a href="#pacotes" className="transition-opacity hover:opacity-65">Pacotes</a><a href="#como-chegar" className="transition-opacity hover:opacity-65">Como chegar</a><a href="#politica" className="transition-opacity hover:opacity-65">Política</a><a href="#contato" className="transition-opacity hover:opacity-65">Contato</a>
          </nav>
          <Button variant="spa-light" size="icon" aria-label="Abrir menu" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu /></Button>
        </div>
        {menuOpen && <nav className="mx-4 flex flex-col gap-5 border-t border-primary-foreground/20 bg-primary px-6 py-6 text-sm uppercase tracking-[0.12em] text-primary-foreground md:hidden"><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a><a href="#pacotes" onClick={() => setMenuOpen(false)}>Pacotes</a><a href="#como-chegar" onClick={() => setMenuOpen(false)}>Como chegar</a><a href="#politica" onClick={() => setMenuOpen(false)}>Política</a><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></nav>}
      </header>

      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-primary pb-14 pt-28 text-primary-foreground md:items-center md:pb-0">
        <img src={heroPhoto.url} alt="Massagem relaxante no Ladrilhar Spa" className="absolute inset-0 h-full w-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/45 to-primary/20" />
        <div className="topographic absolute -right-20 -top-24 h-96 w-96 rounded-full opacity-25" />
        <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10">
          <div className="max-w-3xl reveal">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Um momento dedicado a você</p>
            <h1 className="text-[clamp(3.25rem,9vw,7.5rem)] leading-[0.89]">Respire. Desacelere. <span className="italic text-gold">Cuide-se.</span></h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-primary-foreground/80 md:text-lg">Massagens, rituais e experiências de cuidado para o seu bem-estar.</p>
            <div className="mt-8 flex flex-wrap gap-3"><BookingButton light /><Button asChild variant="spa-light" size="spa"><a href="#servicos">Conheça os cuidados<ArrowDown /></a></Button></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="px-5 py-24 md:py-36 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Ladrilhar Spa</p><span className="mt-8 block h-px w-20 bg-gold" /></div>
          <div><h2 className="max-w-3xl text-4xl leading-tight text-primary md:text-6xl">Uma pausa na rotina, um encontro com o próprio <span className="italic text-terracotta">bem-estar.</span></h2><p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground">Cada procedimento é um convite para desacelerar, relaxar e dedicar um momento ao próprio cuidado, respeitando as necessidades e a tolerância de cada cliente.</p></div>
        </div>
      </section>

      <section id="servicos" className="bg-primary px-5 py-24 text-primary-foreground md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Procedimentos avulsos</p><h2 className="mt-4 text-5xl md:text-7xl">Cuidados essenciais</h2></div><p className="max-w-sm text-sm leading-7 text-primary-foreground/65">Escolha o momento que faz sentido para você.</p></div>
          <div className="grid border-t border-primary-foreground/20 md:grid-cols-3">
            {procedures.map((item, index) => <article key={item.name} className="group border-b border-primary-foreground/20 py-8 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
              <div className="relative aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><span className="absolute left-4 top-4 bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">0{index + 1}</span></div>
              <div className="mt-7 flex items-start justify-between gap-4"><h3 className="text-3xl">{item.name}</h3><p className="shrink-0 text-sm font-semibold text-gold">{item.price}</p></div>
              <p className="mt-5 text-sm leading-7 text-primary-foreground/65">{item.description}</p>
              <div className="mt-7"><BookingButton light label="Agendar" /></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-7xl"><div className="text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Rituais de relaxamento</p><h2 className="mt-4 text-5xl text-primary md:text-7xl">Pequenos gestos, cuidado inteiro</h2></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="grid overflow-hidden bg-card shadow-spa sm:grid-cols-2"><img src={facialPhoto.url} alt="Ritual facial com argila" className="h-full min-h-72 w-full object-cover"/><div className="p-7 md:p-9"><p className="text-sm font-semibold text-terracotta">R$ 44,90</p><h3 className="mt-3 text-3xl text-primary">Ritual Facial com Argila</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">Higienização da pele, aplicação de máscara de argila e finalização hidratante.</p><p className="mt-4 text-xs font-semibold leading-5">Não inclui extração de cravos ou poros.</p><div className="mt-6"><BookingButton label="Agendar ritual" /></div></div></article>
            <article className="grid overflow-hidden bg-card shadow-spa sm:grid-cols-2"><img src={footPhoto.url} alt="Ritual de hidratação dos pés" className="h-full min-h-72 w-full object-cover"/><div className="p-7 md:p-9"><p className="text-sm font-semibold text-terracotta">R$ 39,90</p><h3 className="mt-3 text-3xl text-primary">Ritual de Hidratação dos Pés</h3><p className="mt-5 text-sm leading-7 text-muted-foreground">Escalda-pés, higienização, hidratação e massagem relaxante nos pés.</p><p className="mt-4 text-xs font-semibold leading-5">Não inclui lixamento ou remoção de pele.</p><div className="mt-6"><BookingButton label="Agendar ritual" /></div></div></article>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-sage text-primary-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2"><div className="relative min-h-[440px] md:min-h-[680px]"><img src={oilsPhoto.url} alt="Óleos e toalhas para a experiência Ladrilhar" className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex items-center px-6 py-20 md:px-16"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Experiência Ladrilhar</p><h2 className="mt-4 text-5xl leading-tight md:text-7xl">Cinco momentos de cuidado</h2><ul className="mt-9 space-y-4 border-y border-primary-foreground/25 py-8 text-sm md:text-base">{["1 Massagem Relaxante", "1 Drenagem Linfática", "1 Ventosaterapia", "1 Ritual Facial com Argila", "1 Ritual de Hidratação dos Pés"].map((item) => <li key={item} className="flex items-center gap-3"><Sparkles className="size-4 text-gold" />{item}</li>)}</ul><p className="mt-8 font-display text-4xl text-gold">R$ 239,90</p><div className="mt-7"><BookingButton light label="Quero essa experiência" /></div></div></div></div>
      </section>

      <section id="pacotes" className="px-5 py-24 md:py-32 lg:px-10"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Pacotes</p><h2 className="mt-4 text-5xl text-primary md:text-7xl">Para fazer do cuidado um ritual</h2></div><div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">{packages.map((item, index) => <article key={`${item.name}-${item.price}`} className="flex min-h-80 flex-col bg-background p-7 md:p-9"><p className="text-xs font-semibold text-terracotta">0{index + 1}</p><h3 className="mt-8 text-3xl text-primary">{item.name}</h3><ul className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground">{item.items.map((line) => <li key={line}>{line}</li>)}</ul>{item.note && <p className="mt-4 text-xs font-semibold">{item.note}</p>}<div className="mt-auto flex items-end justify-between gap-4 pt-8"><p className="font-display text-2xl text-terracotta">{item.price}</p><Button asChild variant="spa-outline" size="icon" aria-label={`Agendar ${item.name}`}><a href={whatsapp} target="_blank" rel="noreferrer"><ArrowRight /></a></Button></div></article>)}</div></div></section>

      <section className="bg-terracotta px-5 py-24 text-primary-foreground md:py-28 lg:px-10"><div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Complete seu momento</p><h2 className="mt-4 text-5xl md:text-6xl">Adicionais</h2><p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/70">Todos os adicionais podem ser incluídos em qualquer procedimento ou pacote, mediante acréscimo do valor correspondente.</p></div><div className="border-t border-primary-foreground/30">{additions.map(([name, price]) => <div key={name} className="flex justify-between gap-6 border-b border-primary-foreground/30 py-5 text-sm"><span>{name}</span><strong className="shrink-0 text-gold">{price}</strong></div>)}</div></div></section>

      <section id="como-chegar" className="px-5 py-24 md:py-32 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Como chegar</p>
            <h2 className="mt-4 text-5xl leading-tight text-primary md:text-6xl">Onde nos <span className="italic text-terracotta">encontrar.</span></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-muted-foreground">Veja no mapa o ponto onde acontecem os atendimentos e fale com a gente para escolher o melhor dia e horário.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild variant="spa-outline" size="spa"><a href={mapsLink} target="_blank" rel="noreferrer">Abrir no Google Maps<ArrowRight /></a></Button><BookingButton label="Agendar" /></div>
          </div>
          <div className="overflow-hidden border border-border bg-card shadow-spa"><iframe title="Mapa com a localização do Ladrilhar Spa" src={mapEmbed} className="h-[340px] w-full md:h-[460px]" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" /></div>
        </div>
      </section>

      <section id="politica" className="bg-muted px-5 py-24 md:py-32 lg:px-10">
        <div className="mx-auto max-w-6xl border border-border bg-card px-6 py-14 shadow-spa md:px-14 md:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Antes do seu horário</p>
            <h2 className="mt-4 text-5xl text-primary md:text-6xl">Política de agendamento</h2>
            <span className="mx-auto mt-7 block h-px w-16 bg-gold" />
            <p className="mt-7 text-sm leading-7 text-muted-foreground">Para proporcionar um atendimento organizado, tranquilo e exclusivo para cada cliente, pedimos que leia com atenção nossa política de agendamento.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {policies.map((item) => <article key={item.title} className={`border border-border bg-muted p-7 ${item.wide ? "md:col-span-2" : ""}`}><h3 className="text-2xl text-primary">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.body}</p></article>)}
          </div>
          <p className="mt-12 text-center text-sm text-muted-foreground">Obrigada por escolher a Ladrilhar. <span className="italic text-terracotta">Seu momento de pausa começa aqui.</span></p>
        </div>
      </section>

      <section id="contato" className="relative overflow-hidden bg-primary px-5 py-24 text-primary-foreground md:py-36 lg:px-10"><img src={headPhoto.url} alt="Momento de relaxamento" className="absolute inset-0 h-full w-full object-cover opacity-15"/><div className="absolute inset-0 bg-primary/75"/><div className="topographic absolute -bottom-32 -left-20 h-[480px] w-[480px] rounded-full opacity-20"/><div className="relative mx-auto max-w-4xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Seu momento começa aqui</p><h2 className="mt-5 text-5xl leading-tight md:text-8xl">Permita-se uma pausa.</h2><p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-primary-foreground/70">Fale conosco e escolha o cuidado que combina com o seu momento.</p><div className="mt-9"><BookingButton light /></div><div className="mt-10 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8"><a className="flex items-center gap-2" href="tel:+5561992891404"><Phone className="size-4 text-gold" />(61) 99289-1404</a><a className="flex items-center gap-2" href="https://instagram.com/ladrilharspa" target="_blank" rel="noreferrer"><Instagram className="size-4 text-gold" />@ladrilharspa</a></div></div></section>

      <footer className="bg-sage-deep px-5 py-8 text-primary-foreground lg:px-10"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left"><Brand light /><p className="text-xs text-primary-foreground/55">Massagens, rituais e experiências de cuidado.</p><nav className="flex flex-wrap items-center justify-center gap-5 text-xs uppercase tracking-[0.12em] text-primary-foreground/70"><a href="#como-chegar" className="transition-opacity hover:opacity-70">Como chegar</a><a href="#politica" className="transition-opacity hover:opacity-70">Política de agendamento</a></nav></div></footer>
    </main>
  );
}