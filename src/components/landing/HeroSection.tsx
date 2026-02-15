import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const indicators = [
  { icon: Target, label: "Leads qualificados" },
  { icon: TrendingUp, label: "Resultados reais" },
  { icon: Zap, label: "Processo validado" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 via-background to-background pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-secondary/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-80 h-80 bg-primary/4 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="section-badge">
              <Zap className="w-4 h-4" />
              Estrutura validada para vendedores
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tight"
          >
            Vendedores que querem previsibilidade{" "}
            <span className="text-gradient-orange">usam essa estrutura.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Captação de leads qualificados com processo validado para vendedores
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-10"
          >
            <a
              href="https://wa.me/5533998311915"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button group"
            >
              Quero acelerar minhas metas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Indicators */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
          >
            {indicators.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
