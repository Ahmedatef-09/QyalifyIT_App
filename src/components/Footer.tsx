import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
            <Zap className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-display text-sm font-bold text-text-bright">QualifyIT</span>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} QualifyIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
