import { motion } from "framer-motion";
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
    <section id="faq" className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <span className="section-badge mb-4">FAQ</span>
          <h2 className="section-title mt-4 mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="section-subtitle">
            Tire suas principais dúvidas sobre a Acelera Metas
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-elevated px-6 data-[state=open]:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
