import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    content: "Comecei a receber leads todos os dias e já fechei venda usando o Acelera Metas.",
    author: "Vendedor de automóveis",
    role: "São Paulo, SP",
  },
  {
    content: "O processo é simples e os leads chegam muito mais preparados. Facilita demais na abordagem.",
    author: "Consultor imobiliário",
    role: "Rio de Janeiro, RJ",
  },
  {
    content: "Hoje tenho previsibilidade, não dependo só de indicação. Mudou minha forma de prospectar.",
    author: "Vendedora de seguros",
    role: "Belo Horizonte, MG",
  },
  {
    content: "Já usei para vender e vou continuar usando. Os leads realmente chegam interessados.",
    author: "Representante comercial",
    role: "Curitiba, PR",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Prova Social
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            O que dizem os vendedores
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Vendedores reais que já utilizam o Acelera Metas para captar leads e fechar vendas.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-background border border-border card-hover"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl gradient-blue flex items-center justify-center">
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;