import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {

  return (
    <section id="contact" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-white">
            <h2 className="text-[43px] font-quicksand font-bold mb-6">Contact</h2>
            
            <p className="text-base mb-2 font-quicksand">
              Should we get to know each other?
            </p>
            <p className="text-base mb-12 font-quicksand font-semibold">
              Contact us for a first chat.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <span className="text-base font-quicksand">Berlin, Germany</span>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                <a 
                  href="mailto:contact@howto-venture.com" 
                  className="text-base font-quicksand hover:text-accent transition-colors underline"
                >
                  contact@howto-venture.com
                </a>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                <a 
                  href="tel:+493021958991" 
                  className="text-base font-quicksand hover:text-accent transition-colors"
                >
                  +49 30 21958991
                </a>
              </div>
            </div>

            <div className="mt-16 space-y-3">
              <Link 
                to="/imprint" 
                className="block text-base font-quicksand hover:text-accent transition-colors underline"
              >
                Imprint
              </Link>
              <Link 
                to="/privacy-policy" 
                className="block text-base font-quicksand hover:text-accent transition-colors underline"
              >
                Data privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
