import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, Flame, Droplet, Leaf, Phone, Building2, TrendingDown, Shield, Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/modern_office_buildi_2f9701c6.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <Hero
        subtitle="POWERING OVER 50,000 BUSINESSES WITH RELIABLE ENERGY"
        title="Business Energy Made Simple"
        description="Quick and easy quotes from the business energy experts. Get competitive rates on electricity, gas, and water for your business."
        primaryCTA={{ text: "Get Your Quote", href: "/quote" }}
        secondaryCTA={{ text: "Learn More", href: "/about" }}
        badge="Best Prices Online"
        backgroundImage={heroImage}
        enableParallax={true}
      />

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simplify and Save on Your Business Energy</h2>
            <p className="text-lg text-muted-foreground">
              Request a callback, or tell us how much you spend on business energy per year and get a quote today. We offer comprehensive energy solutions tailored to your business needs, from small startups to large enterprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <ServiceCard
                icon={Zap}
                title="Business Electricity"
                description="Competitive electricity plans for businesses of all sizes with flexible contract lengths."
                href="/electricity"
                iconColor="bg-primary"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ServiceCard
                icon={Flame}
                title="Business Gas"
                description="Reliable gas supply with transparent pricing and exceptional customer service."
                href="/gas"
                iconColor="bg-accent"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <ServiceCard
                icon={Droplet}
                title="Business Water"
                description="Streamlined water services for your business with competitive rates."
                href="/water"
                iconColor="bg-secondary"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <ServiceCard
                icon={Leaf}
                title="Green Energy"
                description="100% renewable electricity and carbon-neutral gas to power your sustainable future."
                href="/green-energy"
                iconColor="bg-primary"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three-Step Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Switch to Nationwide Energies Today</h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent process to power your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <ProcessStep
              number={1}
              title="Say Hello"
              description="Our energy advisors are ready to give you a great quote. Simply call us or request a call back and we'll get in touch with you."
            />
            <ProcessStep
              number={2}
              title="Share Details"
              description="Tell us about your business and energy needs so we can create your bespoke quote tailored to your requirements."
            />
            <ProcessStep
              number={3}
              title="Get Your Quote"
              description="Receive your tailored plan and switching is easy! We'll guide you through the process—it couldn't be simpler!"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/support">
              <Button variant="outline" size="lg" data-testid="button-help-support">
                Help & Support
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground" data-testid="button-get-quote-cta">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Green Energy Highlight */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-semibold">100% RENEWABLE BUSINESS ENERGY</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Power Your Business While Helping the Environment
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
              With our green energy plans for businesses, you can reduce your carbon footprint and meet your sustainability goals.
            </p>
            <Link href="/green-energy">
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20" data-testid="button-green-energy">
                Explore Green Energy Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"
          >
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-primary mb-2"
              >
                50K+
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">Happy Businesses</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-primary mb-2"
              >
                £5M+
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">Annual Savings</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl lg:text-5xl font-bold text-primary mb-2"
              >
                98%
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl lg:text-5xl font-bold text-primary mb-2"
              >
                24hr
              </motion.div>
              <p className="text-sm text-muted-foreground font-medium">Response Time</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Nationwide Energies?</h2>
            <p className="text-lg text-muted-foreground">
              We're committed to providing exceptional service and competitive rates. Our dedicated team works tirelessly to ensure your business gets the best energy deals available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
              data-testid="feature-best-prices"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Best Prices</h3>
              <p className="text-muted-foreground text-sm">Competitive rates that help your business save money on energy costs every month</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
              data-testid="feature-expert-support"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Support</h3>
              <p className="text-muted-foreground text-sm">Dedicated team ready to help with any questions, available during extended business hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
              data-testid="feature-flexible-plans"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Flexible Plans</h3>
              <p className="text-muted-foreground text-sm">Tailored solutions for businesses of all sizes, from startups to large corporations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
              data-testid="feature-trusted"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Trusted Partner</h3>
              <p className="text-muted-foreground text-sm">Supporting over 50,000 businesses nationwide with reliable energy solutions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Switch Your Business Energy?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Get a competitive quote in minutes and start saving today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03333233940" data-testid="button-call-now">
                <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground gap-2">
                  <Phone className="w-5 h-5" />
                  Call 0333 323 3940
                </Button>
              </a>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="border-secondary-foreground/20 hover:bg-secondary-foreground/5" data-testid="button-online-quote">
                  Get Quote Online
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
