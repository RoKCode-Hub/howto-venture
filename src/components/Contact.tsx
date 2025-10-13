import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string().trim().min(1, { message: "Subject is required" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      setErrors({});
      
      // Here you would normally send the form data to your backend
      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as keyof ContactForm] = issue.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
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

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/60 font-quicksand text-base focus:outline-none focus:border-accent transition-colors"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-accent font-quicksand">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/60 font-quicksand text-base focus:outline-none focus:border-accent transition-colors"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-accent font-quicksand">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/60 font-quicksand text-base focus:outline-none focus:border-accent transition-colors"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-accent font-quicksand">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-lg text-white placeholder:text-white/60 font-quicksand text-base focus:outline-none focus:border-accent transition-colors resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-accent font-quicksand">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-12 py-3 text-base rounded-full transition-all font-quicksand"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
