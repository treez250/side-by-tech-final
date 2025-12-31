import { motion } from 'framer-motion';
import { CreditCard, Building2, Smartphone, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PaymentsPage() {
  const paymentMethods = [
    {
      icon: CreditCard,
      title: 'Credit & Debit Cards',
      description: 'We accept all major credit and debit cards including Visa, Mastercard, American Express, and Discover.',
      details: ['Secure payment processing', 'Instant confirmation', 'Recurring billing available'],
    },
    {
      icon: Building2,
      title: 'Bank Transfer (ACH)',
      description: 'Direct bank transfers for larger projects and ongoing service agreements.',
      details: ['Lower transaction fees', 'Ideal for recurring payments', 'Net 30 terms available'],
    },
    {
      icon: Smartphone,
      title: 'Digital Wallets',
      description: 'Quick and convenient payment through popular digital wallet services.',
      details: ['PayPal', 'Apple Pay', 'Google Pay'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Payment Options
            </h1>
            <p className="font-paragraph text-xl text-foreground/70">
              We offer flexible payment methods to make working with us as convenient as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-secondary/20 hover:border-soft-gold transition-colors"
                >
                  <Icon className="h-12 w-12 text-soft-gold mb-6" aria-hidden="true" />
                  <h2 className="font-heading text-2xl font-medium text-foreground mb-4">
                    {method.title}
                  </h2>
                  <p className="font-paragraph text-base text-foreground/70 mb-6">
                    {method.description}
                  </p>
                  <ul className="space-y-2">
                    {method.details.map((detail) => (
                      <li key={detail} className="font-paragraph text-sm text-foreground/60 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-soft-gold rounded-full" aria-hidden="true"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Invoice Information */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 md:col-start-4 text-center">
              <FileText className="h-16 w-16 text-soft-gold mx-auto mb-8" aria-hidden="true" />
              <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
                Invoice & Billing
              </h2>
              <div className="space-y-4 text-left max-w-2xl mx-auto">
                <p className="font-paragraph text-lg text-primary-foreground/80">
                  All invoices are sent electronically via email and include detailed breakdowns of services rendered. Payment terms are clearly outlined on each invoice.
                </p>
                <p className="font-paragraph text-lg text-primary-foreground/80">
                  <strong className="text-primary-foreground">Standard Payment Terms:</strong> Net 30 days from invoice date for established clients. New clients may be required to pay 50% upfront for initial projects.
                </p>
                <p className="font-paragraph text-lg text-primary-foreground/80">
                  <strong className="text-primary-foreground">Late Payment:</strong> A 1.5% monthly interest charge may be applied to overdue balances.
                </p>
                <p className="font-paragraph text-lg text-primary-foreground/80">
                  <strong className="text-primary-foreground">Questions?</strong> Contact our billing department at billing@sidebytech.com for any payment-related inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Notice */}
      <section className="py-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="max-w-4xl mx-auto p-12 border border-secondary/20 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Secure Payment Processing
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-4">
              All payments are processed through industry-leading secure payment gateways with PCI DSS compliance. Your financial information is encrypted and protected at all times.
            </p>
            <p className="font-paragraph text-base text-foreground/60">
              We never store your complete credit card information on our servers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
