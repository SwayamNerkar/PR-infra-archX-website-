import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const timeline = [
  { year: "2015", title: "The Inception", desc: "ArchX was founded with a vision to redefine urban landscapes." },
  { year: "2018", title: "Global Expansion", desc: "Opened our second office in Dubai, focusing on futuristic commercial spaces." },
  { year: "2021", title: "Sustainability Award", desc: "Recognized globally for integrating eco-friendly materials into luxury design." },
  { year: "2024", title: "The Virtual Frontier", desc: "Pioneered VR-integrated architectural planning for clients worldwide." }
];

const team = [
  { name: "Elena Rostova", role: "Principal Architect", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Marcus Chen", role: "Head of 3D Visualization", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Sarah Jenkins", role: "Lead Interior Designer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" }
];

const About = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          
          {/* Story Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8">Architecting the <span className="text-primary">Future</span></h1>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  At ArchX, we believe that buildings are more than just structures; they are living entities that interact with their inhabitants and environment. Our approach is rooted in minimalist luxury, stripping away the unnecessary to reveal the profound.
                </p>
                <p>
                  By leveraging state-of-the-art computational design, parametric modeling, and sustainable materials, we craft environments that are as intelligent as they are beautiful. 
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
                alt="Studio" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mb-32">
            <h2 className="text-4xl font-bold mb-16 text-center">Our Evolution</h2>
            <div className="relative border-l border-white/20 ml-4 md:ml-1/2 md:translate-x-1/2 space-y-12">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8 md:pl-0 md:w-1/2 md:-ml-[50%]"
                >
                  <div className="absolute left-[-5px] md:left-[calc(100%-4px)] top-2 w-3 h-3 bg-primary rounded-full" />
                  <div className="md:pr-12 md:text-right">
                    <span className="text-primary font-bold text-xl mb-2 block">{item.year}</span>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h2 className="text-4xl font-bold mb-16 text-center">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group text-center"
                >
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default About;
