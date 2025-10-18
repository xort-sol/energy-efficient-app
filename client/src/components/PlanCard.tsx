import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon, Check } from "lucide-react";

interface PlanCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  href?: string;
}

export function PlanCard({ icon: Icon, title, description, features, href = "/quote" }: PlanCardProps) {
  return (
    <Card className="hover-elevate transition-all h-full flex flex-col" data-testid={`card-plan-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      {features && features.length > 0 && (
        <CardContent className="flex-1">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2" data-testid={`feature-${index}`}>
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground/80">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
      <CardFooter>
        <Link href={href}>
          <Button variant="default" className="w-full" data-testid={`button-get-quote-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Get a Quote
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
