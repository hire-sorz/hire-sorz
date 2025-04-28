
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Users, Briefcase, Building2, PhoneCall } from "lucide-react";

function App() {
  const { toast } = useToast();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
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
              Industrial Staffing Solutions
            </h1>
            <p className="text-xl mb-8">
              Connecting skilled workers with America's leading industrial employers
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Find Talent
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Temporary Staffing</h3>
              <p className="text-gray-600">
                Flexible workforce solutions for your temporary staffing needs
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Direct Hire</h3>
              <p className="text-gray-600">
                Find permanent employees that match your requirements
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">On-Site Management</h3>
              <p className="text-gray-600">
                Dedicated on-site support for large workforce operations
              </p>
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
              <img  alt="Manufacturing facility" className="w-full h-48 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1612758456015-3d41b5d04c8b" />
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600">Assembly, production, and skilled trades</p>
            </div>

            <div className="card-hover bg-white p-6 rounded-lg shadow">
              <img  alt="Warehouse operations" className="w-full h-48 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1529680713134-5b09b22e87a9" />
              <h3 className="text-xl font-semibold mb-2">Warehouse & Logistics</h3>
              <p className="text-gray-600">Picking, packing, and material handling</p>
            </div>

            <div className="card-hover bg-white p-6 rounded-lg shadow">
              <img  alt="Food processing plant" className="w-full h-48 object-cover rounded mb-4" src="https://images.unsplash.com/photo-1622122328143-8e2269e8d3ff" />
              <h3 className="text-xl font-semibold mb-2">Food Processing</h3>
              <p className="text-gray-600">Production, packaging, and quality control</p>
            </div>
          </div>
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
                <span>1-800-STAFFING</span>
              </div>
              <p>info@industrialstaffing.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Services</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2025 Industrial Staffing Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
