import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { BaseCrudService } from '@/integrations';
import { ITServices } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function ServicesPage() {
  const [services, setServices] = useState<ITServices[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      const { items } = await BaseCrudService.getAll<ITServices>('itservices');
      setServices(items);
      setLoading(false);
    }
    fetchServices();
  }, []);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="font-paragraph text-xl text-foreground/70">
              Comprehensive IT solutions tailored to your business needs. From cloud infrastructure to systems optimization, we deliver excellence at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.article
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                {/* Alternate layout: image on left for even, right for odd */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:col-span-5">
                      {service.serviceImage && (
                        <Image
                          src={service.serviceImage}
                          alt={service.serviceName || 'Service image'}
                          className="w-full h-auto"
                          width={600}
                        />
                      )}
                    </div>
                    <div className="md:col-span-7 p-8">
                      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        {service.serviceName}
                      </h2>
                      <p className="font-paragraph text-lg text-foreground/70 mb-6">
                        {service.shortDescription}
                      </p>
                      {service.urlSlug && (
                        <Link
                          to={`/services/${service.urlSlug}`}
                          className="inline-flex items-center gap-2 text-primary font-paragraph text-base hover:text-primary/80 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-7 p-8 order-2 md:order-1">
                      <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
                        {service.serviceName}
                      </h2>
                      <p className="font-paragraph text-lg text-foreground/70 mb-6">
                        {service.shortDescription}
                      </p>
                      {service.urlSlug && (
                        <Link
                          to={`/services/${service.urlSlug}`}
                          className="inline-flex items-center gap-2 text-primary font-paragraph text-base hover:text-primary/80 transition-colors"
                        >
                          Learn More
                          <ArrowRight className="h-5 w-5" aria-hidden="true" />
                        </Link>
                      )}
                    </div>
                    <div className="md:col-span-5 order-1 md:order-2">
                      {service.serviceImage && (
                        <Image
                          src={service.serviceImage}
                          alt={service.serviceName || 'Service image'}
                          className="w-full h-auto"
                          width={600}
                        />
                      )}
                    </div>
                  </>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/80 mb-8">
              Let's discuss how our services can help your business achieve its technology goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-paragraph text-base px-6 py-3 rounded transition-all hover:bg-primary-foreground/90"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
