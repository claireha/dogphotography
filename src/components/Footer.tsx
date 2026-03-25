import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-muted/50 py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-semibold text-foreground">Claire Ha Photography</p>
          <p className="text-sm text-muted-foreground mt-1">New Jersey · Volunteer Pet Photographer</p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/fosters/process" className="hover:text-primary transition-colors">Process</Link>
          <a href="https://claireha.pixieset.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Portfolio</a>
          <Link to="/fosters/book" className="hover:text-primary transition-colors">Book</Link>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted-foreground">
        <p>🐾 Made with love for shelter dogs everywhere</p>
      </div>
    </div>
  </footer>
);

export default Footer;
