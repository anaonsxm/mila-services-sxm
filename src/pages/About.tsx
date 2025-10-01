import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Heart, MapPin, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 px-4 gradient-hero grain-texture">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-primary">Mila Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner for accounting, tax, and business solutions in St. Maarten
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6">Meet Mila</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mila Services was founded with a simple mission: to provide St. Maarten businesses with 
                  professional, reliable, and transparent accounting services that they can trust.
                </p>
                <p>
                  With years of experience in accounting, tax preparation, and financial consulting, 
                  Mila has helped countless businesses streamline their finances, stay compliant, and 
                  achieve their growth objectives.
                </p>
                <p>
                  As a licensed QuickBooks ProAdvisor, Mila specializes in helping businesses leverage 
                  modern financial technology to gain better insights and make smarter decisions.
                </p>
                <p>
                  Beyond traditional accounting services, Mila Services now offers website development 
                  to help St. Maarten businesses establish a strong online presence and reach more customers.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-transparent rounded-2xl border border-primary/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 gradient-section grain-texture">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gradient text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We operate with honesty, transparency, and the highest ethical standards in all our work.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gradient text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We're committed to delivering exceptional service and results for every client, every time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gradient text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Partnership</h3>
                <p className="text-muted-foreground">
                  We view our clients as partners and invest in their long-term success and growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gradient text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace modern technology and methods to deliver efficient, effective solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gradient text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Expertise</h3>
                <p className="text-muted-foreground">
                  Continuous learning and professional development to stay ahead of industry changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gradient text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Local Focus</h3>
                <p className="text-muted-foreground">
                  Deep commitment to supporting and strengthening the St. Maarten business community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Credentials & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              Professional qualifications and specializations
            </p>
          </div>

          <Card className="border-gradient">
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Certifications</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>QuickBooks ProAdvisor Certified</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Licensed Accounting Professional</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Tax Preparation Specialist</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Specializations</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Small Business Accounting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Tax Planning & Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Financial Systems Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Business Advisory Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-20 px-4 gradient-section grain-texture">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Proudly Serving St. Maarten</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Located in the heart of St. Maarten, we're here to serve businesses across the island 
            with in-person consultations, on-site services, and remote support options.
          </p>
          <Button asChild size="lg" className="shadow-glow">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to take your business finances to the next level? Schedule a consultation 
            and discover how Mila Services can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
