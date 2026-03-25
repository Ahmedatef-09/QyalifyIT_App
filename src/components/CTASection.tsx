import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[hsl(275_70%_58%/0.08)] via-[hsl(185_72%_55%/0.04)] to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl font-bold text-text-bright md:text-5xl">
            Ready to Stop Wasting Time on Bad Leads?
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-muted-foreground">
            Build your AI qualification agent in minutes. Start free — no credit card, no developers, no BS.
          </p>
          <div className="mt-10">
            <Button size="lg" className="group gap-2 px-10 font-body text-base font-semibold shadow-[0_0_40px_-5px_hsl(var(--glow)/0.5)]">
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
