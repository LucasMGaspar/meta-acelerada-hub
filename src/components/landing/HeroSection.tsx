import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import SpeedometerAnimation from "./SpeedometerAnimation";

const indicators = [
  { icon: Target, label: "Leads qualificados" },
  { icon: TrendingUp, label: "Resultados reais" },
  { icon: Zap, label: "Processo validado" },
];

const stats = [
  { value: 500, prefix: "+", suffix: "", label: "Leads gerados", highlight: false },
  { value: 98, prefix: "", suffix: "%", label: "Satisfação", highlight: true },
  { value: 24, prefix: "", suffix: "h", label: "Para ativar", highlight: false },
];

const CountUp = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!spotlightRef.current || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - 300;
    const y = e.clientY - rect.top - 300;
    spotlightRef.current.style.transform = `translate(${x}px, ${y}px)`;
    spotlightRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!spotlightRef.current) return;
    spotlightRef.current.style.opacity = '0';
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return (
    <section ref={sectionRef} className="relative pt-28 md:pt-40 pb-24 md:pb-36 overflow-hidden min-h-[90vh] flex items-center">
      {/* Aurora mesh background */}
      <div className="bg-aurora" />

      {/* Grid pattern texture */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      {/* Mouse-following spotlight */}
      <div ref={spotlightRef} className="spotlight opacity-0" />

      {/* Animated background blobs with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge with glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            <span className="section-badge animate-pulse-glow">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Zap className="w-4 h-4" />
              </motion.span>
              Estrutura validada para vendedores
            </span>
          </motion.div>

          {/* Headline: first line shimmer, second line gradient */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-black leading-[1.08]"
          >
            {"Vendedores que querem previsibilidade ".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.3 + i * 0.06,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                }}
                className="inline-block mr-[0.3em] text-shimmer"
              >
                {word}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            {"usam essa estrutura.".split(" ").map((word, i) => (
              <motion.span
                key={`orange-${i}`}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: 0.7 + i * 0.08,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                }}
                className="inline-block mr-[0.3em] text-gradient-orange"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Captação de leads qualificados com processo validado para vendedores
          </motion.p>

          {/* Speedometer animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.7, type: "spring", stiffness: 100 }}
            className="mt-10 mb-2"
          >
            <SpeedometerAnimation />
          </motion.div>

          {/* CTA with pulse glow */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5, type: "spring", stiffness: 200 }}
            className="mt-10 relative"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.15, 0.3] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 mx-auto w-64 h-16 rounded-2xl gradient-orange blur-2xl top-1/2 -translate-y-1/2"
            />
            <a
              href="https://wa.me/5533998311915"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group relative"
            >
              Quero acelerar minhas metas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Stats: Glass cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-3 max-w-lg mx-auto"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="glass-card px-4 py-5 text-center group"
              >
                <p className={`stat-number text-2xl md:text-3xl ${stat.highlight ? 'text-secondary' : 'text-foreground'}`}>
                  <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="text-[10px] text-muted-foreground mt-1.5 font-mono-brand uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Indicators with subtle dividers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-8"
          >
            {indicators.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-muted-foreground px-3 py-1.5 rounded-full glass-card"
              >
                <item.icon className="w-4 h-4 text-secondary" />
                <span className="text-xs font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Section divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default HeroSection;
