import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessStep } from "@/components/ProcessStep";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, Flame, Droplet, Leaf, Phone, Building2, TrendingDown, TrendingUp, Shield, Award, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@assets/stock_images/modern_office_building.jpg";

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

      {/* Business Energy Made Simple */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-semibold text-primary">OUR BEST PRICES ONLINE</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Simplify and Save on Your Business Energy and Water</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Request a callback, or tell us how much you spend on business energy per year and get a quote today. We offer comprehensive energy solutions tailored to your business needs, from small startups to large enterprises.
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
          </motion.div>

          {/* Quote Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-lg border border-card-border text-center"
            >
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Request a Callback</h3>
              <p className="text-muted-foreground mb-6">
                For businesses of all sizes looking for an electricity, gas or water supply quote.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Call me back
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-lg border border-card-border text-center"
            >
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Small Business Quote</h3>
              <p className="text-muted-foreground mb-6">
                For micro and smaller business quotes, with an annual electricity usage up to 100,000 kWh or gas up to 293,000 kWh.
              </p>
              <Link href="/quote">
                <Button className="w-full bg-accent hover:bg-accent text-accent-foreground">
                  Get a quote
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card p-8 rounded-lg border border-card-border text-center"
            >
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Large Business Quote</h3>
              <p className="text-muted-foreground mb-6">
                Annual energy usage over 100,000 kWh of electricity, or 293,000 kWh of gas? Get a bespoke business energy quote now.
              </p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  Get in touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Optimise Your Business Energy Supply</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive energy solutions designed to reduce costs, improve efficiency, and support your sustainability goals.
            </p>
          </motion.div>

          {/* Business Utilities */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Business Utilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ServiceCard
                  icon={Zap}
                  title="Business Electricity"
                  description="Competitive electricity plans for businesses of all sizes with flexible contract lengths and transparent pricing."
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
                  description="Reliable gas supply with transparent pricing, exceptional customer service, and flexible contract options."
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
                  description="Streamlined water services for your business with competitive rates and comprehensive support."
                  href="/water"
                  iconColor="bg-secondary"
                />
              </motion.div>
            </div>
          </div>

          {/* Energy Solutions */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Energy Solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card p-6 rounded-lg border border-card-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">EV Charging</h4>
                <p className="text-sm text-muted-foreground">Install electric vehicle charging points for your business premises</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-6 rounded-lg border border-card-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">New Connections</h4>
                <p className="text-sm text-muted-foreground">Expert support for new energy connections and infrastructure</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-card p-6 rounded-lg border border-card-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">SMETS2 Smart Meters</h4>
                <p className="text-sm text-muted-foreground">Advanced smart metering solutions for accurate billing and monitoring</p>
              </motion.div>
            </div>
          </div>

          {/* Green Energy */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">Green Energy</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <ServiceCard
                  icon={Leaf}
                  title="Pure Green Electricity"
                  description="100% renewable electricity sourced from wind, solar, and other sustainable generators with REGO backing."
                  href="/green-energy"
                  iconColor="bg-primary"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-card p-6 rounded-lg border border-card-border text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Carbon Neutral Gas</h4>
                <p className="text-sm text-muted-foreground">Environmentally friendly gas options to support your journey towards net zero</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Health Check Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Are You Paying Too Much For Your Business Energy?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Find out how your energy consumption stacks up against others in your industry with our free energy healthcheck tool. Get personalized insights and recommendations to optimize your energy usage and reduce costs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingDown className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Industry Benchmarking</h3>
                    <p className="text-sm text-muted-foreground">Compare your energy usage against similar businesses in your sector</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Cost Optimization</h3>
                    <p className="text-sm text-muted-foreground">Identify opportunities to reduce your energy bills and improve efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Recommendations</h3>
                    <p className="text-sm text-muted-foreground">Receive tailored advice from our energy specialists</p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent text-accent-foreground">
                  Try It Now
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Free Energy Health Check</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Current Usage Analysis</span>
                  <span className="text-sm font-semibold text-primary">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Industry Comparison</span>
                  <span className="text-sm font-semibold text-primary">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Savings Opportunities</span>
                  <span className="text-sm font-semibold text-primary">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Expert Consultation</span>
                  <span className="text-sm font-semibold text-primary">✓ Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Fuel Savings Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
                    <span className="text-sm">Combine electricity, gas & water</span>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Multi-Fuel Business Energy Supply</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Take advantage of our multi-fuel packages and save even more on your business energy costs. When you combine electricity, gas, and water supplies with us, you'll benefit from:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingDown className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Up to 15% Discount</h3>
                    <p className="text-sm text-muted-foreground">Save more when you take multiple utilities with us</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Building2 className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Single Point of Contact</h3>
                    <p className="text-sm text-muted-foreground">One account manager for all your utility needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-3 h-3 text-primary" />
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

      {/* Three-Step Process */}
      <section className="py-16 lg:py-24 bg-background">
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

      {/* Putting You First */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Putting You First</h2>
            <p className="text-lg text-muted-foreground">
              As well-established business energy experts you're in safe hands, with simple, competitive fixed energy plans and great service, saving you time and money.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Business Energy Specialist</h3>
              <p className="text-muted-foreground mb-6">
                As well-established business energy experts you're in safe hands, with simple, competitive fixed energy plans and great service, saving you time and money.
              </p>
              <a href="tel:03333233940">
                <Button variant="outline" className="w-full">
                  By Phone
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Customer Service</h3>
              <p className="text-muted-foreground mb-6">
                Your time is a valuable resource so we answer your calls sharpish, saving you time to focus on your business.
              </p>
              <Link href="/support">
                <Button variant="outline" className="w-full">
                  Get Support
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Tailored to You</h3>
              <p className="text-muted-foreground mb-6">
                With a range of different energy plans and contract lengths including Pure Green electricity and Carbon neutral gas options. Find out more.
              </p>
              <Link href="/green-energy">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Business Size Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-card p-8 rounded-lg border border-card-border text-center"
            >
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Small Business</h3>
              <p className="text-muted-foreground mb-4">Annual energy usage: <strong>Up to 500,000 kWh</strong></p>
              <Link href="/quote">
                <Button className="w-full bg-accent hover:bg-accent text-accent-foreground">
                  See small business plans
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card p-8 rounded-lg border border-card-border text-center"
            >
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Large Business</h3>
              <p className="text-muted-foreground mb-4">Annual energy usage: <strong>Over 500,000 kWh</strong></p>
              <Link href="/contact">
                <Button variant="outline" className="w-full">
                  See large business plans
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-muted/30">
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
