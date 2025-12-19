import { MapPin, Calendar, Star, Target } from "lucide-react";
import founderImage from "@/assets/founder.jpg";

const highlights = [
  { icon: Calendar, label: "Since", value: "2008" },
  { icon: MapPin, label: "Coverage", value: "Telangana & AP" },
  { icon: Star, label: "Rating", value: "5/5 Google" },
  { icon: Target, label: "Installed", value: "200+ Plants" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-solar-orange/5 rounded-full blur-[100px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Who We <span className="gradient-text">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A pioneering solar energy company transforming the renewable energy
            landscape across Southern India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Founder Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden solar-glow">
              <img
                src={founderImage}
                alt="Kalwala Rajesh Gupta - Founder"
                className="w-full h-auto object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Kalwala Rajesh Gupta
                </h3>
                <p className="text-primary font-medium">Founder & CEO</p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 md:right-6 glass-card p-4 animate-float">
              <p className="text-sm font-medium text-muted-foreground mb-1">Experience</p>
              <p className="text-2xl font-bold gradient-text">15+ Years</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Started my career in 2008 at HBL, later advancing to Wind Steam Energies,
                where I gained valuable industry expertise. Following the COVID era, I pursued
                my entrepreneurial vision and founded{" "}
                <span className="text-primary font-semibold">Creative Energy Solutions</span>.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Under my leadership, the company has grown steadily, earning excellent reviews
                and strong client trust. We leverage regional insights, technical excellence,
                and dedication to delivering solar solutions that are reliable, scalable, and
                sustainable.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-3 md:p-4 flex items-start gap-3 md:gap-4 hover-lift min-h-[100px]"
                >
                  <div className="p-2 md:p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs md:text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground text-sm md:text-base break-words leading-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Vision */}
            <div className="glass-card p-6 border-l-4 border-primary">
              <h4 className="font-display text-xl font-semibold mb-3">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                To lead the transition toward clean energy in Southern India by delivering
                innovative solar solutions that empower communities, foster economic growth,
                and protect the environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;