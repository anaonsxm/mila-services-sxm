import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calculator, FileText, Globe, Sparkles, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping & Accounting",
      description: "Professional financial record-keeping and reporting for your business.",
    },
    {
      icon: FileText,
      title: "Tax Services",
      description: "Expert tax preparation, filing, and strategic tax planning.",
    },
    {
      icon: TrendingUp,
      title: "QuickBooks Expertise",
      description: "Licensed QuickBooks setup, training, and ongoing support.",
    },
    {
      icon: Users,
      title: "Financial Consulting",
      description: "Strategic financial advice to help your business grow.",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Custom, affordable websites for businesses and entrepreneurs.",
    },
    {
      icon: Sparkles,
      title: "Business Solutions",
      description: "Comprehensive packages tailored to your business needs.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-hero grain-texture relative overflow-hidden">
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Expert Accounting & Tax Services in{" "}
              <span className="text-primary">St. Maarten</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Licensed QuickBooks expertise, transparent pricing, and professional financial solutions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 shadow-glow animate-glow">
                <Link to="/pricing">Get Started Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive financial solutions designed for businesses in St. Maarten
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-gradient hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Website Development Promo */}
      <section className="py-20 px-4 gradient-section grain-texture">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-gradient">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Build Your Business Website with Mila Services
              </CardTitle>
              <CardDescription className="text-lg">
                Professional, affordable websites designed for entrepreneurs and small businesses in St. Maarten
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Basic Site - $500</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Modern, responsive design</li>
                    <li>• Up to 5 pages</li>
                    <li>• Contact form integration</li>
                    <li>• Mobile-optimized</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Advanced Site - $1,500</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Everything in Basic</li>
                    <li>• Custom functionality</li>
                    <li>• E-commerce ready</li>
                    <li>• SEO optimization</li>
                  </ul>
                </div>
              </div>
              <Button asChild size="lg" className="shadow-glow">
                <Link to="/contact">Get Your Website Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join businesses across St. Maarten who trust Mila Services for their accounting and tax needs.
          </p>
          <Button asChild size="lg" className="text-lg px-8 shadow-glow animate-glow">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
