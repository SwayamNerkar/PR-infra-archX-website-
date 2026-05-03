import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-3xl font-bold tracking-tighter mb-4 inline-block">
              ARCH<span className="text-primary">X</span>
            </Link>
            <p className="text-gray-400 max-w-md mt-4">
              Pioneering the future of architecture. We blend minimalist luxury with cutting-edge futuristic design to create spaces that inspire.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/projects" className="hover:text-primary transition-colors flex items-center">Projects <ArrowUpRight className="w-3 h-3 ml-1" /></Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors flex items-center">Services <ArrowUpRight className="w-3 h-3 ml-1" /></Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors flex items-center">About Us <ArrowUpRight className="w-3 h-3 ml-1" /></Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors flex items-center">Contact <ArrowUpRight className="w-3 h-3 ml-1" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary transition-all">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:border-primary transition-all">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} ArchX. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
