import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Zap className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-text-bright">QualifyIT</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
          <a href="#features" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#pricing" className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="font-body text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button size="sm" className="font-body font-semibold">
            Get Started Free
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
