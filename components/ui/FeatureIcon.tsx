import { Building2, Palette, Users, Wine } from "lucide-react";
import type { AboutPillar } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  palette: Palette,
  users: Users,
  wine: Wine,
};

interface FeatureIconProps {
  pillar: AboutPillar;
}

export function FeatureIcon({ pillar }: FeatureIconProps) {
  const Icon = iconMap[pillar.icon] || Wine;

  return (
    <div className="group flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-cream transition-colors duration-300">
      <div className="w-14 h-14 rounded-full bg-cream group-hover:bg-burgundy/10 flex items-center justify-center transition-colors duration-300">
        <Icon className="w-6 h-6 text-burgundy transition-transform duration-300 group-hover:scale-110" />
      </div>
      <p className="font-sans text-xs sm:text-sm font-medium text-charcoal leading-tight">
        {pillar.title}
      </p>
    </div>
  );
}
