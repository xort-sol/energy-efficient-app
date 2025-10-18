import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  badge?: string;
  backgroundImage?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  backgroundImage
}: HeroProps) {
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(26, 42, 69, 0.85), rgba(26, 42, 69, 0.75)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {};

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-white"
      style={backgroundImage ? bgStyle : { backgroundColor: 'hsl(220 45% 20%)' }}
      data-testid="section-hero"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6" data-testid="badge-hero">
              <span className="text-sm font-semibold text-primary-foreground">
                {badge}
              </span>
            </div>
          )}
          
          {subtitle && (
            <p className="text-lg lg:text-xl font-medium text-white/90 mb-4" data-testid="text-subtitle">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight" data-testid="text-title">
            {title}
          </h1>
          
          <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed" data-testid="text-description">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent text-accent-foreground gap-2 min-w-[200px]"
                  data-testid="button-primary-cta"
                >
                  {primaryCTA.text}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
            
            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 min-w-[200px]"
                  data-testid="button-secondary-cta"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
