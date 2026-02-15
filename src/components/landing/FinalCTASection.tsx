import { ArrowRight, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Icon */}
          <div className="w-14 h-14 mx-auto mb-6 rounded-2xl gradient-orange flex items-center justify-center animate-float">
            <Shield className="w-7 h-7 text-primary-foreground" />
          </div>

          <h2 className="section-title mb-4">
            Pronto para acelerar suas metas?
          </h2>

          <p className="section-subtitle mb-8">
            Estrutura pensada para poucos vendedores por vez, mantendo qualidade no atendimento.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-secondary" />
              <span>Vagas limitadas</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4 text-secondary" />
              <span>Atendimento exclusivo</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5533998311915"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button group"
          >
            Quero acelerar minhas metas
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-xs text-muted-foreground mt-6">
            Ao clicar, você será direcionado para o WhatsApp para conversar com nossa equipe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
