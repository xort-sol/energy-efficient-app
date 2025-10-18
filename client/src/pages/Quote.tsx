import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Building2, Users, Phone, Mail, CheckCircle2, Loader2 } from "lucide-react";

export default function Quote() {
  const [businessType, setBusinessType] = useState<string>("small");
  const { toast } = useToast();

  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      businessType: "small",
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      postcode: "",
      annualElectricityUsage: "",
      annualGasUsage: "",
      serviceType: "electricity",
      message: "",
    },
  });

  const createQuoteMutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      return apiRequest("POST", "/api/quotes", data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted!",
        description: "We'll contact you within 1-2 business days with your bespoke quote.",
      });
      form.reset();
      setBusinessType("small");
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: error.message || "Failed to submit quote request. Please try again.",
      });
    },
  });

  const onSubmit = (data: InsertQuoteRequest) => {
    createQuoteMutation.mutate({ ...data, businessType });
  };

  const handleBusinessTypeChange = (type: string) => {
    setBusinessType(type);
    form.setValue("businessType", type);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get a Business Energy Quote</h1>
            <p className="text-lg text-muted-foreground">
              Fill in your details below and we'll get back to you with a competitive quote tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Quote Request Form</CardTitle>
                  <CardDescription>Complete the form and we'll contact you with your bespoke quote</CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-quote">
                      {/* Business Type Selection */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => handleBusinessTypeChange("small")}
                          className={`p-4 rounded-lg border-2 transition-all hover-elevate ${
                            businessType === "small"
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          }`}
                          data-testid="button-business-type-small"
                        >
                          <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-semibold mb-1">Small Business</h3>
                          <p className="text-xs text-muted-foreground">
                            Annual usage up to 100,000 kWh (electricity) or 293,000 kWh (gas)
                          </p>
                        </button>
                        <button
                          type="button"
                          onClick={() => handleBusinessTypeChange("large")}
                          className={`p-4 rounded-lg border-2 transition-all hover-elevate ${
                            businessType === "large"
                              ? "border-primary bg-primary/5"
                              : "border-border"
                          }`}
                          data-testid="button-business-type-large"
                        >
                          <Building2 className="w-8 h-8 mx-auto mb-2 text-primary" />
                          <h3 className="font-semibold mb-1">Large Business</h3>
                          <p className="text-xs text-muted-foreground">
                            Annual usage over 100,000 kWh (electricity) or 293,000 kWh (gas)
                          </p>
                        </button>
                      </div>

                      {/* Company Information */}
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="companyName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name *</FormLabel>
                              <FormControl>
                                <Input {...field} data-testid="input-company-name" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="contactName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contact Name *</FormLabel>
                                <FormControl>
                                  <Input {...field} data-testid="input-contact-name" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="postcode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Postcode *</FormLabel>
                                <FormControl>
                                  <Input {...field} data-testid="input-postcode" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address *</FormLabel>
                                <FormControl>
                                  <Input {...field} type="email" data-testid="input-email" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number *</FormLabel>
                                <FormControl>
                                  <Input {...field} type="tel" data-testid="input-phone" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Service Type */}
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-type">
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="electricity">Electricity Only</SelectItem>
                                <SelectItem value="gas">Gas Only</SelectItem>
                                <SelectItem value="water">Water Only</SelectItem>
                                <SelectItem value="multi-fuel">Multi-Fuel (Electricity & Gas)</SelectItem>
                                <SelectItem value="green">Green Energy</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Usage Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="annualElectricityUsage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Annual Electricity Usage (kWh)</FormLabel>
                              <FormControl>
                                <Input {...field} value={field.value || ""} placeholder="e.g., 50000" data-testid="input-electricity-usage" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="annualGasUsage"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Annual Gas Usage (kWh)</FormLabel>
                              <FormControl>
                                <Input {...field} value={field.value || ""} placeholder="e.g., 150000" data-testid="input-gas-usage" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Additional Message */}
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Information</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field}
                                value={field.value || ""}
                                placeholder="Tell us more about your business energy needs..." 
                                rows={4}
                                data-testid="textarea-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-accent hover:bg-accent text-accent-foreground"
                        disabled={createQuoteMutation.isPending}
                        data-testid="button-submit-quote"
                      >
                        {createQuoteMutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          "Request Quote"
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3" data-testid="step-review">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">We Review Your Request</h4>
                      <p className="text-sm text-muted-foreground">Our team will analyze your energy needs and usage</p>
                    </div>
                  </div>
                  <div className="flex gap-3" data-testid="step-prepare">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">We Prepare Your Quote</h4>
                      <p className="text-sm text-muted-foreground">Get a bespoke quote tailored to your business</p>
                    </div>
                  </div>
                  <div className="flex gap-3" data-testid="step-contact">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">We Contact You</h4>
                      <p className="text-sm text-muted-foreground">Receive your quote within 1-2 business days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2" data-testid="benefit-competitive">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Competitive market rates</span>
                  </div>
                  <div className="flex items-start gap-2" data-testid="benefit-transparent">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Transparent pricing with no hidden fees</span>
                  </div>
                  <div className="flex items-start gap-2" data-testid="benefit-support">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Expert customer support team</span>
                  </div>
                  <div className="flex items-start gap-2" data-testid="benefit-green">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Green energy options available</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary text-secondary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <a href="tel:03333233940" className="flex items-center gap-2 hover-elevate p-2 -m-2 rounded-md" data-testid="link-phone-help">
                    <Phone className="w-5 h-5" />
                    <div>
                      <p className="text-sm font-medium">Call Us</p>
                      <p className="text-sm text-secondary-foreground/80">0333 323 3940</p>
                    </div>
                  </a>
                  <a href="mailto:info@nationwideenergies.co.uk" className="flex items-center gap-2 hover-elevate p-2 -m-2 rounded-md" data-testid="link-email-help">
                    <Mail className="w-5 h-5" />
                    <div>
                      <p className="text-sm font-medium">Email Us</p>
                      <p className="text-sm text-secondary-foreground/80">info@nationwideenergies.co.uk</p>
                    </div>
                  </a>
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
