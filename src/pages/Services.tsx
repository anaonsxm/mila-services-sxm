import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, FileText, Globe, TrendingUp, Users, Briefcase, PieChart, Shield } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Calculator,
      title: "Bookkeeping & Accounting",
      description: "Keep your financial records accurate, organized, and compliant.",
      details: [
        "Monthly financial statement preparation",
        "Accounts payable and receivable management",
        "Bank and credit card reconciliation",
        "Cash flow monitoring and analysis",
        "General ledger maintenance",
        "Financial reporting and insights",
      ],
    },
    {
      icon: FileText,
      title: "Tax Services",
      description: "Expert tax preparation and strategic planning for individuals and businesses.",
      details: [
        "Personal and business tax return preparation",
        "Tax planning and optimization strategies",
        "Quarterly estimated tax calculations",
        "Tax compliance and filing",
        "IRS correspondence assistance",
        "Multi-jurisdiction tax support",
      ],
    },
    {
      icon: TrendingUp,
      title: "QuickBooks Expertise",
      description: "Licensed QuickBooks ProAdvisor services for complete financial management.",
      details: [
        "QuickBooks setup and configuration",
        "Data migration from other systems",
        "Custom chart of accounts",
        "User training and support",
        "Ongoing QuickBooks consulting",
        "Integration with other business tools",
      ],
    },
    {
      icon: Users,
      title: "Financial Consulting",
      description: "Strategic financial guidance to help your business thrive.",
      details: [
        "Business financial planning",
        "Budget creation and monitoring",
        "Financial forecasting and projections",
        "Cash flow management strategies",
        "Profitability analysis",
        "Growth planning and advisory",
      ],
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description: "Comprehensive business support beyond the numbers.",
      details: [
        "Business structure consulting",
        "Startup financial planning",
        "Succession planning",
        "Risk management strategies",
        "Operational efficiency reviews",
        "Financial health assessments",
      ],
    },
    {
      icon: PieChart,
      title: "Financial Reporting",
      description: "Clear, actionable insights into your business performance.",
      details: [
        "Monthly financial statements",
        "Custom management reports",
        "Key performance indicator (KPI) tracking",
        "Comparative financial analysis",
        "Budget vs. actual reporting",
        "Executive dashboards",
      ],
    },
    {
      icon: Shield,
      title: "Payroll Services",
      description: "Accurate, timely payroll processing and compliance.",
      details: [
        "Employee payroll processing",
        "Tax withholding and remittance",
        "Payroll tax filing",
        "Year-end reporting (W-2s, 1099s)",
        "Direct deposit setup",
        "Payroll reconciliation",
      ],
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional websites designed for St. Maarten businesses.",
      details: [
        "Custom, responsive design",
        "Mobile-optimized layouts",
        "SEO-friendly structure",
        "Contact form integration",
        "Social media connectivity",
        "E-commerce capabilities (Advanced)",
        "Ongoing support options",
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
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive financial solutions designed to help your business succeed in St. Maarten
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="border-gradient hover:shadow-lg transition-all duration-300"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 gradient-section grain-texture">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Mila Services?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the difference of working with a dedicated, professional team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Certified</h3>
              <p className="text-muted-foreground">
                QuickBooks ProAdvisor certified with years of accounting expertise
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Service</h3>
              <p className="text-muted-foreground">
                Dedicated attention to your unique business needs and goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
              <p className="text-muted-foreground">
                Focused on helping your business grow and succeed financially
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-muted-foreground">
                Clear, upfront pricing with no hidden fees or surprises
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-muted-foreground">
                Deep understanding of St. Maarten business environment and regulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-muted-foreground">
                Cloud-based solutions and digital tools for efficient service delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how our services can help your business thrive. Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
