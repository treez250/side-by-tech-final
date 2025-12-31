import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: 'Message Sent',
      description: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
    });

    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="font-paragraph text-xl text-foreground/70">
              Have a question or ready to start a project? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-paragraph text-base text-foreground mb-2 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full font-paragraph text-base"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-paragraph text-base text-foreground mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full font-paragraph text-base"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company" className="font-paragraph text-base text-foreground mb-2 block">
                      Company
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full font-paragraph text-base"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-paragraph text-base text-foreground mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full font-paragraph text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="font-paragraph text-base text-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full font-paragraph text-base resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph text-base px-8 py-3 rounded"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="bg-primary text-primary-foreground p-8">
                <h2 className="font-heading text-3xl font-semibold mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-2">Email</h3>
                    <a
                      href="mailto:info@sidebytech.com"
                      className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      info@sidebytech.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-2">Phone</h3>
                    <a
                      href="tel:+15551234567"
                      className="font-paragraph text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-2">Business Hours</h3>
                    <p className="font-paragraph text-base text-primary-foreground/80">
                      Monday - Friday<br />
                      9:00 AM - 6:00 PM EST
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-medium mb-2">Response Time</h3>
                    <p className="font-paragraph text-base text-primary-foreground/80">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 border border-secondary/20">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                  Prefer to Schedule a Call?
                </h3>
                <p className="font-paragraph text-base text-foreground/70 mb-6">
                  Book a free 30-minute consultation to discuss your IT needs and how we can help.
                </p>
                <a
                  href="mailto:info@sidebytech.com?subject=Schedule a Consultation"
                  className="inline-block border border-primary text-primary font-paragraph text-base px-6 py-3 rounded transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Schedule Consultation
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
