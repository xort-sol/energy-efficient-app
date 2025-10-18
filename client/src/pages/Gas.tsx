import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PlanCard } from "@/components/PlanCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Flame, Lock, TrendingUp, Leaf, Shield } from "lucide-react";
import gasImage from "@assets/stock_images/natural_gas_pipeline_c3e30f20.jpg";

export default function Gas() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Hero
        title="Business Gas Suppliers"
        description="Reliable business gas supply with competitive rates and transparent pricing. We provide flexible gas contracts tailored to your business needs, ensuring consistent supply and cost certainty."
        primaryCTA={{ text: "Get a Quote", href: "/quote" }}
        secondaryCTA={{ text: "Call 0333 323 3940", href: "tel:03333233940" }}
        badge="Competitive Gas Rates"
        backgroundImage={gasImage}
        enableParallax={true}
      />

      {/* Plans Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Business Gas Plans and Tariffs</h2>
            <p className="text-lg text-muted-foreground">
              Choose from our range of business gas plans designed to give you price certainty and flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PlanCard
              icon={Lock}
              title="Fixed Gas Plan"
              description="Lock in competitive gas rates with our fixed price plans, protecting your business from market volatility."
              features={[
                "Price protection",
                "Budget certainty",
                "12-36 month contracts",
                "Transparent pricing"
              ]}
            />
            <PlanCard
              icon={TrendingUp}
              title="Flexible Gas Plan"
              description="Part-fixed plans that give you control over your energy costs while managing market fluctuations."
              features={[
                "Greater flexibility",
                "Fixed energy rates",
                "Variable non-commodity costs",
                "Better cost management"
              ]}
            />
            <PlanCard
              icon={Leaf}
              title="Carbon Offset Gas"
              description="Offset your gas carbon emissions and support your sustainability goals with verified carbon reduction programs."
              features={[
                "Carbon neutral gas",
                "Verified Carbon Standard",
                "Meet CSR commitments",
                "Environmental responsibility"
              ]}
              href="/green-energy"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Business Gas?</h2>
            <p className="text-lg text-muted-foreground">
              Reliable supply and exceptional service for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="benefit-reliable">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reliable Supply</h3>
              <p className="text-muted-foreground text-sm">Consistent gas supply you can depend on</p>
            </div>

            <div className="text-center" data-testid="benefit-competitive">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Rates</h3>
              <p className="text-muted-foreground text-sm">Market-leading prices for your business</p>
            </div>

            <div className="text-center" data-testid="benefit-flexible">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Contracts</h3>
              <p className="text-muted-foreground text-sm">Choose the term that works for you</p>
            </div>

            <div className="text-center" data-testid="benefit-green">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Green Options</h3>
              <p className="text-muted-foreground text-sm">Carbon offset programs available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Switch Your Business Gas?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Get competitive rates and reliable supply for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03333233940" data-testid="button-call-gas">
                <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                  Call 0333 323 3940
                </Button>
              </a>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="border-secondary-foreground/20 hover:bg-secondary-foreground/5" data-testid="button-quote-gas">
                  Get a Quote Online
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
