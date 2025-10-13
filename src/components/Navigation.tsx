import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Focus areas", href: "#focus" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">{/* Transparent background to overlay on hero */}
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo - exact match to original */}
          <button
            onClick={() => scrollToSection("#home")}
            className="flex items-center gap-1 group relative"
          >
            {/* Mountain peak accent */}
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -left-6 top-1"
            >
              <path 
                d="M12 3L6 12h12L12 3z" 
                fill="#FF6B6B" 
                stroke="#FF6B6B" 
                strokeWidth="1"
              />
            </svg>
            
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-0.5">
                <span className="text-xl font-bold text-navy-dark">how</span>
                <span className="text-xl font-bold text-accent">to</span>
              </div>
              <span className="text-sm font-medium text-navy-dark -mt-0.5">venture</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors ${
                  index === 0 
                    ? 'text-accent' 
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 font-medium transition-colors ${
                  index === 0 
                    ? 'text-accent' 
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
