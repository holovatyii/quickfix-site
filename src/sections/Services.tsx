import { useEffect, useRef, useState } from 'react';
import { Monitor, ImageIcon, Layers, Package, Wrench, ArrowRight, Droplets, Zap, Home } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'TV Wall Mounting',
    description: 'Secure installation on any wall type, including plasterboard. We ensure perfect positioning and cable management.',
    image: '/images/service-tv.jpg',
    icon: Monitor,
  },
  {
    id: 2,
    title: 'Mirror & Art Hanging',
    description: 'Precise placement and leveling for all your artwork, mirrors, and decorative pieces. Quality fixings guaranteed.',
    image: '/images/service-art.jpg',
    icon: ImageIcon,
  },
  {
    id: 3,
    title: 'Shelf Installation',
    description: 'Custom shelving solutions for any room. From floating shelves to built-in units, we do it all.',
    image: '/images/service-shelf.jpg',
    icon: Layers,
  },
  {
    id: 4,
    title: 'Furniture Assembly',
    description: 'Flat-pack furniture experts. We assemble IKEA, Argos, and all major brands quickly and correctly.',
    image: '/images/service-furniture.jpg',
    icon: Package,
  },
  {
    id: 5,
    title: 'General Repairs',
    description: 'Door repairs, lock changes, fixture installations, and all those odd jobs around your home.',
    image: '/images/service-repairs.jpg',
    icon: Wrench,
  },
  {
    id: 6,
    title: 'Plumbing Fixes',
    description: 'Leaking taps, running toilets, under-sink pipe repairs, and shower fittings. Fast, clean, no mess left behind.',
    image: '/images/service-shelf.jpg',
    icon: Droplets,
  },
  {
    id: 7,
    title: 'Electrical Fixtures',
    description: 'Light fittings, socket replacements, switch changes, and ceiling rose installations. Safe, tidy work every time.',
    image: '/images/service-tv.jpg',
    icon: Zap,
  },
  {
    id: 8,
    title: 'End-of-Tenancy Repairs',
    description: 'Void period and end-of-tenancy fixes for landlords and letting agencies. Quick turnaround, property-ready results.',
    image: '/images/service-furniture.jpg',
    icon: Home,
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-dark-500 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-orange font-medium text-sm tracking-wider uppercase mb-4">
            What We Do
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            OUR <span className="text-orange">SERVICES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From small repairs to complete installations, we provide professional handyman services 
            tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            
            return (
              <div
                key={service.id}
                data-index={index}
                className={`service-card group relative bg-dark-400 rounded-xl overflow-hidden border border-dark-300 hover:border-orange/50 transition-all duration-500 hover-lift ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-orange rounded-lg flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-orange transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-orange text-sm font-medium group/link"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-orange/5 to-transparent" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Need something else? We handle all types of home repairs.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-orange text-orange px-8 py-3 rounded-lg font-medium hover:bg-orange hover:text-black transition-all duration-300"
          >
            Get a Custom Quote
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
