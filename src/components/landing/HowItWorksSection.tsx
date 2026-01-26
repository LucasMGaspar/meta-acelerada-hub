import { CheckCircle, Rocket, Globe, MessageCircle, Users } from "lucide-react";

const steps = [
  {
    icon: CheckCircle,
    title: "Estrutura validada",
    description: "Utilizamos uma estrutura de captação testada e aprovada por vendedores de diferentes segmentos.",
  },
  {
    icon: Globe,
    title: "Página otimizada",
    description: "Página de captação otimizada para conversão, pensada para atrair leads qualificados.",
  },
  {
    icon: MessageCircle,
    title: "Direto no WhatsApp",
    description: "Os leads chegam diretamente no seu WhatsApp, prontos para você iniciar a conversa.",
  },
  {
    icon: Users,
    title: "Feito para vendedores",
    description: "Processo pensado exclusivamente para vendedores que querem resultados concretos.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Como funciona
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Simples, direto e eficiente
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo claro em 4 etapas para você começar a receber leads qualificados.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-border" />
              )}
              
              <div className="relative p-6 rounded-2xl bg-card border border-border card-hover text-center">
                {/* Step number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-orange flex items-center justify-center text-white font-bold text-sm shadow-cta">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rocket decoration */}
        <div className="flex justify-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 text-secondary font-medium">
            <Rocket className="w-5 h-5" />
            <span>Sem complicação, sem enrolação</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;