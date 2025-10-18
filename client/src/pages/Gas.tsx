import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { PlanCard } from "@/components/PlanCard";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Flame, Lock, TrendingUp, Leaf, Shield } from "lucide-react";
import gasImage from "@assets/stock_images/gas.jpg";

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

      {/* Business Gas Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Business Gas Made Simple</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're currently offering some of the best business gas rates on the market. Get competitive commercial gas plans bespoke to your business needs, with flexible contract lengths and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                  Get Your Quote
                </Button>
              </Link>
              <a href="tel:03333233940">
                <Button size="lg" variant="outline">
                  Call 0333 323 3940
                </Button>
              </a>
            </div>
          </div>

          {/* Quote Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <div className="bg-card p-8 rounded-lg border border-card-border text-center">
              <Flame className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Small Business Gas</h3>
              <p className="text-muted-foreground mb-6">
                For micro and smaller business quotes, with an annual gas usage up to 293,000 kWh.
              </p>
              <Link href="/quote">
                <Button className="w-full bg-accent hover:bg-accent text-accent-foreground">
                  Get a quote
                </Button>
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg border border-card-border text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Large Business Gas</h3>
              <p className="text-muted-foreground mb-6">
                Annual gas usage over 293,000 kWh? Get a bespoke business gas quote now.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Get in touch
                </Button>
              </Link>
            </div>

            <div className="bg-card p-8 rounded-lg border border-card-border text-center">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Carbon Neutral Gas</h3>
              <p className="text-muted-foreground mb-6">
                Environmentally friendly gas options to support your journey towards net zero.
              </p>
              <Link href="/green-energy">
                <Button variant="outline" className="w-full">
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Business Gas Plans and Tariffs</h2>
            <p className="text-lg text-muted-foreground">
              Competitive commercial gas plans bespoke to your business needs. Whether you're looking for fixed, part-fixed, or carbon-neutral plans, we offer a range of options to suit businesses of all shapes and sizes.
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

      {/* Small Business Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Small Business Gas Plans</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We offer a range of fully fixed and flexible gas plans to suit your small or micro business needs. Our competitively priced business gas tariffs are designed for both single and multiple sites.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Flame className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Fixed Gas Plan</h3>
                    <p className="text-sm text-muted-foreground">Secure our best business gas rates with a range of contract lengths available to suit your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Multi-Site Gas Tariff</h3>
                    <p className="text-sm text-muted-foreground">The same great rates for your gas across all of your business locations.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/quote">
                  <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                    Get a Small Business Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-card p-8 rounded-lg border border-card-border">
              <h3 className="text-xl font-semibold mb-4">Small Business Criteria</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Annual Gas Usage</p>
                  <p className="text-sm text-muted-foreground">Up to 293,000 kWh</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Contract Lengths</p>
                  <p className="text-sm text-muted-foreground">12, 24, or 36 months</p>
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

      {/* Multi-Fuel Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-card p-8 rounded-lg border border-card-border">
                <h3 className="text-2xl font-semibold mb-4">Save with our Multi-Fuel Plan</h3>
                <p className="text-muted-foreground mb-6">
                  Find out how you can combine and save on your gas, electricity and water supplies. Our multi-fuel packages offer significant discounts when you take multiple utilities with us.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-sm">Combine gas, electricity & water</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-sm">Get best combined rates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-sm">Single account management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-sm">Streamlined billing</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/quote">
                    <Button className="w-full bg-accent hover:bg-accent text-accent-foreground">
                      Find out more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Multi-Fuel Business Gas Supply</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Take advantage of our multi-fuel packages and save even more on your business energy costs. When you combine gas, electricity, and water supplies with us, you'll benefit from:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Up to 15% Discount</h3>
                    <p className="text-sm text-muted-foreground">Save more when you take multiple utilities with us</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Single Point of Contact</h3>
                    <p className="text-sm text-muted-foreground">One account manager for all your utility needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Simplified Billing</h3>
                    <p className="text-sm text-muted-foreground">One bill for all your utilities, making accounting easier</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
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
