import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-light/50 to-background pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6 animate-fade-up">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-primary">Estrutura validada para vendedores</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Vendedores que querem previsibilidade de vendas{" "}
            <span className="text-secondary">usam essa estrutura.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Captação de leads qualificados com processo validado para vendedores
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.me/5533998311915"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl gradient-orange text-white font-bold text-lg transition-all hover:brightness-110 hover:shadow-cta hover:scale-105"
            >
              Quero acelerar minhas metas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-muted-foreground animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Target className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Leads qualificados</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Resultados reais</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Processo validado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;