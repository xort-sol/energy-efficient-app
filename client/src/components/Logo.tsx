import { Zap } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-md bg-primary">
        <Zap className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-secondary tracking-tight">Nationwide</span>
        <span className="text-sm font-semibold text-primary">Energies</span>
      </div>
    </div>
  );
}
