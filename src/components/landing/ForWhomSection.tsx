import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

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

interface ListCardProps {
  type: "positive" | "negative";
  title: string;
  items: string[];
  delay?: number;
}

const ListCard = ({ type, title, items, delay = 0 }: ListCardProps) => {
  const isPositive = type === "positive";
  const Icon = isPositive ? CheckCircle : XCircle;
  const colorClass = isPositive ? "text-success" : "text-destructive";
  const bgClass = isPositive ? "bg-success/10 border-success/20" : "bg-destructive/10 border-destructive/20";
  const badgeBg = isPositive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive";

  return (
    <motion.div
      initial={{ opacity: 0, x: isPositive ? -40 : 40, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`card-elevated p-6 md:p-8 border-2 ${bgClass} transition-shadow duration-300 hover:shadow-elevated`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, type: "spring", stiffness: 300 }}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${badgeBg} font-semibold text-sm mb-6`}
      >
        <Icon className="w-4 h-4" />
        {title}
      </motion.div>

      <ul className="space-y-4">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: isPositive ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3 + index * 0.1, duration: 0.4 }}
            className="flex items-start gap-3"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.4 + index * 0.1, type: "spring", stiffness: 400 }}
            >
              <Icon className={`w-5 h-5 ${colorClass} shrink-0 mt-0.5`} />
            </motion.div>
            <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const ForWhomSection = () => {
  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Transparência</span>
          <h2 className="section-title mt-4 mb-4">
            Para quem é o Acelera Metas?
          </h2>
          <p className="section-subtitle">
            Queremos trabalhar com vendedores comprometidos. Veja se você se encaixa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <ListCard type="positive" title="Para quem é" items={forWho} delay={0} />
          <ListCard type="negative" title="Para quem NÃO é" items={notForWho} delay={0.15} />
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
