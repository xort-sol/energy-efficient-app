import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, FileText, HelpCircle, Zap, Flame, Droplet } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Support & FAQ</h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions or get in touch with our support team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* FAQ Section */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <CardDescription>Quick answers to common questions about our services</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" data-testid="faq-switch-time">
                      <AccordionTrigger>How long does it take to switch energy suppliers?</AccordionTrigger>
                      <AccordionContent>
                        The switching process typically takes between 2-4 weeks from the date you confirm your new contract. We handle all the paperwork and coordination with both your current and new suppliers, making the process as smooth as possible with no disruption to your energy supply.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" data-testid="faq-fees">
                      <AccordionTrigger>Are there any hidden fees or charges?</AccordionTrigger>
                      <AccordionContent>
                        No, we believe in complete transparency. The price we quote is the price you pay. There are no hidden fees, connection charges, or exit fees (unless specified in your contract terms). We provide clear, straightforward pricing so you know exactly what you're paying for.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" data-testid="faq-contract">
                      <AccordionTrigger>What contract lengths do you offer?</AccordionTrigger>
                      <AccordionContent>
                        We offer flexible contract lengths to suit your business needs, typically ranging from 12 to 36 months for fixed-rate plans. The contract length you choose will depend on your preference for price certainty versus flexibility. Our team can help you determine the best option for your business.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" data-testid="faq-green">
                      <AccordionTrigger>What makes your green energy "100% renewable"?</AccordionTrigger>
                      <AccordionContent>
                        Our green electricity plans are backed by Renewable Energy Guarantees of Origin (REGOs). This certification system, administered by OFGEM, proves that your electricity comes from 100% renewable sources such as wind, solar, and hydro power. For gas, we offer carbon offset programs through the Verified Carbon Standard (VCS).
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" data-testid="faq-quote">
                      <AccordionTrigger>How do I get a quote?</AccordionTrigger>
                      <AccordionContent>
                        Getting a quote is easy! You can either fill out our online quote form, call us on 0333 323 3940, or request a callback. We'll need some basic information about your business and current energy usage. Our team will then prepare a bespoke quote tailored to your specific needs, typically within 1-2 business days.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" data-testid="faq-small-business">
                      <AccordionTrigger>What qualifies as a small business?</AccordionTrigger>
                      <AccordionContent>
                        For our small business energy plans, we typically define small businesses as those with annual electricity usage up to 100,000 kWh or gas usage up to 293,000 kWh. If your usage is higher, we offer bespoke large business quotes with competitive rates tailored to your specific consumption levels.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7" data-testid="faq-multi-fuel">
                      <AccordionTrigger>Can I get electricity, gas, and water from you?</AccordionTrigger>
                      <AccordionContent>
                        Yes! Our Multi-Fuel plans allow you to bundle electricity, gas, and water services together. This not only provides better rates but also simplifies your billing and account management. You'll have one point of contact for all your business utilities, making life easier.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8" data-testid="faq-billing">
                      <AccordionTrigger>How does billing work?</AccordionTrigger>
                      <AccordionContent>
                        You'll receive clear, itemized bills based on your actual energy consumption. Bills are typically sent monthly or quarterly, depending on your preference. We offer online account management where you can view your bills, track usage, and make payments at any time.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9" data-testid="faq-support">
                      <AccordionTrigger>What if I need help or have questions?</AccordionTrigger>
                      <AccordionContent>
                        Our customer support team is available Monday to Friday, 9:00 AM - 5:30 PM, and Saturday 10:00 AM - 2:00 PM. You can reach us by phone at 0333 323 3940 or email us at info@nationwideenergies.co.uk. We aim to respond to all inquiries within 1-2 business hours during office hours.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10" data-testid="faq-cancellation">
                      <AccordionTrigger>Can I cancel my contract early?</AccordionTrigger>
                      <AccordionContent>
                        Contract terms vary depending on the plan you choose. Some contracts may have early termination fees while others offer more flexibility. We always make these terms clear upfront before you sign. If you're considering canceling, contact our team to discuss your options and any applicable fees.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Quick Help Cards */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Need More Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/contact">
                    <Button variant="outline" className="w-full justify-start gap-2" data-testid="button-contact-us">
                      <Mail className="w-4 h-4" />
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/quote">
                    <Button variant="outline" className="w-full justify-start gap-2" data-testid="button-get-quote">
                      <FileText className="w-4 h-4" />
                      Get a Quote
                    </Button>
                  </Link>
                  <a href="tel:03333233940">
                    <Button variant="outline" className="w-full justify-start gap-2" data-testid="button-call-support">
                      <Phone className="w-4 h-4" />
                      Call 0333 323 3940
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Browse by Topic</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/electricity">
                    <Button variant="ghost" className="w-full justify-start gap-2 hover-elevate" data-testid="link-electricity-help">
                      <Zap className="w-4 h-4 text-primary" />
                      Electricity Plans
                    </Button>
                  </Link>
                  <Link href="/gas">
                    <Button variant="ghost" className="w-full justify-start gap-2 hover-elevate" data-testid="link-gas-help">
                      <Flame className="w-4 h-4 text-accent" />
                      Gas Plans
                    </Button>
                  </Link>
                  <Link href="/water">
                    <Button variant="ghost" className="w-full justify-start gap-2 hover-elevate" data-testid="link-water-help">
                      <Droplet className="w-4 h-4 text-secondary" />
                      Water Services
                    </Button>
                  </Link>
                  <Link href="/green-energy">
                    <Button variant="ghost" className="w-full justify-start gap-2 hover-elevate" data-testid="link-green-help">
                      <HelpCircle className="w-4 h-4 text-primary" />
                      Green Energy
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
