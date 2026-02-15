import { CheckCircle, Globe, MessageCircle, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: CheckCircle,
    title: "Estrutura validada",
    description: "Captação testada e aprovada por vendedores de diferentes segmentos.",
  },
  {
    icon: Globe,
    title: "Página otimizada",
    description: "Página de captação pensada para atrair leads qualificados na sua região.",
  },
  {
    icon: MessageCircle,
    title: "Direto no WhatsApp",
    description: "Os leads chegam no seu WhatsApp, prontos para iniciar a conversa.",
  },
  {
    icon: Users,
    title: "Feito para vendedores",
    description: "Processo exclusivo para vendedores que querem resultados concretos.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Como funciona</span>
          <h2 className="section-title mt-4 mb-4">
            Simples, direto e eficiente
          </h2>
          <p className="section-subtitle">
            Um processo claro em 4 etapas para você começar a receber leads qualificados.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index}
              className="card-elevated-hover p-6 md:p-8 relative group"
            >
              {/* Step number */}
              <span className="absolute top-5 right-5 text-xs font-bold text-muted-foreground/40 tabular-nums">
                0{index + 1}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl gradient-blue flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <step.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-secondary/10 text-secondary font-semibold text-sm border border-secondary/15">
            <Rocket className="w-4 h-4" />
            Sem complicação, sem enrolação
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
