import { CheckCircle, Globe, MessageCircle, Users, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: CheckCircle,
    title: "Estrutura validada",
    description: "Captação testada e aprovada por vendedores de diferentes segmentos.",
    accent: "from-emerald-500/10 to-transparent",
  },
  {
    icon: Globe,
    title: "Página otimizada",
    description: "Página de captação pensada para atrair leads qualificados na sua região.",
    accent: "from-blue-500/10 to-transparent",
  },
  {
    icon: MessageCircle,
    title: "Direto no WhatsApp",
    description: "Os leads chegam no seu WhatsApp, prontos para iniciar a conversa.",
    accent: "from-green-500/10 to-transparent",
  },
  {
    icon: Users,
    title: "Feito para vendedores",
    description: "Processo exclusivo para vendedores que querem resultados concretos.",
    accent: "from-purple-500/10 to-transparent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 100 },
  },
};

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding overflow-hidden relative">
      {/* Dot pattern background */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Como funciona</span>
          <h2 className="section-title mt-4 mb-4">
            Simples, direto e <span className="text-gradient-orange">eficiente</span>
          </h2>
          <p className="section-subtitle">
            Um processo claro em 4 etapas para você começar a receber leads qualificados.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7 max-w-4xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.25 },
              }}
              className="card-step p-7 md:p-9 group cursor-default"
            >
              {/* Top row: icon + step number */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="icon-ring w-14 h-14"
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="step-badge"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>
              </div>

              {/* Content */}
              <h3 className="font-bold text-foreground text-lg mb-2.5 relative z-10 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed relative z-10 mb-4">
                {step.description}
              </p>

              {/* Subtle "learn more" hint on hover */}
              <div className="flex items-center gap-1.5 text-xs font-medium text-primary/0 group-hover:text-primary/70 transition-all duration-300 relative z-10">
                <span className="font-mono-brand">Saiba mais</span>
                <ArrowRight className="w-3 h-3 -translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center mt-12"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl glass-card text-secondary font-semibold text-sm font-mono-brand animate-pulse-glow"
          >
            <Rocket className="w-4 h-4" />
            Sem complicação, sem enrolação
          </motion.div>
        </motion.div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default HowItWorksSection;
