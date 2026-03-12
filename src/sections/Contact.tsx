import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: '07861 479598',
    href: 'tel:07861479598',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'parsifalart@gmail.com',
    href: 'mailto:parsifalart@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Eltham, London',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon-Sun: 8AM - 8PM',
    href: '#',
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', phone: '', email: '', postcode: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-dark-500 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px',
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
            Contact Us
          </span>
          <h2 
            className={`font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            GET IN <span className="text-orange">TOUCH</span>
          </h2>
          <p 
            className={`text-gray-400 text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Ready to get started? Fill out the form below or give us a call. 
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-dark-400 rounded-2xl p-8 border border-dark-300">
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-12 h-12 bg-orange/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange transition-colors">
                        <Icon className="w-5 h-5 text-orange group-hover:text-black transition-colors" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm mb-1">{info.title}</p>
                        <p className="text-white font-medium group-hover:text-orange transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-orange/10 border border-orange/30 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange" />
                <div>
                  <p className="text-white font-semibold">Quick Response</p>
                  <p className="text-gray-400 text-sm">We usually reply within 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-dark-400 rounded-2xl p-8 border border-dark-300">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-orange" />
                  </div>
                  <h3 className="font-display text-3xl font-semibold text-white mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Your Name</Label>
                      <div className="relative">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`bg-dark-500 border-dark-300 text-white placeholder:text-gray-500 h-12 transition-all duration-300 ${
                            focusedField === 'name' ? 'border-orange shadow-lg shadow-orange/10' : ''
                          }`}
                          placeholder="John Smith"
                        />
                        <div className={`absolute bottom-0 left-1/2 h-0.5 bg-orange transition-all duration-300 ${
                          focusedField === 'name' ? 'w-full -translate-x-1/2' : 'w-0'
                        }`} />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`bg-dark-500 border-dark-300 text-white placeholder:text-gray-500 h-12 transition-all duration-300 ${
                            focusedField === 'phone' ? 'border-orange shadow-lg shadow-orange/10' : ''
                          }`}
                          placeholder="07XXX XXXXXX"
                        />
                        <div className={`absolute bottom-0 left-1/2 h-0.5 bg-orange transition-all duration-300 ${
                          focusedField === 'phone' ? 'w-full -translate-x-1/2' : 'w-0'
                        }`} />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                      <div className="relative">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`bg-dark-500 border-dark-300 text-white placeholder:text-gray-500 h-12 transition-all duration-300 ${
                            focusedField === 'email' ? 'border-orange shadow-lg shadow-orange/10' : ''
                          }`}
                          placeholder="john@example.com"
                        />
                        <div className={`absolute bottom-0 left-1/2 h-0.5 bg-orange transition-all duration-300 ${
                          focusedField === 'email' ? 'w-full -translate-x-1/2' : 'w-0'
                        }`} />
                      </div>
                    </div>

                    {/* Postcode */}
                    <div className="space-y-2">
                      <Label htmlFor="postcode" className="text-gray-300">Postcode</Label>
                      <div className="relative">
                        <Input
                          id="postcode"
                          name="postcode"
                          value={formData.postcode}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('postcode')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`bg-dark-500 border-dark-300 text-white placeholder:text-gray-500 h-12 transition-all duration-300 ${
                            focusedField === 'postcode' ? 'border-orange shadow-lg shadow-orange/10' : ''
                          }`}
                          placeholder="SE9 1XX"
                        />
                        <div className={`absolute bottom-0 left-1/2 h-0.5 bg-orange transition-all duration-300 ${
                          focusedField === 'postcode' ? 'w-full -translate-x-1/2' : 'w-0'
                        }`} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Your Message</Label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`bg-dark-500 border-dark-300 text-white placeholder:text-gray-500 resize-none transition-all duration-300 ${
                          focusedField === 'message' ? 'border-orange shadow-lg shadow-orange/10' : ''
                        }`}
                        placeholder="Tell us about your job..."
                      />
                      <div className={`absolute bottom-0 left-1/2 h-0.5 bg-orange transition-all duration-300 ${
                        focusedField === 'message' ? 'w-full -translate-x-1/2' : 'w-0'
                      }`} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange text-black hover:bg-orange-600 h-14 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange/30 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
