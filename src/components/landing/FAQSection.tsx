import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência com anúncios ou tecnologia?",
    answer: "De forma alguma! O foco da Acelera Metas é justamente tirar esse peso das suas costas. Eu cuido de toda a parte técnica, configuração e estratégia. Você só precisa ter o WhatsApp instalado e estar pronto para atender os leads que vão chegar."
  },
  {
    question: "Quanto devo investir além do valor do plano?",
    answer: "Para um resultado sólido, recomendamos um investimento mínimo de R$ 15,00 a R$ 20,00 por dia diretamente na plataforma (Meta Ads). Esse valor é o que garante que sua oferta apareça para as pessoas certas na sua região."
  },
  {
    question: "Em quanto tempo começo a receber os primeiros leads?",
    answer: "Após a configuração inicial da estrutura (que leva cerca de 24h a 48h), os leads costumam começar a chegar no mesmo dia em que os anúncios vão ao ar. É velocidade total para sua meta."
  },
  {
    question: "Os leads são qualificados de verdade?",
    answer: "Sim! Diferente de um \"impulsionar\" comum, usamos o Método Drive 360, que filtra curiosos e foca em pessoas que já demonstraram interesse real em consórcio ou financiamento, facilitando o seu fechamento."
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim, nossos planos são mensais e sem fidelidade. Mas o nosso objetivo é que o seu lucro seja tão alto que você queira escalar a estrutura mês após mês."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding overflow-hidden relative">
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none" />

      <div className="container mx-auto max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="inline-block mb-4"
          >
            <HelpCircle className="w-8 h-8 text-secondary mx-auto" />
          </motion.div>
          <h2 className="section-title mb-4">
            Dúvidas <span className="text-gradient-orange">Frequentes</span>
          </h2>
          <p className="section-subtitle">
            Tire suas principais dúvidas sobre a Acelera Metas
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="card-elevated px-6 data-[state=open]:shadow-card-hover transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-base hover:text-secondary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
