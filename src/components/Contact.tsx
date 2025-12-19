import { Phone, MapPin, Clock, Instagram, Mail, Sun } from "lucide-react";

const Contact = () => {
  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Main Contact Section */}
      <div className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                Contact Us
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-10">
                Ready to harness the power of the sun? Get in touch with us for a free
                consultation and quote.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+919885677321"
                  className="glass-card p-5 flex items-center gap-5 hover-lift group"
                >
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                    <p className="font-semibold text-lg text-foreground">+91 9885677321</p>
                  </div>
                </a>

                {/* Address */}
                <div className="glass-card p-5 flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Visit Us</p>
                    <p className="font-medium text-foreground leading-relaxed">
                      Provident Kenworth Tower 16, Flat No: 704,
                      <br />
                      Rajendranagar, Hyderabad,
                      <br />
                      Telangana - 500030
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="glass-card p-5 flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Business Hours</p>
                    <div className="space-y-1">
                      <p className="text-foreground">
                        <span className="font-medium">Mon - Fri:</span> 9am to 6pm
                      </p>
                      <p className="text-foreground">
                        <span className="font-medium">Saturday:</span> 10am to 5pm
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Sunday:</span> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form / CTA */}
            <div className="glass-card p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-6 animate-glow-pulse">
                  <Sun className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Get Your Free Quote
                </h3>
                <p className="text-muted-foreground">
                  Connect with us via phone or visit our social media for the latest updates
                  and inquiries.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:+919885677321"
                  className="flex items-center justify-center gap-3 w-full bg-gradient-solar text-primary-foreground py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>

                <a
                  href="https://www.instagram.com/creative.energy.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-secondary text-secondary-foreground py-4 rounded-2xl font-semibold text-lg border border-border hover:bg-secondary/80 transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                  Follow on Instagram
                </a>

                <a
                  href="mailto:contact@creativeenergy.in"
                  className="flex items-center justify-center gap-3 w-full bg-secondary text-secondary-foreground py-4 rounded-2xl font-semibold text-lg border border-border hover:bg-secondary/80 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </a>
              </div>

              <p className="text-center text-muted-foreground text-sm mt-8">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8 border-t border-border bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Creative Energy Solutions. All Rights Reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <Sun className="w-4 h-4 text-primary" />
              Powering Progress with the Sun, Since 2008
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;