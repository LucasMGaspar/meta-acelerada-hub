import { CheckCircle, Globe, MessageCircle, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: CheckCircle,
    title: "Estrutura validada",
    description: "Captação testada e aprovada por vendedores de diferentes segmentos.",
    color: "from-primary to-accent",
  },
  {
    icon: Globe,
    title: "Página otimizada",
    description: "Página de captação pensada para atrair leads qualificados na sua região.",
    color: "from-accent to-primary",
  },
  {
    icon: MessageCircle,
    title: "Direto no WhatsApp",
    description: "Os leads chegam no seu WhatsApp, prontos para iniciar a conversa.",
    color: "from-secondary to-orange-glow",
  },
  {
    icon: Users,
    title: "Feito para vendedores",
    description: "Processo exclusivo para vendedores que querem resultados concretos.",
    color: "from-primary to-accent",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring" as const, stiffness: 100 },
  },
};

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding overflow-hidden">
      <div className="container mx-auto">
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
            Simples, direto e eficiente
          </h2>
          <p className="section-subtitle">
            Um processo claro em 4 etapas para você começar a receber leads qualificados.
          </p>
        </motion.div>

        {/* Animated connector line */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/30 via-secondary/10 to-transparent origin-top"
          />

          {/* Bento Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="card-elevated p-6 md:p-8 relative group cursor-default transition-shadow duration-300 hover:shadow-elevated"
              >
                {/* Animated step number */}
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full gradient-orange flex items-center justify-center text-primary-foreground font-bold text-xs shadow-cta"
                >
                  {index + 1}
                </motion.span>

                {/* Icon with hover animation */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl gradient-blue flex items-center justify-center mb-5"
                >
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line that animates on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl gradient-orange"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary/10 text-secondary font-semibold text-sm border border-secondary/15"
          >
            <Rocket className="w-4 h-4" />
            Sem complicação, sem enrolação
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
