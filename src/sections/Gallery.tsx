import { useEffect, useRef, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery-1.jpg',
    title: 'TV Wall Mounting',
    category: 'Installation',
    size: 'tall',
  },
  {
    id: 2,
    src: '/images/gallery-2.jpg',
    title: 'Mirror Hanging',
    category: 'Hanging',
    size: 'wide',
  },
  {
    id: 3,
    src: '/images/gallery-3.jpg',
    title: 'Furniture Assembly',
    category: 'Assembly',
    size: 'normal',
  },
  {
    id: 4,
    src: '/images/gallery-4.jpg',
    title: 'Shelf Installation',
    category: 'Installation',
    size: 'normal',
  },
  {
    id: 5,
    src: '/images/gallery-5.jpg',
    title: 'Cabinet Repairs',
    category: 'Repairs',
    size: 'wide',
  },
  {
    id: 6,
    src: '/images/gallery-6.jpg',
    title: 'Light Fixture Installation',
    category: 'Installation',
    size: 'tall',
  },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-dark-600 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span 
            className={`inline-block text-orange font-medium text-sm tracking-wider uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Portfolio
          </span>
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            OUR <span className="text-orange">WORK</span>
          </h2>
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Take a look at some of our recent projects. Quality workmanship you can trust.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryImages.map((image, index) => {
            const isHovered = hoveredId === image.id;
            
            // Determine grid span based on size
            let gridClass = '';
            if (image.size === 'tall') {
              gridClass = 'row-span-2';
            } else if (image.size === 'wide') {
              gridClass = 'col-span-2';
            }

            return (
              <div
                key={image.id}
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${gridClass} transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
                onMouseEnter={() => setHoveredId(image.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    isHovered ? 'scale-110' : 'scale-100'
                  }`}
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-500/90 via-dark-500/40 to-transparent transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Content */}
                <div className={`absolute inset-0 flex flex-col justify-end p-4 transition-all duration-500 ${
                  isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-orange text-xs font-medium uppercase tracking-wider mb-1">
                    {image.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {image.title}
                  </h3>
                </div>

                {/* Zoom Icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 bg-orange rounded-lg flex items-center justify-center transition-all duration-500 ${
                  isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}>
                  <ZoomIn className="w-5 h-5 text-black" />
                </div>

                {/* RGB Split Effect on Hover */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-20">
                    <div 
                      className="absolute inset-0 bg-red-500"
                      style={{ transform: 'translateX(-3px)' }}
                    />
                    <div 
                      className="absolute inset-0 bg-blue-500"
                      style={{ transform: 'translateX(3px)' }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-dark-500/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-dark-400 rounded-full flex items-center justify-center hover:bg-orange transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="mt-4 text-center">
              <span className="text-orange text-sm font-medium uppercase tracking-wider">
                {selectedImage.category}
              </span>
              <h3 className="font-display text-2xl font-semibold text-white mt-1">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
