import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Glow effects */}
      <div className="pointer-events-none absolute top-0 left-1/4 h-[600px] w-[600px] rounded-full bg-[hsl(185_72%_55%/0.08)] blur-[120px]" />
      <div className="pointer-events-none absolute top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-[hsl(275_70%_58%/0.08)] blur-[120px]" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-xs text-muted-foreground">Now in Public Beta — Free to Start</span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-text-bright sm:text-5xl md:text-6xl lg:text-7xl">
            Stop Chasing
            <span className="bg-gradient-to-r from-primary to-[hsl(var(--gradient-end))] bg-clip-text text-transparent"> Bad Leads.</span>
            <br />
            Qualify Them with AI.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-body text-lg leading-relaxed text-muted-foreground md:text-xl">
            Build a custom AI agent that scores and qualifies your leads automatically.
            No code. No developers. Live dashboard in under 15 minutes.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="group gap-2 px-8 font-body text-base font-semibold shadow-[0_0_30px_-5px_hsl(var(--glow)/0.4)]">
              Start Building Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2 border-border px-8 font-body text-base text-muted-foreground hover:bg-surface-hover hover:text-foreground">
              <Play className="h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <p className="mt-4 font-body text-xs text-muted-foreground">No credit card required · Setup in minutes</p>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-primary/20 to-transparent blur-sm" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
            <img
              src={dashboardPreview}
              alt="QualifyIT lead qualification dashboard showing scored leads"
              width={1280}
              height={800}
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
