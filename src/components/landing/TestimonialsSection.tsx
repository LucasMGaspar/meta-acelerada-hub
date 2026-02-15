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

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-badge mb-4">Prova Social</span>
          <h2 className="section-title mt-4 mb-4">
            O que dizem os vendedores
          </h2>
          <p className="section-subtitle">
            Vendedores reais que já utilizam o Acelera Metas para captar leads e fechar vendas.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={index}
              className={`card-elevated-hover p-6 md:p-8 relative group ${
                t.featured ? "md:col-span-2 md:flex md:items-center md:gap-8" : ""
              }`}
            >
              {/* Quote accent */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-secondary" />
              </div>

              {/* Featured image */}
              {t.featured && (
                <div className="mb-6 md:mb-0 md:shrink-0">
                  <img
                    src={t.image}
                    alt={t.author}
                    className="w-20 h-20 md:w-28 md:h-28 rounded-2xl object-cover border-2 border-secondary/20"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex-1">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                  "{t.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {!t.featured && (
                    <img
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
