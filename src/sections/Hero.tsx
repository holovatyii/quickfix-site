import { useEffect, useRef, useState } from 'react';
import { Phone, ArrowRight, Star, CheckCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) scale(1.1)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt="Professional handyman at work"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-500/95 via-dark-500/80 to-dark-500/60 z-10" />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-orange/10 border border-orange/30 rounded-full px-4 py-2 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Star className="w-4 h-4 text-orange fill-orange" />
              <span className="text-sm text-orange font-medium">Trusted in Eltham & South East London</span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 
                className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none transition-all duration-1000 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                ELTHAM'S
              </h1>
              <h1 
                className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-none transition-all duration-1000 delay-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                <span className="text-orange">TRUSTED</span>
              </h1>
              <h1 
                className={`font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none transition-all duration-1000 delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                HANDYMAN
              </h1>
            </div>

            {/* Subheading */}
            <p 
              className={`text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed transition-all duration-1000 delay-500 ${
                isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              Professional home repairs & maintenance services in Eltham and South East London. 
              From TV mounting to furniture assembly, we handle it all with precision and care.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <a
                href="tel:07861479598"
                className="group inline-flex items-center justify-center gap-3 bg-orange text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange/40 animate-pulse-slow"
              >
                <Phone className="w-5 h-5" />
                Call Now: 07861 479598
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Get a Free Quote
              </a>
            </div>

            {/* Trust Indicators */}
            <div 
              className={`flex flex-wrap items-center gap-6 pt-4 transition-all duration-1000 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {[
                'Same Day Service',
                'No Hidden Fees',
                'Free Quotes',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-orange" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div 
            className={`hidden lg:block transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-dark-400/80 backdrop-blur-md rounded-2xl p-8 border border-dark-300">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="font-display text-5xl font-bold text-orange">5+</div>
                  <div className="text-gray-400 text-sm mt-1">Years Experience</div>
                </div>
                <div className="text-center p-4 border-l border-dark-300">
                  <div className="font-display text-5xl font-bold text-orange">50+</div>
                  <div className="text-gray-400 text-sm mt-1">Jobs Completed</div>
                </div>
                <div className="text-center p-4 border-t border-dark-300">
                  <div className="font-display text-5xl font-bold text-orange">SE9</div>
                  <div className="text-gray-400 text-sm mt-1">Based in Eltham</div>
                </div>
                <div className="text-center p-4 border-t border-l border-dark-300">
                  <div className="font-display text-5xl font-bold text-orange">7</div>
                  <div className="text-gray-400 text-sm mt-1">Days a Week</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-500 to-transparent z-20" />
    </section>
  );
};

export default Hero;
