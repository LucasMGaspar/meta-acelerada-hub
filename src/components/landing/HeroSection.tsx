import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const indicators = [
  { icon: Target, label: "Leads qualificados" },
  { icon: TrendingUp, label: "Resultados reais" },
  { icon: Zap, label: "Processo validado" },
];

const CountUp = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
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

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={sectionRef} className="relative pt-28 md:pt-40 pb-24 md:pb-36 overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background blobs */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl"
        />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          >
            <span className="section-badge">
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Zap className="w-4 h-4" />
              </motion.span>
              Estrutura validada para vendedores
            </span>
          </motion.div>

          {/* Headline with word-by-word animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight"
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
                className="inline-block mr-[0.3em]"
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

          {/* CTA with pulse glow */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5, type: "spring", stiffness: 200 }}
            className="mt-10 relative"
          >
            {/* Pulsing glow behind button */}
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
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats counter row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-4 max-w-md mx-auto"
          >
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-primary">
                +<CountUp target={500} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Leads gerados</p>
            </div>
            <div className="text-center border-x border-border">
              <p className="text-2xl md:text-3xl font-black text-secondary">
                <CountUp target={98} suffix="%" />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black text-primary">
                <CountUp target={24} suffix="h" />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Para ativar</p>
            </div>
          </motion.div>

          {/* Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {indicators.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + i * 0.15 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
