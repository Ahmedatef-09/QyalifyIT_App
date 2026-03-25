import { motion } from "framer-motion";
import { Settings, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Settings,
    step: "01",
    title: "Build Your Agent",
    description: "Define your ideal customer, add qualifying questions, and set your scoring logic — all through a simple no-code builder.",
  },
  {
    icon: Rocket,
    step: "02",
    title: "Deploy in Minutes",
    description: "Embed the agent on your site, share a link, or connect it to your existing forms. Zero development required.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Watch Leads Score Live",
    description: "Your dashboard fills with scored, prioritized leads in real time. Your sales team only sees prospects worth pursuing.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-24">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[hsl(275_70%_58%/0.05)] blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-4xl">
            From Zero to Qualified Leads in 15 Minutes
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Three steps. No code. No developers needed.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30"
            >
              <span className="font-display text-5xl font-bold text-primary/10">{step.step}</span>
              <div className="mt-4 mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-bright">{step.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
