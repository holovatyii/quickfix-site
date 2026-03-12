import { useEffect, useRef, useState } from 'react';
import { User, Users, Check, Phone, Clock, Shield, Star } from 'lucide-react';

const pricingPlans = [
  {
    id: 1,
    name: '1 Handyman',
    price: '£55',
    period: 'per hour',
    description: 'Perfect for most household jobs',
    icon: User,
    features: [
      'TV mounting up to 55"',
      'Pictures, mirrors, shelves',
      'Furniture assembly',
      'Door handle repairs',
      'Light fixture changes',
      'Curtain pole installation',
      'Shower/bath resealing',
    ],
    note: '1-hour minimum booking',
    popular: false,
  },
  {
    id: 2,
    name: '2 Handymen',
    price: '£75',
    period: 'per hour',
    description: 'For heavy lifting & larger jobs',
    icon: Users,
    features: [
      'TV mounting over 55"',
      'Large mirrors & artwork',
      'Heavy furniture moving',
      'Wardrobe assembly',
      'Ceiling light installations',
      'Ladder work',
      'Sofa assembly',
    ],
    note: '1-hour minimum booking',
    popular: true,
  },
];

const additionalInfo = [
  {
    icon: Clock,
    title: 'Billing',
    description: 'All jobs billed in 30-minute intervals after the first hour.',
  },
  {
    icon: Shield,
    title: 'Materials',
    description: 'Fixings, screws, and wall plugs billed separately at cost.',
  },
  {
    icon: Star,
    title: 'No Extras',
    description: 'No parking fees, no travel charges, no hidden costs.',
  },
];

const Pricing = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setHoveredCard(cardId);
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-dark-500 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, white 49%, white 51%, transparent 52%)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-orange font-medium text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Pricing
          </span>
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            TRANSPARENT <span className="text-orange">PRICING</span>
          </h2>
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            No hidden fees. No parking charges. No surprises. 
            Just honest, competitive rates for professional handyman services in London.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredCard === plan.id;
            
            return (
              <div
                key={plan.id}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseMove={(e) => handleMouseMove(e, plan.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`relative bg-dark-400 rounded-2xl p-8 border-2 transition-all duration-500 overflow-hidden ${
                    plan.popular 
                      ? 'border-orange shadow-lg shadow-orange/20' 
                      : 'border-dark-300 hover:border-orange/50'
                  }`}
                  style={{
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  }}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-orange text-black text-xs font-bold px-4 py-1 rounded-b-lg">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Shine Effect */}
                  {isHovered && (
                    <div 
                      className="absolute w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
                      style={{
                        left: mousePosition.x - 64,
                        top: mousePosition.y - 64,
                      }}
                    />
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                      plan.popular ? 'bg-orange' : 'bg-dark-300'
                    }`}>
                      <Icon className={`w-8 h-8 ${plan.popular ? 'text-black' : 'text-orange'}`} />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="font-display text-5xl font-bold text-orange">{plan.price}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <p className="text-center text-gray-500 text-xs mb-6">{plan.note}</p>

                  {/* CTA */}
                  <a
                    href="tel:07861479598"
                    className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-orange text-black hover:bg-orange-600 hover:shadow-lg hover:shadow-orange/30'
                        : 'border-2 border-orange text-orange hover:bg-orange hover:text-black'
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                    Book Now
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div 
          className={`grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {additionalInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div 
                key={index} 
                className="flex items-start gap-4 p-4 bg-dark-400/50 rounded-xl border border-dark-300"
              >
                <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-white mb-1">{info.title}</h4>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Payment Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Payment required upon job completion. We accept cash, bank transfer, and all major cards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
