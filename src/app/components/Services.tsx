import { ShoppingCart, User, Briefcase } from 'lucide-react';

const services = [
  {
    icon: ShoppingCart,
    title: 'Ecommerce Websites',
    description: 'Complete online stores with payment integration, inventory management, and user-friendly shopping experiences.',
  },
  {
    icon: User,
    title: 'Portfolio Websites',
    description: 'Beautiful, responsive portfolios that showcase your work and help you stand out from the competition.',
  },
  {
    icon: Briefcase,
    title: 'Corporate Websites',
    description: 'Professional business websites that build trust, communicate your brand, and convert visitors into clients.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">What I Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in creating tailored web solutions for businesses and individuals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
