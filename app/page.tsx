"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Cpu, Monitor, Zap, Battery, ChevronRight, Wind, Layers, Crosshair } from 'lucide-react';

export default function TitanGamerLP() {
  const containerRef = useRef(null);
  
  // Efeito Parallax 3D aplicado EXCLUSIVAMENTE ao notebook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const laptopY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const laptopRotate = useTransform(scrollYProgress, [0, 0.5], [0, -5]);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#09090b] text-zinc-50 overflow-x-hidden font-sans">
      
      {/* ================= BACKGROUND AMBIENCE ================= */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[150px] rounded-full" />
      </div>

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-tr from-fuchsia-600 to-orange-500 rounded-xl flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-[0_0_20px_rgba(217,70,239,0.3)]">
              <Zap size={24} className="text-white fill-white" />
            </div>
            <span className="text-xl font-black tracking-tighter">TITAN<span className="text-fuchsia-500">PRO</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400 uppercase tracking-widest">
            <a href="#specs" className="hover:text-fuchsia-400 transition-colors">Specs</a>
            <a href="#features" className="hover:text-fuchsia-400 transition-colors">Features</a>
          </div>

          <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-fuchsia-500/20">
            RESERVAR
          </button>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 max-w-7xl mx-auto z-20 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full" style={{ perspective: "1000px" }}>
          
          {/* TEXTO */}
          <div className="space-y-6 text-center lg:text-left relative z-30 lg:pr-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold tracking-widest uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
              </span>
              Série X-Pro 2026
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              PERFORMANCE <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-orange-400 drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]">
                SEM LIMITES.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-zinc-400 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              Esqueça o thermal throttling. Projetamos o TitanPro para sustentar o clock máximo da RTX 4090 horas a fio, sem quedas de FPS. Construído para quem leva o setup a sério.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start pt-4"
            >
              <button className="w-full sm:w-auto bg-gradient-to-r from-fuchsia-600 to-orange-500 text-white px-8 py-4 rounded-xl font-black hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(217,70,239,0.25)] hover:-translate-y-1">
                MONTAR O MEU <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* NOTEBOOK 3D */}
          <motion.div 
            style={{ y: laptopY, rotateX: laptopRotate }}
            className="relative w-full max-w-[1050px] mx-auto z-40 mt-12 lg:mt-0 lg:ml-[-10%] lg:-mb-64"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full flex justify-center items-center"
            >
              <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[70%] h-[30%] bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-orange-500/20 blur-[60px] rounded-full pointer-events-none" />
              
              <Image 
                src="/laptop_1.png" 
                alt="TitanGamer X-Pro 3D"
                width={1200}
                height={800}
                quality={100}
                className="drop-shadow-[0_40px_40px_rgba(0,0,0,0.8)] object-contain relative z-10 scale-110 lg:scale-125"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ================= SEÇÃO DE SPECS ================= */}
      <section id="specs" className="relative bg-zinc-900/40 backdrop-blur-2xl border-t border-white/5 pt-16 lg:pt-24 pb-20 px-6 z-10">
        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { icon: Cpu, title: "i9-14900HX", sub: "24 Núcleos", color: "text-fuchsia-500" },
              { icon: Zap, title: "RTX 4090", sub: "175W TGP", color: "text-orange-500" },
              { icon: Monitor, title: "240Hz Mini-LED", sub: "Tempo de resposta 1ms", color: "text-fuchsia-400" },
              { icon: Battery, title: "99.9Wh", sub: "Limite máximo para voos", color: "text-orange-400" },
            ].map((spec, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 lg:p-8 rounded-[1.5rem] bg-zinc-950/60 border border-white/5 flex flex-col items-center lg:items-start group hover:border-fuchsia-500/30 transition-colors"
              >
                <spec.icon className={`${spec.color} mb-4 group-hover:scale-110 transition-transform`} size={24} />
                <h3 className="text-xl lg:text-2xl font-bold text-zinc-100">{spec.title}</h3>
                <p className="text-zinc-500 text-xs lg:text-sm uppercase tracking-widest font-semibold mt-1">{spec.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURE 1: REFRIGERAÇÃO ================= */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-square rounded-[2.5rem] bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-white/5 overflow-hidden relative flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
              <Wind className="text-cyan-500/50 w-64 h-64 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div className="flex items-center gap-3 text-cyan-500 font-bold tracking-widest uppercase text-sm">
              <Wind size={18} /> Refrigeração Industrial
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white">
              Frio sob <br /> pressão extrema.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Não adianta ter uma RTX 4090 se o sistema ferve em 10 minutos de gameplay. Redesenhamos todo o chassi para acomodar uma câmara de vapor customizada e ventoinhas de polímero com 89 pás.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-zinc-300"><Layers className="text-cyan-500" size={20} /> Zero thermal throttling sob estresse contínuo.</li>
              <li className="flex items-center gap-3 text-zinc-300"><Zap className="text-cyan-500" size={20} /> Aplicação de fábrica com Thermal Grizzly Conductonaut.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURE 2: TELA E CORES ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-20 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 text-fuchsia-500 font-bold tracking-widest uppercase text-sm">
              <Monitor size={18} /> O fim do Ghosting
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white">
              Preto absoluto. <br /> Cores reais.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Deixamos os painéis IPS tradicionais no passado. Com a tecnologia Mini-LED, o TitanPro bate 1.000 nits de pico de brilho e entrega um contraste insano através de milhares de zonas de iluminação independentes.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-zinc-300"><Crosshair className="text-fuchsia-500" size={20} /> Calibração Pantone de fábrica (Delta E &lt; 1).</li>
              <li className="flex items-center gap-3 text-zinc-300"><Zap className="text-fuchsia-500" size={20} /> Jogue a 240Hz com tempo de resposta real de 1ms.</li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="aspect-video rounded-[2.5rem] bg-zinc-800 border border-white/5 overflow-hidden relative shadow-[0_0_50px_rgba(217,70,239,0.15)] flex flex-col">
                <div className="flex-1 bg-gradient-to-br from-fuchsia-600 via-purple-600 to-orange-500 opacity-80" />
                <div className="flex-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-black/50 px-6 py-3 rounded-full text-white font-bold tracking-widest border border-white/20">HDR 1000 ATIVADO</div>
                </div>
             </div>
          </motion.div>

        </div>
      </section>

      {/* ================= CALL TO ACTION / FOOTER ================= */}
      <footer className="relative mt-20 border-t border-white/10 bg-zinc-950 pt-20 pb-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent opacity-50" />
        
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-20">
          <h2 className="text-4xl font-black">Seu setup definitivo chegou.</h2>
          <p className="text-zinc-400">As primeiras 500 unidades do lote de lançamento acompanham mochila blindada e mousepad estendido.</p>
          <button className="bg-white text-black px-10 py-4 rounded-xl font-black hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            GARANTIR MINHA UNIDADE
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-sm">
          <p>© 2026 TitanGamer. Desenvolvido por Leonardo Ferreira.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-300">Termos Técnicos</a>
            <a href="#" className="hover:text-zinc-300">Garantia</a>
            <a href="#" className="hover:text-zinc-300">Suporte</a>
          </div>
        </div>
      </footer>

    </main>
  );
}