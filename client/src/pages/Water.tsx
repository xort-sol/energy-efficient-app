import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Droplet, TrendingDown, FileText, Shield, Clock } from "lucide-react";

export default function Water() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Hero
        title="Business Water Suppliers"
        description="Streamlined water services for your business with competitive rates and transparent billing. Switch your business water supply with confidence."
        primaryCTA={{ text: "Get a Quote", href: "/quote" }}
        secondaryCTA={{ text: "Call 0333 323 3940", href: "tel:03333233940" }}
        badge="Competitive Water Rates"
      />

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Business Water Services</h2>
            <p className="text-lg text-muted-foreground">
              Save money and simplify your business water supply with our competitive rates and exceptional service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="benefit-competitive-rates">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Competitive Rates</h3>
              <p className="text-muted-foreground text-sm">Save money with our market-leading water prices</p>
            </div>

            <div className="text-center" data-testid="benefit-transparent">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Transparent Billing</h3>
              <p className="text-muted-foreground text-sm">Clear, straightforward bills with no hidden charges</p>
            </div>

            <div className="text-center" data-testid="benefit-reliable">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Reliable Service</h3>
              <p className="text-muted-foreground text-sm">Dependable water supply for your business</p>
            </div>

            <div className="text-center" data-testid="benefit-simple-switching">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Simple Switching</h3>
              <p className="text-muted-foreground text-sm">Easy process with minimal disruption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Switch Your Business Water?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since the deregulation of the business water market, businesses can now choose their water supplier. This means you can shop around for the best rates and service.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3" data-testid="feature-save-money">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingDown className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Save Money</h3>
                    <p className="text-sm text-muted-foreground">Competitive rates can help reduce your business overheads significantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="feature-better-service">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Better Service</h3>
                    <p className="text-sm text-muted-foreground">Choose a supplier that offers the customer service levels you expect.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3" data-testid="feature-simplified-billing">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <FileText className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Simplified Billing</h3>
                    <p className="text-sm text-muted-foreground">Combine your water with other utilities for easier account management.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary text-primary-foreground p-8 lg:p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Get a Business Water Quote</h3>
              <p className="mb-6 text-primary-foreground/90">
                Fill out a quick form or give us a call to get a competitive quote for your business water supply.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/quote">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent text-accent-foreground" data-testid="button-water-quote">
                    Get a Quote Online
                  </Button>
                </Link>
                <a href="tel:03333233940">
                  <Button size="lg" variant="outline" className="w-full border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20" data-testid="button-water-call">
                    Call 0333 323 3940
                  </Button>
                </a>
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
              Ready to Switch Your Business Water?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Start saving on your business water today
            </p>
            <Link href="/quote">
              <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground" data-testid="button-water-cta">
                Get a Quote Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
