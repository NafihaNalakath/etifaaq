import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Plane, 
  MapPin, 
  Compass, 
  FileCheck, 
  Shield, 
  Star,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Plane,
      title: 'Air Ticket Booking',
      description: 'Book domestic and international flights at competitive prices with 24/7 support.'
    },
    {
      icon: Star,
      title: 'Umrah Service',
      description: 'Complete Umrah packages with accommodation, transportation, and guided assistance.'
    },
    {
      icon: MapPin,
      title: 'Tour Packages',
      description: 'Customized tour packages to exotic destinations worldwide with full itinerary planning.'
    },
    {
      icon: FileCheck,
      title: 'Visa Processing',
      description: 'Fast and reliable visa processing services for all major countries and destinations.'
    },
    {
      icon: Shield,
      title: 'Document Attestation',
      description: 'Professional document attestation and authentication services for official purposes.'
    },
    {
      icon: Compass,
      title: 'Travel Assistance',
      description: 'Complete travel support including insurance, currency exchange, and travel guidance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/WhatsApp Image 2025-08-16 at 1.13.46 AM.jpeg" 
                alt="Etifaaq Logo" 
                className="w-10 h-10 object-contain rounded-lg bg-white/10 backdrop-blur-sm p-1"
              />
              <div>
                <h1 className="text-xl font-bold text-emerald-800">Etifaaq</h1>
                <p className="text-xs text-gray-600">Your Journey, Our Priority</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.id
                      ? 'bg-emerald-800 text-white shadow-lg'
                      : 'text-emerald-800 hover:bg-emerald-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-emerald-800 hover:bg-emerald-50 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-white py-4 animate-fade-in">
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-emerald-800 hover:bg-emerald-50 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="/WhatsApp Image 2025-08-16 at 1.13.46 AM.jpeg" 
                  alt="Etifaaq Logo" 
                  className="w-16 h-16 object-contain rounded-xl shadow-lg bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm p-2 border border-white/20"
                />
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-emerald-800">Etifaaq</h1>
                  <p className="text-lg text-yellow-600 font-medium">Your Journey, Our Priority</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                Explore the World with 
                <span className="text-emerald-800"> Professional </span>
                Travel Services
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From air ticket bookings to visa processing, we provide comprehensive travel solutions 
                tailored to your needs. Experience seamless travel planning with our expert team.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Explore Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-emerald-800 text-emerald-800 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 hover:text-white transition-all duration-300"
                >
                  Get Quote
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-800">500+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-800">50+</div>
                  <div className="text-sm text-gray-600">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-800">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-fade-in-right">
              <div className="relative">
                <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-2xl p-8 shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Travel destination"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-emerald-800 p-4 rounded-xl shadow-lg">
                    <Clock className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border-l-4 border-yellow-400">
                  <div className="text-sm font-semibold text-gray-800">Best Price Guarantee</div>
                  <div className="text-xs text-gray-600">Always competitive rates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-emerald-800">Premium</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive travel solutions to make your journey smooth and memorable. 
              From booking to documentation, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-t-4 border-emerald-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-emerald-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button className="text-emerald-800 font-semibold hover:text-yellow-600 transition-colors group-hover:translate-x-2 transform duration-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-2 group-hover:ml-4 transition-all duration-300">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get In <span className="text-emerald-800">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to plan your next adventure? Contact us today for personalized travel solutions 
              and exceptional service.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fade-in-left">
              <div className="bg-gradient-to-br from-emerald-800 to-emerald-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="opacity-90">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="opacity-90">info@travelpro.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Address</div>
                      <div className="opacity-90">123 Travel Street, City, State 12345</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Business Hours</div>
                      <div className="opacity-90">Mon - Sat: 9:00 AM - 6:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                      <button 
                        key={index}
                        className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors">
                    <option>Select a service</option>
                    <option>Air Ticket Booking</option>
                    <option>Umrah Service</option>
                    <option>Tour Packages</option>
                    <option>Visa Processing</option>
                    <option>Document Attestation</option>
                    <option>Travel Assistance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your travel plans..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-800 text-white py-4 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/WhatsApp Image 2025-08-16 at 1.13.46 AM.jpeg" 
                  alt="Etifaaq Logo" 
                  className="w-10 h-10 object-contain rounded-lg bg-white/20 backdrop-blur-sm p-1 border border-white/10"
                />
                <div>
                  <h3 className="text-xl font-bold">Etifaaq</h3>
                  <p className="text-sm text-gray-400">Your Journey, Our Priority</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional travel services with exceptional customer care. 
                Making your travel dreams come true since 2015.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Air Tickets</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Umrah Service</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Tour Packages</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Visa Processing</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Document Attestation</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition-colors">Services</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition-colors">Contact</button></li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-yellow-400 transition-colors cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4" />
                  <span>info@travelpro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4" />
                  <span>123 Travel Street, City</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Etifaaq. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <button 
                  key={index}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;