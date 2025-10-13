import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-32 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Header */}
          <div className="text-white mb-16">
            <h2 className="text-[43px] font-quicksand font-bold mb-6">Contact</h2>
            
            <p className="text-lg mb-2 font-quicksand">
              Should we get to know each other?
            </p>
            <p className="text-lg font-quicksand font-semibold text-accent">
              Contact us for a first chat.
            </p>
          </div>

          {/* Contact Details - Grid Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="flex flex-col items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <span className="text-base font-quicksand">Berlin, Germany</span>
            </div>

            <div className="flex flex-col items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <a 
                href="mailto:contact@howto-venture.com" 
                className="text-base font-quicksand hover:text-accent transition-colors underline"
              >
                contact@howto-venture.com
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 text-white">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-2">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <a 
                href="tel:+493021958991" 
                className="text-base font-quicksand hover:text-accent transition-colors"
              >
                +49 30 21958991
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex justify-center gap-8 text-white/70">
            <Link 
              to="/imprint" 
              className="text-sm font-quicksand hover:text-accent transition-colors underline"
            >
              Imprint
            </Link>
            <Link 
              to="/privacy-policy" 
              className="text-sm font-quicksand hover:text-accent transition-colors underline"
            >
              Data privacy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
