import { useEffect, useRef, useState } from 'react';
import { Clock, Award, Hammer, Sparkles } from 'lucide-react';

const reasons = [
  {
    id: 1,
    number: '01',
    title: 'Experience',
    description: 'Over 5 years serving London homes and hotels. Trained in electrical engineering, we\'ve handled everything from smart home installs to hotel-grade maintenance.',
    icon: Award,
  },
  {
    id: 2,
    number: '02',
    title: 'Reliability',
    description: 'On time, every time. We respect your schedule and always arrive within the agreed time window.',
    icon: Clock,
  },
  {
    id: 3,
    number: '03',
    title: 'Quality Tools',
    description: 'Professional-grade tools and equipment for every job. Powerful drills, precision levels, and everything needed.',
    icon: Hammer,
  },
  {
    id: 4,
    number: '04',
    title: 'Clean Service',
    description: 'We leave your home cleaner than we found it. Shoe covers, dust sheets, and thorough cleanup after every job.',
    icon: Sparkles,
  },
];

const WhyChooseUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reasons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="why-us" ref={sectionRef} className="py-24 bg-dark-600 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-600 via-dark-600/95 to-dark-600/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span 
              className={`inline-block text-orange font-medium text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Why Choose Us
            </span>
            <h2 
              className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              TOP REASONS<br />
              <span className="text-orange">TO CHOOSE US</span>
            </h2>
            <p 
              className={`text-gray-400 text-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              We bring professionalism and care to every job, big or small. 
              Our commitment to quality and customer satisfaction sets us apart 
              from the rest.
            </p>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-8">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    index === activeIndex ? 'w-12 bg-orange' : 'w-6 bg-dark-300 hover:bg-dark-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Reasons List */}
          <div className="space-y-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const isActive = index === activeIndex;
              
              return (
                <div
                  key={reason.id}
                  className={`relative p-6 rounded-xl border transition-all duration-500 ${
                    isActive 
                      ? 'bg-dark-400 border-orange/50 shadow-lg shadow-orange/10' 
                      : 'bg-dark-500/50 border-dark-300 hover:border-dark-200'
                  } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Number */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      isActive ? 'bg-orange' : 'bg-dark-300'
                    }`}>
                      <span className={`font-display text-2xl font-bold transition-colors ${
                        isActive ? 'text-black' : 'text-gray-400'
                      }`}>
                        {reason.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-orange' : 'text-gray-500'}`} />
                        <h3 className={`font-display text-2xl font-semibold transition-colors ${
                          isActive ? 'text-white' : 'text-gray-300'
                        }`}>
                          {reason.title}
                        </h3>
                      </div>
                      <p className={`text-sm leading-relaxed transition-colors ${
                        isActive ? 'text-gray-300' : 'text-gray-500'
                      }`}>
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-orange rounded-r-full" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
