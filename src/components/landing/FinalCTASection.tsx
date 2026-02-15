import { ArrowRight, Shield, Clock, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-muted/30">
      {/* Animated background elements */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Animated icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-16 h-16 mx-auto mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 gradient-orange rounded-2xl blur-lg"
            />
            <div className="relative w-16 h-16 rounded-2xl gradient-orange flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="w-5 h-5 text-secondary" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="section-title mb-4"
          >
            Pronto para acelerar suas metas?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="section-subtitle mb-8"
          >
            Estrutura pensada para poucos vendedores por vez, mantendo qualidade no atendimento.
          </motion.p>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            {[
              { icon: Clock, label: "Vagas limitadas" },
              { icon: Users, label: "Atendimento exclusivo" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-sm text-muted-foreground px-4 py-2 rounded-full bg-card border border-border"
              >
                <item.icon className="w-4 h-4 text-secondary" />
                <span>{item.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA with glow */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="relative inline-block"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.1, 0.25] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 gradient-orange rounded-2xl blur-2xl"
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

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-xs text-muted-foreground mt-6"
          >
            Ao clicar, você será direcionado para o WhatsApp para conversar com nossa equipe.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
