import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA?: { text: string; href: string };
  secondaryCTA?: { text: string; href: string };
  badge?: string;
  backgroundImage?: string;
  enableParallax?: boolean;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  badge,
  backgroundImage,
  enableParallax = false
}: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const bgStyle = backgroundImage
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(26, 42, 69, 0.85), rgba(26, 42, 69, 0.75)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: enableParallax ? 'fixed' : 'scroll',
      }
    : {};

  return (
    <section
      ref={ref}
      className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden"
      style={backgroundImage ? bgStyle : { backgroundColor: 'hsl(220 45% 20%)' }}
      data-testid="section-hero"
    >
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10"
        style={enableParallax ? { y, opacity } : {}}
      >
        <div className="max-w-4xl mx-auto text-center">
          {badge && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6" 
              data-testid="badge-hero"
            >
              <span className="text-sm font-semibold text-primary-foreground">
                {badge}
              </span>
            </motion.div>
          )}
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-lg lg:text-xl font-medium text-white/90 mb-4" 
              data-testid="text-subtitle"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight" 
            data-testid="text-title"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed" 
            data-testid="text-description"
          >
            {description}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {primaryCTA && (
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent text-accent-foreground gap-2 min-w-[200px] transition-transform hover:scale-105"
                data-testid="button-primary-cta"
              >
                <Link href={primaryCTA.href}>
                  {primaryCTA.text}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            )}
            
            {secondaryCTA && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 min-w-[200px] transition-transform hover:scale-105"
                data-testid="button-secondary-cta"
              >
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.text}
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
