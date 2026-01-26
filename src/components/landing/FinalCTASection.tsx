import { ArrowRight, Shield, Clock, Users } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-blue opacity-[0.03]" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl gradient-orange flex items-center justify-center animate-float">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          {/* Headline */}
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Pronto para acelerar suas metas?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Estrutura pensada para poucos vendedores por vez, mantendo qualidade no atendimento.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Vagas limitadas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-secondary" />
              <span>Atendimento exclusivo</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl gradient-orange text-white font-bold text-lg transition-all hover:brightness-110 hover:shadow-cta hover:scale-105"
          >
            Falar no WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground mt-6">
            Ao clicar, você será direcionado para o WhatsApp para conversar com nossa equipe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;