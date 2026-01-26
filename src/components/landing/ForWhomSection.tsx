import { CheckCircle, XCircle } from "lucide-react";

const forWho = [
  "Vendedores que querem aumentar o faturamento",
  "Quem busca previsibilidade de leads",
  "Quem quer profissionalizar suas vendas",
  "Quem está disposto a atender bem os leads",
];

const notForWho = [
  "Quem quer resultado sem trabalhar",
  "Quem não responde os leads",
  "Quem busca 'dinheiro fácil'",
  "Quem não tem compromisso com vendas",
];

const ForWhomSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Transparência
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Para quem é o Acelera Metas?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Queremos trabalhar com vendedores comprometidos. Veja se você se encaixa.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* For who */}
          <div className="p-6 md:p-8 rounded-2xl bg-background border-2 border-success/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success font-semibold text-sm mb-6">
                <CheckCircle className="w-4 h-4" />
                Para quem é
              </div>

              <ul className="space-y-4">
                {forWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not for who */}
          <div className="p-6 md:p-8 rounded-2xl bg-background border-2 border-destructive/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive font-semibold text-sm mb-6">
                <XCircle className="w-4 h-4" />
                Para quem NÃO é
              </div>

              <ul className="space-y-4">
                {notForWho.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;