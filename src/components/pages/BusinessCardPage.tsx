import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Download, QrCode } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function BusinessCardPage() {
  const [showQR, setShowQR] = useState(false);
  const { toast } = useToast();

  const contactInfo = {
    name: 'Michael Thompson',
    title: 'Principal Consultant',
    company: 'Side by Tech',
    email: 'michael.thompson@sidebytech.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'https://linkedin.com/in/michaelthompson',
  };

  const handleSaveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
EMAIL:${contactInfo.email}
TEL:${contactInfo.phone}
URL:${contactInfo.linkedin}
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${contactInfo.name.replace(' ', '_')}.vcf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: 'Contact Saved',
      description: 'The contact card has been downloaded to your device.',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Digital Business Card
            </h1>
            <p className="font-paragraph text-xl text-foreground/70">
              Connect with us and save our contact information for easy access.
            </p>
          </div>

          {/* Business Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-primary text-primary-foreground p-12 border-2 border-soft-gold">
              <div className="mb-8">
                <h2 className="font-heading text-4xl font-bold mb-2">
                  {contactInfo.name}
                </h2>
                <p className="font-paragraph text-xl text-primary-foreground/80 mb-1">
                  {contactInfo.title}
                </p>
                <p className="font-heading text-2xl text-soft-gold">
                  {contactInfo.company}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-soft-gold" aria-hidden="true" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="font-paragraph text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-soft-gold" aria-hidden="true" />
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="font-paragraph text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-soft-gold" aria-hidden="true" />
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-paragraph text-base text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleSaveContact}
                  className="flex-1 bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-paragraph text-base px-6 py-3 rounded"
                >
                  <Download className="h-5 w-5 mr-2" aria-hidden="true" />
                  Save Contact
                </Button>
                <Button
                  onClick={() => setShowQR(!showQR)}
                  variant="outline"
                  className="flex-1 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-paragraph text-base px-6 py-3 rounded"
                >
                  <QrCode className="h-5 w-5 mr-2" aria-hidden="true" />
                  {showQR ? 'Hide' : 'Show'} QR Code
                </Button>
              </div>
            </div>
          </motion.div>

          {/* QR Code Section */}
          {showQR && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto mt-8"
            >
              <div className="bg-background p-12 border border-secondary/20 text-center">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Scan to Save Contact
                </h3>
                <div className="inline-block p-8 bg-white">
                  <svg
                    width="200"
                    height="200"
                    viewBox="0 0 200 200"
                    className="mx-auto"
                    aria-label="QR code for contact information"
                  >
                    <rect width="200" height="200" fill="white" />
                    <g fill="black">
                      {/* Simplified QR code pattern - in production, use a proper QR code library */}
                      <rect x="20" y="20" width="60" height="60" />
                      <rect x="120" y="20" width="60" height="60" />
                      <rect x="20" y="120" width="60" height="60" />
                      <rect x="30" y="30" width="40" height="40" fill="white" />
                      <rect x="130" y="30" width="40" height="40" fill="white" />
                      <rect x="30" y="130" width="40" height="40" fill="white" />
                      <rect x="40" y="40" width="20" height="20" fill="black" />
                      <rect x="140" y="40" width="20" height="20" fill="black" />
                      <rect x="40" y="140" width="20" height="20" fill="black" />
                      {/* Additional pattern blocks */}
                      <rect x="90" y="30" width="10" height="10" />
                      <rect x="90" y="50" width="10" height="10" />
                      <rect x="90" y="70" width="10" height="10" />
                      <rect x="110" y="90" width="10" height="10" />
                      <rect x="130" y="110" width="10" height="10" />
                      <rect x="150" y="130" width="10" height="10" />
                      <rect x="90" y="150" width="10" height="10" />
                    </g>
                  </svg>
                </div>
                <p className="font-paragraph text-sm text-foreground/60 mt-6">
                  Use your phone's camera to scan this QR code and save the contact information.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-6">
              Let's Connect
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/80 mb-8">
              Whether you have a question about our services, need technical support, or want to discuss a potential project, we're here to help. Reach out through any of the channels above, and we'll get back to you promptly.
            </p>
            <p className="font-paragraph text-base text-primary-foreground/70">
              Available Monday - Friday, 9:00 AM - 6:00 PM EST
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
