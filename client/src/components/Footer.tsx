import { Link } from "wouter";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Logo className="mb-4" />
            <p className="text-sm text-secondary-foreground/80 mb-4">
              Providing competitive business energy solutions for UK businesses. Get the best rates on electricity, gas, and water.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-secondary-foreground/10 hover-elevate transition-colors" aria-label="Facebook" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-secondary-foreground/10 hover-elevate transition-colors" aria-label="Twitter" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-md bg-secondary-foreground/10 hover-elevate transition-colors" aria-label="LinkedIn" data-testid="link-linkedin">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/electricity" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-electricity">
                  Business Electricity
                </Link>
              </li>
              <li>
                <Link href="/gas" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-gas">
                  Business Gas
                </Link>
              </li>
              <li>
                <Link href="/water" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-water">
                  Business Water
                </Link>
              </li>
              <li>
                <Link href="/green-energy" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-green">
                  Green Energy
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-support">
                  Support & FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground hover-elevate px-2 py-1 -ml-2 rounded-md inline-block transition-colors" data-testid="link-footer-quote">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="tel:03333233940" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-phone">
                  0333 323 3940
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:info@nationwideenergies.co.uk" className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors" data-testid="link-footer-email">
                  info@nationwideenergies.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm text-secondary-foreground/80" data-testid="text-address">
                  169a St. Pauls Road<br />
                  Preston, Lancashire<br />
                  England, PR1 1PX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60" data-testid="text-copyright">
              © {new Date().getFullYear()} Nationwide Energies. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-secondary-foreground/60 hover:text-secondary-foreground transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
