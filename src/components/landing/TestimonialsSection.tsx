import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import novaesPhoto from "@/assets/testimonial-novaes.png";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import testimonial4 from "@/assets/testimonial-4.jpg";

const testimonials = [
  {
    content: "O Acelera Metas mudou completamente minha forma de prospectar. Leads qualificados chegando todos os dias, e o melhor: já vêm interessados! Recomendo demais.",
    author: "Novaes da Honda",
    role: "Vendedor de Automóveis",
    image: novaesPhoto,
    featured: true,
  },
  {
    content: "O processo é simples e os leads chegam muito mais preparados. Facilita demais na abordagem e no fechamento.",
    author: "Ricardo Mendes",
    role: "Consultor Imobiliário - Rio de Janeiro, RJ",
    image: testimonial2,
  },
  {
    content: "Hoje tenho previsibilidade, não dependo só de indicação. Mudou minha forma de prospectar e bater metas.",
    author: "Carla Ribeiro",
    role: "Vendedora de Seguros - Belo Horizonte, MG",
    image: testimonial3,
  },
  {
    content: "Já usei para vender e vou continuar usando. Os leads realmente chegam interessados e prontos para fechar.",
    author: "Fernando Costa",
    role: "Representante Comercial - Curitiba, PR",
    image: testimonial4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Prova Social</span>
          <h2 className="section-title mt-4 mb-4">
            O que dizem os vendedores
          </h2>
          <p className="section-subtitle">
            Vendedores reais que já utilizam o Acelera Metas para captar leads e fechar vendas.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.12,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`card-elevated p-6 md:p-8 relative group cursor-default
                transition-shadow duration-300 hover:shadow-elevated
                ${t.featured ? "md:col-span-2 md:flex md:items-center md:gap-8" : ""}`}
            >
              {/* Animated quote accent */}
              <motion.div
                initial={{ rotate: -12, scale: 0 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 300 }}
                className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center"
              >
                <Quote className="w-5 h-5 text-secondary" />
              </motion.div>

              {/* Featured image with glow */}
              {t.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-6 md:mb-0 md:shrink-0 relative"
                >
                  <div className="absolute inset-0 gradient-orange rounded-2xl blur-xl opacity-20 scale-110" />
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover border-2 border-secondary/20 relative z-10"
                    loading="lazy"
                  />
                </motion.div>
              )}

              <div className="flex-1">
                {/* Animated stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 + i * 0.05, type: "spring", stiffness: 400 }}
                    >
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                    </motion.div>
                  ))}
                </div>

                <p className="text-foreground text-base md:text-lg leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {!t.featured && (
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={t.image}
                      alt={t.author}
                      className="w-12 h-12 rounded-xl object-cover border-2 border-border"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-primary text-sm">{t.author}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
