import { ArrowRight, Building2, Tent, Home, TreePine, Sun, Fence, Droplets, Battery, Plug } from "lucide-react";
import solarBuilding from "@/assets/solar-building.jpg";
import solarPergola from "@/assets/solar-pergola.jpg";
import solarPatio from "@/assets/solar-patio.png";
import solarGazebo from "@/assets/solar-gazebo.jpg";

const mainProducts = [
  {
    title: "Solar Integrated Buildings",
    description:
      "Solar panels integrated as roofs, walls, facades, skylights, or windows. Dual-purpose solution serving as both construction material and power generator.",
    benefits: [
      "Reduces need for traditional building materials",
      "Provides clean, renewable electricity",
      "Improves aesthetics with seamless design",
      "Increases energy efficiency",
    ],
    image: solarBuilding,
    icon: Building2,
  },
  {
    title: "Solar Pergolas",
    description:
      "Traditional pergola structure with solar panels installed on top, providing shade, shelter, and renewable energy generation.",
    benefits: [
      "Ideal where rooftops can't support panels",
      "Adds usable outdoor space",
      "Can connect to grid or battery storage",
      "Perfect for EV charging stations",
    ],
    image: solarPergola,
    icon: Tent,
  },
  {
    title: "Solar Patio Covers",
    description:
      "Elegant patio covers with solar panels instead of regular roofing, protecting your outdoor space while generating clean power.",
    benefits: [
      "Makes use of unused outdoor space",
      "Cuts electricity bills significantly",
      "Enhances property value",
      "Stylish and sustainable design",
    ],
    image: solarPatio,
    icon: Home,
  },
  {
    title: "Solar Gazebos",
    description:
      "Classic gazebo designs with integrated solar roofs, offering shaded comfort and renewable energy for your outdoor spaces.",
    benefits: [
      "Perfect for gardens and backyards",
      "Powers outdoor lighting and fans",
      "Adds property value",
      "Eco-friendly solution",
    ],
    image: solarGazebo,
    icon: TreePine,
  },
];

const additionalProducts = [
  { name: "Solar Street Lights", icon: Sun },
  { name: "Solar Fencing", icon: Fence },
  { name: "Solar Water Heater", icon: Droplets },
  { name: "Solar Water Pumps", icon: Droplets },
  { name: "Solar Charging Stations", icon: Plug },
];

const Products = () => {
  return (
    <section id="products" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Our Solutions
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solar solutions designed for modern living, from integrated buildings
            to outdoor structures.
          </p>
        </div>

        {/* Main Products */}
        <div className="space-y-24">
          {mainProducts.map((product, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative rounded-3xl overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 p-4 rounded-2xl bg-primary/90 backdrop-blur-sm">
                    <product.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
                >
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products */}
        <div className="mt-24">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-12">
            More <span className="gradient-text">Solar Products</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalProducts.map((product, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-lift group cursor-pointer"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <product.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;