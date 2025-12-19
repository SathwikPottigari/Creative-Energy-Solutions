import { Sun, Zap, Award, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-solar.jpg";

const stats = [
  { icon: Sun, value: "200+", label: "Solar Plants Installed" },
  { icon: Zap, value: "15+", label: "Years of Experience" },
  { icon: Award, value: "5/5", label: "Google Rating" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Solar panels at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/60" />
      </div>

      {/* Animated Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-glow-pulse" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-up opacity-0">
            <Sun className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Solarising With Happiness ☀
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            Powering Progress{" "}
            <span className="gradient-text">With The Sun</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-200">
            Leading the transition toward clean energy in Southern India with innovative
            solar solutions that empower communities since 2008.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-up opacity-0 delay-300">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 bg-gradient-solar text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              Explore Solutions
              <ArrowDown className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg border border-border hover:bg-secondary transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up opacity-0 delay-400">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;