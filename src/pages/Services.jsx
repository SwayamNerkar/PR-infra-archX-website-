import { motion } from "framer-motion";
import { PenTool, Box, Monitor, Compass } from "lucide-react";
import PageTransition from "../components/PageTransition";

const services = [
  {
    icon: <PenTool className="w-8 h-8 text-primary" />,
    title: "Architecture Design",
    description: "From concept to completion, we design innovative structures that harmonize with their environment while pushing the boundaries of form and function."
  },
  {
    icon: <Box className="w-8 h-8 text-primary" />,
    title: "Interior Design",
    description: "Creating fluid, luxurious interior spaces that elevate everyday living through bespoke materials, lighting, and spatial planning."
  },
  {
    icon: <Monitor className="w-8 h-8 text-primary" />,
    title: "3D Visualization",
    description: "State-of-the-art virtual reality and hyper-realistic rendering services to help you experience your project before a single brick is laid."
  },
  {
    icon: <Compass className="w-8 h-8 text-primary" />,
    title: "Planning & Consultation",
    description: "Strategic master planning and feasibility studies to ensure your vision is viable, sustainable, and optimized for success."
  }
];

const Services = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Our Expertise
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Comprehensive architectural solutions tailored for the modern era.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-10 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="mb-6 bg-surface p-4 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 rounded-3xl overflow-hidden relative h-[400px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-40" />
            <div className="relative z-10 text-center px-6">
              <h2 className="text-4xl font-bold mb-6">Ready to start your project?</h2>
              <a href="/contact" className="inline-block px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-white transition-colors">
                Book a Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Services;
