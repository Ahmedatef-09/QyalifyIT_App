import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with AI lead qualification",
    features: [
      "1 AI qualification agent",
      "Up to 100 leads/month",
      "Basic lead scoring",
      "Email notifications",
      "Community support",
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing sales teams that need more power",
    features: [
      "5 AI qualification agents",
      "Unlimited leads",
      "Advanced scoring logic",
      "CRM integrations",
      "Custom knowledge base",
      "Priority support",
      "Team collaboration",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with advanced requirements",
    features: [
      "Unlimited agents",
      "Unlimited leads",
      "Custom AI models",
      "SSO & advanced security",
      "Dedicated account manager",
      "SLA guarantee",
      "API access",
      "White-label options",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[hsl(275_70%_58%/0.04)] via-transparent to-[hsl(185_72%_55%/0.04)]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Start free. Upgrade when you're ready. No hidden fees.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card shadow-[0_0_40px_-10px_hsl(var(--glow)/0.3)]"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <h3 className="font-display text-xl font-bold text-text-bright">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-text-bright">{plan.price}</span>
                {plan.period && (
                  <span className="font-body text-sm text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <p className="mt-3 font-body text-sm text-muted-foreground">{plan.description}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="font-body text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`mt-8 w-full gap-2 font-body font-semibold ${
                  plan.highlighted
                    ? "shadow-[0_0_30px_-5px_hsl(var(--glow)/0.4)]"
                    : ""
                }`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
