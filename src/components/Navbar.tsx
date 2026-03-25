import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const mainLinks: { to: string; label: string; external?: boolean }[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
];

const portfolioLink = { to: "https://claireha.pixieset.com/", label: "Portfolio", external: true };

const fosterLinks: { to: string; label: string }[] = [
  { to: "/fosters/process", label: "The Process" },
  { to: "/fosters/book", label: "Book a Session" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isFosterActive = fosterLinks.some((l) => location.pathname === l.to);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLink = (link: { to: string; label: string; external?: boolean }, onClick?: () => void, className?: string) =>
    link.external ? (
      <a
        key={link.to}
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className || "text-sm font-medium transition-colors hover:text-primary text-muted-foreground"}
      >
        {link.label}
      </a>
    ) : (
      <Link
        key={link.to}
        to={link.to}
        onClick={onClick}
        className={className || `text-sm font-medium transition-colors hover:text-primary ${
          location.pathname === link.to ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {link.label}
      </Link>
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl font-semibold tracking-tight text-foreground">
          Claire Ha <span className="text-primary">Photography</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {mainLinks.map((link) => renderLink(link))}

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                isFosterActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Foster Photoshoots
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-background border border-border rounded-xl shadow-lg overflow-hidden"
                >
                  {fosterLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-accent ${
                        location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {renderLink(portfolioLink)}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-3">
              {mainLinks.map((link) =>
                renderLink(link, () => setOpen(false), `text-base font-medium py-2 transition-colors hover:text-primary ${
                  !link.external && location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`)
              )}
              {/* Mobile foster dropdown */}
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className={`flex items-center gap-1 text-base font-medium py-2 transition-colors hover:text-primary text-left ${
                  isFosterActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                Foster Photoshoots
                <ChevronDown size={16} className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {mobileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 flex flex-col gap-2 overflow-hidden"
                  >
                    {fosterLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => { setOpen(false); setMobileDropdownOpen(false); }}
                        className={`text-base font-medium py-1.5 transition-colors hover:text-primary ${
                          location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              {renderLink(portfolioLink, () => setOpen(false), "text-base font-medium py-2 transition-colors hover:text-primary text-muted-foreground")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
