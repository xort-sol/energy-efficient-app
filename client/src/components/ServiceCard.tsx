import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  iconColor?: string;
}

export function ServiceCard({ icon: Icon, title, description, href, iconColor = "bg-primary" }: ServiceCardProps) {
  return (
    <Card className="hover-elevate transition-all h-full flex flex-col" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardHeader>
        <div className={`w-14 h-14 rounded-lg ${iconColor} flex items-center justify-center mb-4`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Link href={href}>
          <Button variant="link" className="text-primary p-0 h-auto" data-testid={`button-learn-more-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            Learn More →
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
