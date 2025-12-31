import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { ITServices } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ITServices | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchService() {
      const { items } = await BaseCrudService.getAll<ITServices>('itservices');
      const foundService = items.find(s => s.urlSlug === slug);
      setService(foundService || null);
      setLoading(false);
    }
    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16 py-24">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-6">
              Service Not Found
            </h1>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-paragraph text-base hover:text-primary/80"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const benefits = service.keyBenefits?.split('\n').filter(b => b.trim()) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-paragraph text-base hover:text-primary/80 mb-8"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                {service.serviceName}
              </h1>
              <p className="font-paragraph text-xl text-foreground/70">
                {service.shortDescription}
              </p>
            </div>
            {service.serviceImage && (
              <div className="md:col-span-5">
                <Image
                  src={service.serviceImage}
                  alt={service.serviceName || 'Service image'}
                  className="w-full h-auto"
                  width={700}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="max-w-4xl">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Overview
            </h2>
            <div className="font-paragraph text-lg text-foreground/70 whitespace-pre-line">
              {service.detailedDescription}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      {benefits.length > 0 && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-12">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-6 bg-primary-foreground/10 border border-primary-foreground/20"
                >
                  <CheckCircle className="h-6 w-6 text-soft-gold flex-shrink-0 mt-1" aria-hidden="true" />
                  <p className="font-paragraph text-base text-primary-foreground/90">
                    {benefit}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto p-12 border border-secondary/20">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {service.callToActionText || 'Ready to Get Started?'}
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 mb-8">
              Contact us today to learn how this service can benefit your organization.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-paragraph text-base px-6 py-3 rounded transition-all hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
