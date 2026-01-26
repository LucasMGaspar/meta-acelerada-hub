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
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas principais dúvidas sobre a Acelera Metas
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-lg border border-border px-6 shadow-card"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
