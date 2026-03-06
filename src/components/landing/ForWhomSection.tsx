import { CheckCircle, XCircle, ThumbsUp, ThumbsDown } from "lucide-react";
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
  const HeaderIcon = isPositive ? ThumbsUp : ThumbsDown;
  const colorClass = isPositive ? "text-emerald-500" : "text-red-400";
  const cardClass = isPositive ? "card-verdict card-verdict--positive" : "card-verdict card-verdict--negative";
  const badgeBg = isPositive
    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/15"
    : "bg-red-500/10 text-red-500 border border-red-500/15";
  const iconBg = isPositive
    ? "bg-emerald-500/8"
    : "bg-red-500/8";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`${cardClass} p-7 md:p-9`}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 mb-7">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.15, type: "spring", stiffness: 300 }}
          className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}
        >
          <HeaderIcon className={`w-5 h-5 ${colorClass}`} />
        </motion.div>
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2 }}
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${badgeBg} font-semibold text-sm font-mono-brand`}
        >
          {title}
        </motion.span>
      </div>

      {/* Divider */}
      <div
        className="h-px mb-6"
        style={{
          background: isPositive
            ? 'linear-gradient(90deg, hsl(152 60% 40% / 0.2), transparent)'
            : 'linear-gradient(90deg, hsl(0 84% 60% / 0.15), transparent)',
        }}
      />

      {/* List items */}
      <ul className="space-y-1">
        {items.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.3 + index * 0.08, duration: 0.4 }}
            className="verdict-item"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.35 + index * 0.08, type: "spring", stiffness: 400 }}
              className="shrink-0 mt-0.5"
            >
              <Icon className={`w-[18px] h-[18px] ${colorClass}`} />
            </motion.div>
            <span className="text-foreground font-medium text-sm md:text-[15px] leading-snug">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const ForWhomSection = () => {
  return (
    <section className="section-padding bg-muted/30 overflow-hidden relative">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge mb-4">Transparência</span>
          <h2 className="section-title mt-4 mb-4">
            Para quem é o <span className="text-gradient-purple">Acelera Metas</span>?
          </h2>
          <p className="section-subtitle">
            Queremos trabalhar com vendedores comprometidos. Veja se você se encaixa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-7 max-w-4xl mx-auto">
          <ListCard type="positive" title="Para quem é" items={forWho} delay={0} />
          <ListCard type="negative" title="Para quem NÃO é" items={notForWho} delay={0.12} />
        </div>
      </div>
      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default ForWhomSection;
