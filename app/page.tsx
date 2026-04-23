"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { Cpu, Monitor, Zap, Battery, ChevronRight, Wind, Star, Fingerprint, Wifi, Shield, Crosshair, Swords, Trophy, Gift, Package, CheckCircle2, ChevronDown } from 'lucide-react';

export default function TitanGamerLP() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const laptopY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const laptopRotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  const faqs = [
    { question: "O notebook sofre com thermal throttling (perda de FPS por calor)?", answer: "Não. O TitanPro X-14 foi reprojetado com uma câmara de vapor dupla e aplicação industrial de metal líquido Thermal Grizzly. Ele sustenta o TGP máximo de 175W da RTX 4090 de forma contínua, sem quedas de clock." },
    { question: "A garantia de 3 anos cobre danos acidentais?", answer: "Sim. A Blindagem Pro-Care cobre qualquer defeito de fábrica, além de um acionamento anual para danos acidentais (como queda ou derramamento de líquidos). O reparo é feito on-site em até 48 horas no Brasil." },
    { question: "O Kit de Lançamento vem em todas as compras?", answer: "Não, os bônus (Mochila Titan Armor, Mouse Pro-Aim e 1 Ano de Xbox Game Pass Ultimate) são exclusivos para as primeiras 500 unidades do Lote 1. Após isso, os itens serão vendidos separadamente." },
    { question: "É possível fazer upgrade de RAM e SSD?", answer: "Totalmente. Diferente da concorrência, o TitanPro não solda componentes críticos. Você tem acesso a 2 slots SO-DIMM DDR5 (suporta até 96GB) e 2 slots M.2 PCIe Gen5 para armazenamento infinito." },
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#050505] text-zinc-50 overflow-x-hidden font-sans selection:bg-fuchsia-500/30">
      
      {/* ================= BACKGROUND GRID ================= */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[150px] rounded-full" />
      </div>

      {/* ================= FLOATING NAVBAR ================= */}
      <div className="fixed top-6 inset-x-0 w-full z-50 flex justify-center px-4 pointer-events-none">
        <nav className="w-full max-w-4xl bg-zinc-950/70 backdrop-blur-2xl border border-white/10 rounded-full px-2 py-2 flex items-center justify-between shadow-2xl pointer-events-auto">
          <div className="flex items-center gap-2 pl-4 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-tr from-fuchsia-600 to-orange-500 rounded-full flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(217,70,239,0.4)]">
              <Zap size={16} className="text-white fill-white" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">Titan<span className="text-fuchsia-500">Pro</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
            <a href="#specs" className="hover:text-white transition-colors">Hardware</a>
            <a href="#gaming" className="hover:text-white transition-colors">Performance</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <button className="bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(217,70,239,0.3)]">
            Comprar Agora
          </button>
        </nav>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-10 px-6 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* 1. O NOTEBOOK NO TOPO */}
        <motion.div 
          style={{ y: laptopY, rotateX: laptopRotate, perspective: "1200px" }}
          className="relative w-full max-w-[900px] z-10"
        >
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="relative w-full flex justify-center">
            <div className="absolute top-[50%] w-[70%] h-[30%] bg-gradient-to-r from-fuchsia-500/30 via-orange-500/20 to-transparent blur-[100px] pointer-events-none" />
            <Image src="/laptop2.png" alt="TitanPro X-14" width={1400} height={900} quality={100} className="drop-shadow-[0_40px_60px_rgba(0,0,0,0.8)] object-contain scale-100 lg:scale-105" priority />
          </motion.div>
        </motion.div>

        {/* 2. O TEXTO SOBREPOSTO */}
        <div className="relative z-20 -mt-20 sm:-mt-32 lg:-mt-40 text-center max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span> Lote 1 Liberado
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[11rem] font-black tracking-tighter leading-[0.8] mb-8"
          >
            FORÇA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-400 to-zinc-600 drop-shadow-2xl">
              BRUTA.
            </span>
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="space-y-10">
            <p className="text-zinc-400 text-lg md:text-2xl max-w-2xl mx-auto font-medium leading-relaxed">
              Desempenho nível desktop na sua mochila. Jogue títulos AAA em 4K no Ultra ou garanta a vantagem de 240 FPS no competitivo. O fim do gargalo chegou.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <button className="w-full sm:w-auto bg-fuchsia-600 text-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-fuchsia-500 transition-all shadow-[0_0_40px_rgba(217,70,239,0.3)]">
                Comprar Agora
              </button>
              <div className="flex flex-col text-left">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Restam apenas</span>
                <span className="text-orange-500 font-black text-xl leading-none">143 unidades</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= AWARDS / SOCIAL PROOF STRIP ================= */}
      <section className="relative py-10 border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm z-30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter"><Trophy size={24}/> IGN <span className="text-fuchsia-500 text-sm">10/10</span></div>
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter"><Star size={24}/> TECHRADAR <span className="text-orange-500 text-sm">EDITOR'S CHOICE</span></div>
          <div className="flex items-center gap-2 font-black text-xl tracking-tighter"><Zap size={24}/> THE VERGE <span className="text-cyan-500 text-sm">"BEST OF 2026"</span></div>
        </div>
      </section>

      {/* ================= EXPERIÊNCIA GAMER (Cinematográfica) ================= */}
      <section id="gaming" className="relative py-32 px-6 max-w-7xl mx-auto z-30">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-4">
            Feito para esmagar os <br /> requisitos recomendados.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            Com a série RTX 40 acionada pelo DLSS 3 e Frame Generation, o TitanPro X-14 entrega taxas de quadros absurdas mesmo com Ray Tracing no máximo.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="relative w-full aspect-[4/3] lg:aspect-[21/9] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
        >
          <div className="absolute inset-0 bg-zinc-900 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end">
            <div className="flex flex-wrap gap-4">
              
              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-orange-500/50 transition-colors cursor-default">
                <div className="bg-orange-500/20 p-3 rounded-xl border border-orange-500/30">
                  <Swords size={24} className="text-orange-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Cyberpunk 2077 • RT Overdrive</div>
                  <div className="text-3xl font-black text-white">115 <span className="text-sm font-medium text-orange-500">FPS</span></div>
                </div>
              </div>

              <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:border-fuchsia-500/50 transition-colors cursor-default">
                <div className="bg-fuchsia-500/20 p-3 rounded-xl border border-fuchsia-500/30">
                  <Crosshair size={24} className="text-fuchsia-500" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Counter-Strike 2 • Ultra/Competitivo</div>
                  <div className="text-3xl font-black text-white">420+ <span className="text-sm font-medium text-fuchsia-500">FPS</span></div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= VALUE STACK (Ancoragem de Preço / Bônus) ================= */}
      <section className="relative py-20 px-6 max-w-7xl mx-auto z-30">
        <div className="rounded-[3rem] bg-gradient-to-br from-zinc-900 to-black border border-white/10 p-10 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-orange-500/5 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                Exclusivo Lote 1
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Kit Founder's Edition. <br/> Seu arsenal completo.</h2>
              <p className="text-zinc-400 text-lg mb-8">
                Adquirindo hoje, você não leva apenas o notebook mais rápido do mundo. Garantimos um kit de acessórios premium para você já sair jogando, de graça.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-fuchsia-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Mochila Titan Armor (Valor: R$ 899)</h4>
                    <p className="text-zinc-500 text-sm">Blindada e à prova d'água, feita sob medida para o X-14.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-fuchsia-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">Mouse Pro-Aim Wireless (Valor: R$ 650)</h4>
                    <p className="text-zinc-500 text-sm">Sensor de 30K DPI e switches ópticos.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="text-fuchsia-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-lg">1 Ano de Xbox Game Pass Ultimate</h4>
                    <p className="text-zinc-500 text-sm">Centenas de jogos no dia 1 liberados na sua conta.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-zinc-950/80 border border-white/5 p-8 rounded-3xl text-center flex flex-col justify-center items-center h-full relative">
              <Gift className="text-orange-500 w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Bônus Inclusos</h3>
              <p className="text-zinc-400 mb-6">Mais de R$ 1.500 em valor adicionado se você comprar hoje.</p>
              <button className="w-full bg-white text-black px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all">
                Resgatar Meu Kit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENTO SPECS ================= */}
      <section id="specs" className="relative py-20 px-6 max-w-7xl mx-auto z-30">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">
          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 lg:col-span-2 rounded-3xl bg-zinc-900/50 border border-white/5 p-10 relative overflow-hidden flex flex-col justify-end">
            <Zap className="text-orange-500 mb-6" size={40} />
            <h3 className="text-3xl font-black text-white mb-2">RTX 4090 175W</h3>
            <p className="text-zinc-500 font-medium leading-snug">Liberamos a voltagem máxima. Gráficos fotorrealistas e renderização em tempo real sem comprometer os frames.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-1 rounded-3xl bg-zinc-900/50 border border-white/5 p-10 flex flex-col justify-end">
            <Cpu className="text-fuchsia-500 mb-6" size={40} />
            <h3 className="text-3xl font-black text-white mb-2">i9 Gen 14</h3>
            <p className="text-zinc-500 font-medium italic">O cérebro da operação. 24 núcleos destravados.</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="lg:col-span-1 row-span-1 lg:row-span-2 rounded-3xl bg-gradient-to-br from-fuchsia-600 to-purple-800 p-10 flex flex-col">
            <Monitor className="text-white mb-6" size={40} />
            <div className="mt-auto">
              <h3 className="text-4xl font-black text-white leading-none mb-4">240Hz <br/> 1ms</h3>
              <p className="text-white/80 text-sm font-bold">A vantagem injusta. Veja os inimigos antes.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="md:col-span-2 rounded-3xl bg-zinc-900/50 border border-white/5 p-10 flex items-center gap-10">
            <div className="flex-1">
              <Wind className="text-cyan-400 mb-6" size={40} />
              <h3 className="text-3xl font-black text-white mb-2">Gelo sob pressão</h3>
              <p className="text-zinc-500 font-medium">Dupla câmara de vapor e metal líquido Thermal Grizzly de fábrica para queimar FPS, não a sua mão.</p>
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="rounded-3xl bg-zinc-950 border border-white/10 p-10 flex flex-col justify-end group">
             <Wifi className="text-zinc-400 group-hover:text-white transition-colors mb-6" size={40} />
             <h3 className="text-2xl font-black text-white mb-1">WI-FI 7</h3>
             <p className="text-zinc-600 font-bold text-xs uppercase tracking-widest">Ping sub-ms</p>
          </motion.div>
        </div>
      </section>

      {/* ================= FAQ (Quebra de Objeções) ================= */}
      <section id="faq" className="relative py-24 px-6 max-w-3xl mx-auto z-30">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-zinc-400">Tudo o que você precisa saber antes de fazer o upgrade definitivo.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/50 border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors"
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            >
              <div className="p-6 flex items-center justify-between">
                <h4 className="font-bold text-white text-lg pr-8">{faq.question}</h4>
                <ChevronDown className={`shrink-0 text-fuchsia-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
              </div>
              {openFaq === index && (
                <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER CTA FINAL ================= */}
      <footer id="buy" className="relative bg-black pt-40 pb-20 border-t border-white/5 mt-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-fuchsia-600/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Package className="mx-auto text-fuchsia-500 mb-8 w-16 h-16 opacity-80" />
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            Atenção: Promoção se encerra com o Lote 1
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Pronto para o Próximo Nível.</h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Última chance de garantir o TitanPro X-14 com os <span className="text-white font-bold">R$ 1.500 em bônus inclusos</span> e Frete Expresso grátis.
          </p>
          
          <div className="flex justify-center mb-8">
             <div className="text-left bg-zinc-900/50 border border-white/5 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-8">
               <div>
                 <p className="text-zinc-500 line-through text-lg">De R$ 24.999</p>
                 <p className="text-4xl font-black text-white">Por R$ 21.999 <span className="text-sm text-zinc-400 font-medium tracking-normal">à vista</span></p>
                 <p className="text-orange-500 text-sm font-bold mt-1">Ou 12x de R$ 2.083 sem juros</p>
               </div>
               <button className="bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white px-10 py-5 rounded-xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(217,70,239,0.4)] whitespace-nowrap">
                  Finalizar Compra
               </button>
             </div>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-zinc-500 text-xs font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2"><Shield size={14}/> Compra Segura</span>
            <span className="flex items-center gap-2"><Shield size={14}/> 3 Anos de Garantia</span>
          </div>

          <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            <p>TitanGamer X-Pro Labs — 2026</p>
            <div className="flex gap-10 mt-6 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Termos de Compra</a>
              <a href="#" className="hover:text-white transition-colors">Especificações Detalhadas</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}