import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Electricity", path: "/electricity" },
  { label: "Gas", path: "/gas" },
  { label: "Water", path: "/water" },
  { label: "Green Energy", path: "/green-energy" },
  { label: "About", path: "/about" },
  { label: "Support", path: "/support" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex-shrink-0" data-testid="link-home">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`text-sm font-medium transition-colors hover-elevate px-3 py-2 rounded-md ${
                  location === item.path
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:03333233940" className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors" data-testid="link-phone">
              <Phone className="w-4 h-4" />
              <span>0333 323 3940</span>
            </a>
            <Link href="/quote">
              <Button 
                variant="default" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
                data-testid="button-get-quote"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Get a Quote
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover-elevate rounded-md"
            aria-label="Toggle menu"
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm font-medium rounded-md hover-elevate transition-colors ${
                  location === item.path
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 px-4 pt-4 border-t border-border mt-4">
              <a href="tel:03333233940" className="flex items-center gap-2 text-sm font-medium text-foreground/80" data-testid="link-mobile-phone">
                <Phone className="w-4 h-4" />
                <span>0333 323 3940</span>
              </a>
              <Link href="/quote">
                <Button 
                  variant="default" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-0 relative overflow-hidden group"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="button-mobile-get-quote"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Get a Quote
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
