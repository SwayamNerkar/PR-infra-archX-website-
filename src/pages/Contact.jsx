import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call for EmailJS/SMTP
    setTimeout(() => {
      setStatus("success");
      formRef.current.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);

    /* 
      To make this actually send emails using EmailJS:
      1. npm install @emailjs/browser
      2. Import: import emailjs from '@emailjs/browser';
      3. Initialize: emailjs.init("YOUR_PUBLIC_KEY");
      4. Call inside this function:
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current)
        .then((result) => setStatus('success'), (error) => setStatus('error'));
    */
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Let's Talk
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Have a visionary project in mind? Reach out to us and let's shape the future together.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:w-1/3 space-y-8"
            >
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-white">Headquarters</h4>
                      <p className="text-gray-400 mt-1">101 Neo Architecture Blvd,<br/>Tech District, Cyber City 2099</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-white">Phone</h4>
                      <p className="text-gray-400 mt-1">+1 (555) 019-2099</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-primary mt-1 mr-4" />
                    <div>
                      <h4 className="font-medium text-white">Email</h4>
                      <p className="text-gray-400 mt-1">hello@archx.future</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Map Placeholder */}
              <div className="glass-card p-2 rounded-2xl h-64 relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617348981441!2d-73.98782358459424!3d40.74844497932688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1684351334812!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, borderRadius: '0.75rem', filter: 'grayscale(100%) invert(90%) contrast(1.2)' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location Map"
                ></iframe>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:w-2/3"
            >
              <div className="glass-card p-10 rounded-2xl h-full">
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="user_name" className="text-sm font-medium text-gray-300">Full Name</label>
                      <input 
                        type="text" 
                        name="user_name" 
                        id="user_name" 
                        required 
                        className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="user_email" className="text-sm font-medium text-gray-300">Email Address</label>
                      <input 
                        type="email" 
                        name="user_email" 
                        id="user_email" 
                        required 
                        className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                    <input 
                      type="text" 
                      name="subject" 
                      id="subject" 
                      required 
                      className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <textarea 
                      name="message" 
                      id="message" 
                      required 
                      rows="6"
                      className="w-full bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-primary text-black font-semibold rounded-lg hover:bg-white transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : status === "success" ? (
                      <>Sent Successfully <CheckCircle className="ml-2 w-5 h-5" /></>
                    ) : (
                      <>Send Message <Send className="ml-2 w-5 h-5" /></>
                    )}
                  </button>
                  
                  {status === "success" && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-center text-sm mt-4"
                    >
                      Thank you! Your message has been received. We will get back to you shortly.
                    </motion.p>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
