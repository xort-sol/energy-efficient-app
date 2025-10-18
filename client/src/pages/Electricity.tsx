import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PlanCard } from "@/components/PlanCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, Lock, TrendingUp, Leaf, Building2 } from "lucide-react";

export default function Electricity() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Hero
        title="Business Electricity Suppliers"
        description="We're currently offering some of the best business electricity rates on the market. Get competitive commercial electricity plans bespoke to your business needs."
        primaryCTA={{ text: "Get a Quote", href: "/quote" }}
        secondaryCTA={{ text: "Call 0333 323 3940", href: "tel:03333233940" }}
        badge="Best Rates Online"
      />

      {/* Plans Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Business Electricity Plans and Tariffs</h2>
            <p className="text-lg text-muted-foreground">
              Competitive commercial electricity plans bespoke to your business needs. Whether you're looking for fixed, part-fixed, 100% green, or pre-payment plans, we offer a range of options to suit businesses of all shapes and sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <PlanCard
              icon={Lock}
              title="Fully Fixed"
              description="Simple, transparent and easy to manage fully fixed business electricity plans that provide budget certainty."
              features={[
                "Fixed rates for contract length",
                "12, 24, or 36 month contracts",
                "Budget certainty",
                "No surprise price changes"
              ]}
            />
            <PlanCard
              icon={TrendingUp}
              title="Part Fixed"
              description="More flexibility to manage your non-commodity costs whilst fixing for your energy rates."
              features={[
                "Fixed energy rates",
                "Flexible non-commodity costs",
                "Multiple plan options",
                "Greater control"
              ]}
            />
            <PlanCard
              icon={Building2}
              title="Multi-Fuel"
              description="Save your business even more money by taking two or more utility supplies with us."
              features={[
                "Electricity, Gas & Water",
                "Best combined rates",
                "Single account management",
                "Streamlined billing"
              ]}
            />
            <PlanCard
              icon={Leaf}
              title="Pure Green"
              description="Ensure your electricity is from a 100% clean, green, and traceable source."
              features={[
                "100% renewable electricity",
                "REGO backed",
                "Meet CSR goals",
                "Protect the planet"
              ]}
              href="/green-energy"
            />
          </div>
        </div>
      </section>

      {/* Small Business Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Small Business Electricity Plans</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We offer a range of fully fixed and pre-payment energy plans to suit your small or micro business needs. Our competitively priced business electricity tariffs are designed for both single and multiple sites.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3" data-testid="feature-small-fixed">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fixed Electricity Plan</h3>
                    <p className="text-sm text-muted-foreground">Secure our best business electricity rates with a range of contract lengths available to suit your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="feature-multi-site">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Multi-Site Electricity Tariff</h3>
                    <p className="text-sm text-muted-foreground">The same great rates for your electricity across all of your business locations.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/quote">
                  <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground" data-testid="button-small-business-quote">
                    Get a Small Business Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-card-border">
              <h3 className="text-xl font-semibold mb-4">Small Business Criteria</h3>
              <div className="space-y-4">
                <div data-testid="criteria-electricity">
                  <p className="font-medium mb-1">Annual Electricity Usage</p>
                  <p className="text-sm text-muted-foreground">Up to 100,000 kWh</p>
                </div>
                <div data-testid="criteria-gas">
                  <p className="font-medium mb-1">Annual Gas Usage</p>
                  <p className="text-sm text-muted-foreground">Up to 293,000 kWh</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    For businesses with higher usage, please request a large business quote for bespoke pricing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get the Best Electricity Rates?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Call now or get our most competitive rates online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03333233940" data-testid="button-call-electricity">
                <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                  Call 0333 323 3940
                </Button>
              </a>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="border-secondary-foreground/20 hover:bg-secondary-foreground/5" data-testid="button-quote-electricity">
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
