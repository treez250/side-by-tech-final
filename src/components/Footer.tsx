import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-[120rem] px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Company Info */}
          <div className="md:col-span-4">
            <h3 className="font-heading text-2xl font-semibold mb-6">Side by Tech</h3>
            <p className="font-paragraph text-base text-primary-foreground/80 mb-6">
              Elevating IT Solutions with precision and expertise. Your trusted partner for cloud administration, Salesforce consulting, and systems optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="font-heading text-xl font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/payments" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="font-heading text-xl font-medium mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-soft-gold" aria-hidden="true" />
                <a href="mailto:info@sidebytech.com" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@sidebytech.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-soft-gold" aria-hidden="true" />
                <a href="tel:+15551234567" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-soft-gold" aria-hidden="true" />
                <a href="https://linkedin.com/company/sidebytech" target="_blank" rel="noopener noreferrer" className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="font-paragraph text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Side by Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
