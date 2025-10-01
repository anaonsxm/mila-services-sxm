import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Globe } from "lucide-react";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Monthly bookkeeping",
        "Financial statements",
        "Bank reconciliation",
        "Email support",
        "Quarterly reviews",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses with tax needs",
      features: [
        "Everything in Basic",
        "Tax preparation & filing",
        "QuickBooks setup & training",
        "Priority support",
        "Monthly financial analysis",
        "Tax planning consultation",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "Comprehensive solution for established businesses",
      features: [
        "Everything in Pro",
        "Custom financial consulting",
        "Payroll processing",
        "Advanced reporting",
        "Dedicated account manager",
        "On-site visits (quarterly)",
        "Strategic planning sessions",
      ],
      highlighted: false,
    },
  ];

  const additionalServices = [
    {
      service: "One-time Tax Filing",
      price: "$350+",
      description: "Personal or business tax return preparation",
    },
    {
      service: "QuickBooks Setup",
      price: "$500",
      description: "Complete setup and training session",
    },
    {
      service: "Financial Audit Prep",
      price: "$750+",
      description: "Prepare financial records for external audit",
    },
    {
      service: "Catch-up Bookkeeping",
      price: "$150/hour",
      description: "Get your books up to date",
    },
  ];

  const websitePackages = [
    {
      name: "Basic Website",
      price: "$500",
      features: [
        "Modern, responsive design",
        "Up to 5 pages",
        "Contact form",
        "Mobile-optimized",
        "Basic SEO",
        "Social media links",
      ],
    },
    {
      name: "Advanced Website",
      price: "$1,500",
      features: [
        "Everything in Basic",
        "Up to 10 pages",
        "Custom functionality",
        "E-commerce ready",
        "Advanced SEO optimization",
        "Blog integration",
        "Analytics setup",
        "3 months support",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 gradient-hero grain-texture">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Subscription Tiers */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Monthly Subscription Plans</h2>
            <p className="text-lg text-muted-foreground">
              Ongoing support and services tailored to your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`relative ${
                  tier.highlighted
                    ? "border-primary shadow-glow scale-105"
                    : "border-gradient"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <CardDescription className="text-base">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full ${tier.highlighted ? "shadow-glow" : ""}`}
                    variant={tier.highlighted ? "default" : "outline"}
                  >
                    <Link to="/contact">Subscribe Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4 gradient-section grain-texture">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">À La Carte Services</h2>
            <p className="text-lg text-muted-foreground">
              Need something specific? We offer flexible one-time services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((item, index) => (
              <Card key={index} className="border-gradient">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl">{item.service}</CardTitle>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                  </div>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Website Development Pricing */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl font-bold mb-4">Website Development Packages</h2>
            <p className="text-lg text-muted-foreground">
              Professional websites to establish your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websitePackages.map((pkg, index) => (
              <Card key={index} className="border-gradient">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl mb-4">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Not Sure Which Plan is Right?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Schedule a free consultation and we'll help you choose the perfect solution for your business.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
