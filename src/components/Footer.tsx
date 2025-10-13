import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <Link 
            to="/privacy-policy" 
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            Data Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
