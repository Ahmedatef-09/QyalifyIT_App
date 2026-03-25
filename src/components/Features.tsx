import { motion } from "framer-motion";
import { Brain, Gauge, Shield, Plug, MessageSquare, BarChart2 } from "lucide-react";

const features = [
  { icon: Brain, title: "AI-Powered Scoring", description: "Custom scoring logic trained on your ideal customer profile. Every lead gets a data-backed qualification score." },
  { icon: MessageSquare, title: "Conversational Qualification", description: "Your AI agent asks the right questions naturally, collecting structured data without feeling like a form." },
  { icon: Gauge, title: "Live Dashboard", description: "Real-time feed of scored leads with priority rankings, status filters, and one-click actions." },
  { icon: Plug, title: "Easy Integrations", description: "Embed on your site, connect to your CRM, or use our API. Works with your existing workflow." },
  { icon: Shield, title: "Your Data, Your Rules", description: "Upload your knowledge base and set qualification criteria that match your exact sales process." },
  { icon: BarChart2, title: "Analytics & Insights", description: "See conversion patterns, identify top lead sources, and optimize your qualification criteria over time." },
];

const Features = () => {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-4xl">
            Everything You Need to Qualify Smarter
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Powerful features, zero complexity.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/20 hover:bg-surface hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feat.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-base font-semibold text-text-bright">{feat.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
