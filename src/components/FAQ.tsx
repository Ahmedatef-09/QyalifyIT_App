import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does QualifyIT score my leads?",
    answer: "QualifyIT uses your custom questions, scoring criteria, and ideal customer profile to train an AI agent. It evaluates every incoming lead against your rules and assigns a qualification score so your team only sees leads worth pursuing.",
  },
  {
    question: "Do I need any technical skills to set it up?",
    answer: "Not at all. QualifyIT is designed for non-technical users. You can build, test, and deploy a qualification agent in under 15 minutes using our guided setup — no code or developers required.",
  },
  {
    question: "What integrations are supported?",
    answer: "QualifyIT integrates with popular CRMs like HubSpot, Salesforce, and Pipedrive, as well as form tools, email platforms, and Zapier for custom workflows. More integrations are added regularly.",
  },
  {
    question: "Can I customize the qualification questions?",
    answer: "Absolutely. You define the questions, scoring logic, and disqualification rules. You can also upload your own knowledge base so the AI understands your product, pricing, and ideal customer profile.",
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! Our Free plan lets you create one AI qualification agent and process up to 100 leads per month at no cost — no credit card required.",
  },
  {
    question: "How is my data handled?",
    answer: "Your data is encrypted at rest and in transit. We never share or sell your data. Enterprise plans include SSO, advanced security controls, and SLA guarantees.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Everything you need to know about QualifyIT.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card px-6"
              >
                <AccordionTrigger className="font-display text-left text-base font-semibold text-text-bright hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm leading-relaxed text-muted-foreground">
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

export default FAQ;
