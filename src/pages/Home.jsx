import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Scene from "../components/Scene";

const projects = [
  { id: 1, title: "Lumina Tower", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "Aether Villa", category: "Residential", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" },
  { id: 3, title: "Nexus Hub", category: "Mixed-Use", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" }
];

const Home = () => {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Scene />

        <div className="container mx-auto px-6 relative z-10 text-center pointer-events-none mt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            SHAPING <br /> <span className="text-gradient">TOMORROW</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            We merge minimalist luxury with futuristic design to create architectural masterpieces that stand the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-auto"
          >
            <Link to="/projects" className="inline-flex items-center px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-white transition-colors">
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Beyond Boundaries</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                ArchX is not just an architecture firm; it is a laboratory for the future. We challenge conventional thinking, integrating cutting-edge materials and generative design to craft spaces that elevate the human experience.
              </p>
              <Link to="/about" className="text-primary hover:text-white transition-colors flex items-center font-medium">
                Read our story <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
                  alt="Futuristic Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-lg w-64">
                <p className="text-3xl font-bold text-primary mb-2">25+</p>
                <p className="text-sm text-gray-300">Awards in innovative architecture design.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Works</h2>
              <p className="text-gray-400">A glimpse into our visionary portfolio.</p>
            </div>
            <Link to="/projects" className="hidden md:flex items-center text-primary hover:text-white transition-colors">
              View All <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg mb-4 aspect-[4/5] relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm">{project.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </PageTransition>
  );
};

export default Home;
