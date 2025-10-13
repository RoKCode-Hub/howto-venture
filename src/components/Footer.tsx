const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} HowTo Venture. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold">
              how<span className="text-accent">to</span>
            </div>
            <div className="text-sm font-medium -ml-1">venture</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
