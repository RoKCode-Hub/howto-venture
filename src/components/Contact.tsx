import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Ready to achieve your wildest dreams?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Let's discuss how we can help you optimize your startup operating system and become a
            more impactful leader.
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            asChild
          >
            <a href="mailto:contact@howtoventure.com" className="inline-flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
