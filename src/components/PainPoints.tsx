import { motion } from "framer-motion";
import { Clock, TrendingDown, UserX } from "lucide-react";

const pains = [
  {
    icon: Clock,
    title: "Hours Wasted Daily",
    description: "Reps manually sort through hundreds of form submissions and emails, chasing prospects who will never convert.",
  },
  {
    icon: UserX,
    title: "Wrong-Fit Leads Slip Through",
    description: "Without systematic scoring, your team pursues leads who can't afford your product or aren't the right fit.",
  },
  {
    icon: TrendingDown,
    title: "Revenue Left on the Table",
    description: "High-intent prospects go cold while your reps are busy with unqualified leads. Every delay costs pipeline.",
  },
];

const PainPoints = () => {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-4xl">
            Your Sales Team Deserves Better
          </h2>
          <p className="mt-4 font-body text-lg text-muted-foreground">
            Manual lead qualification is a bottleneck you can't afford.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/30 hover:bg-surface"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                <pain.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-display text-lg font-semibold text-text-bright">{pain.title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
