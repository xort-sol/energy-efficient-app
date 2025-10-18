import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, Users, Award, TrendingUp, Shield, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Hero
        title="About Nationwide Energies"
        description="We're dedicated to providing businesses across the UK with competitive energy solutions that power growth and sustainability."
        primaryCTA={{ text: "Get a Quote", href: "/quote" }}
        secondaryCTA={{ text: "Contact Us", href: "/contact" }}
      />

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Nationwide Energies, we believe that every business deserves access to affordable, reliable, and sustainable energy solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                We're committed to simplifying the energy switching process and providing transparent pricing that helps businesses of all sizes reduce their overheads and meet their sustainability goals.
              </p>
              <p className="text-lg text-muted-foreground">
                With over 50,000 businesses trusting us for their energy needs, we continue to deliver exceptional service and competitive rates across the UK.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-6 rounded-lg" data-testid="stat-businesses">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-sm text-muted-foreground">Businesses Served</div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg" data-testid="stat-savings">
                <div className="text-4xl font-bold text-primary mb-2">£5M+</div>
                <div className="text-sm text-muted-foreground">Saved Annually</div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg" data-testid="stat-satisfaction">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg" data-testid="stat-response">
                <div className="text-4xl font-bold text-primary mb-2">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg border border-card-border" data-testid="value-transparency">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                Clear, honest pricing with no hidden fees. We believe in building trust through transparency in all our dealings.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-card-border" data-testid="value-customer-first">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-muted-foreground">
                Your business needs are at the heart of everything we do. We're committed to exceptional customer service.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-card-border" data-testid="value-sustainability">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We're passionate about renewable energy and helping businesses reduce their environmental impact.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-card-border" data-testid="value-expertise">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-muted-foreground">
                Our team of energy specialists bring years of industry experience to help you make informed decisions.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-card-border" data-testid="value-innovation">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our services to provide cutting-edge energy solutions for modern businesses.
              </p>
            </div>

            <div className="bg-card p-8 rounded-lg border border-card-border" data-testid="value-reliability">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                Dependable energy supply and consistent support you can count on, day in and day out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Why Businesses Choose Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4" data-testid="reason-competitive">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Competitive Pricing</h3>
                  <p className="text-muted-foreground">
                    We negotiate with suppliers to secure the best possible rates, passing the savings directly to you. Our transparent pricing model means no surprises on your bill.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="reason-simple">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Simple Switching Process</h3>
                  <p className="text-muted-foreground">
                    We handle all the paperwork and coordination with your current and new suppliers. Switching has never been easier, and we're with you every step of the way.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="reason-support">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Support Team</h3>
                  <p className="text-muted-foreground">
                    Our dedicated team of energy specialists is always ready to help. Whether you have questions about your quote or need advice on reducing consumption, we're here for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4" data-testid="reason-green">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Green Energy Options</h3>
                  <p className="text-muted-foreground">
                    Make the switch to 100% renewable electricity and carbon-neutral gas. We make it easy for your business to meet sustainability goals without compromising on quality or service.
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
              Ready to Join 50,000+ Businesses?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Get a competitive quote and start saving on your business energy today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground" data-testid="button-get-quote-about">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-secondary-foreground/20 hover:bg-secondary-foreground/5" data-testid="button-contact-about">
                  Contact Us
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
