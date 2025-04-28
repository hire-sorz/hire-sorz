
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Users, Briefcase, PhoneCall, Calendar, FileText, CheckCircle2 } from "lucide-react";

function App() {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const openCalendly = () => {
    // Replace with your actual Calendly link
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Toaster />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hire Sorz LLC
            </h1>
            <p className="text-xl mb-8">
              Your trusted partner for industrial staffing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" onClick={openCalendly}>
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Contingent Staffing Solutions</h3>
              <p className="text-gray-600">
                Comprehensive workforce solutions with full compliance and payroll handling. We manage all aspects of temporary staffing to keep your operations running smoothly.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Full compliance management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Payroll administration
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Workforce flexibility
                </li>
              </ul>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Direct Hire Solutions</h3>
              <p className="text-gray-600">
                Tailored recruitment services to find the perfect permanent employees for your organization. Our thorough vetting process ensures quality matches.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Thorough candidate screening
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Skills assessment
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                  Cultural fit evaluation
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-hover bg-white p-6 rounded-lg shadow">
              <img  alt="Modern manufacturing facility" className="w-full h-48 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b" />
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600">Skilled workforce solutions for assembly, production, and specialized operations</p>
            </div>

            <div className="card-hover bg-white p-6 rounded-lg shadow">
              <img  alt="Modern warehouse operations" className="w-full h-48 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1565891741441-64926e441838" />
              <h3 className="text-xl font-semibold mb-2">Warehouse & Logistics</h3>
              <p className="text-gray-600">Efficient staffing for distribution, fulfillment, and supply chain operations</p>
            </div>

            <div className="card-hover bg-white p-6 rounded-lg shadow">
              <img  alt="Industrial production line" className="w-full h-48 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1610891015188-5369212db097" />
              <h3 className="text-xl font-semibold mb-2">Industrial Production</h3>
              <p className="text-gray-600">Specialized workforce for industrial manufacturing and processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Meeting Section */}
      <section className="section-padding bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Workforce?</h2>
          <p className="text-xl text-gray-600 mb-8">Schedule a consultation with our staffing experts</p>
          <Button 
            size="lg" 
            className="bg-blue-600 text-white hover:bg-blue-700"
            onClick={openCalendly}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule a Meeting
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Message</label>
                <textarea
                  className="w-full p-3 rounded text-gray-800"
                  rows="4"
                  required
                ></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full bg-white text-blue-900 hover:bg-gray-100">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="flex items-center mb-2">
                <PhoneCall className="w-5 h-5 mr-2" />
                <span>(888) 70 SORZ 4</span>
              </div>
              <p>info@sorz.work</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                <li><a href="#terms" className="hover:text-blue-400">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex items-center">
                <a href="#" className="hover:text-blue-400 flex items-center">
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Hire Sorz LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
