import { motion } from 'framer-motion';
import { Target, Users, Globe, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

export default function AboutPage() {
  const problems = [
    'Complex cloud infrastructure management',
    'Inefficient business processes',
    'Fragmented communication systems',
    'Underperforming IT systems',
    'Lack of strategic technology guidance',
    'Security and compliance concerns',
  ];

  const clientTypes = [
    {
      title: 'Small to Medium Businesses',
      description: 'Growing companies that need enterprise-level IT expertise without the overhead of a full-time team.',
    },
    {
      title: 'Enterprise Organizations',
      description: 'Large corporations seeking specialized consulting for complex technology initiatives.',
    },
    {
      title: 'Startups',
      description: 'Innovative companies building scalable technology foundations from the ground up.',
    },
  ];

  const workProcess = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We begin by understanding your business objectives, current challenges, and technology landscape.',
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Our experts develop a tailored roadmap that aligns technology solutions with your business goals.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute with precision, ensuring minimal disruption and maximum value delivery.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and refinement to ensure sustained performance and ROI.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6">
              <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
                What We Do
              </h1>
              <p className="font-paragraph text-xl text-foreground/70 mb-8">
                We partner with businesses to solve their most pressing technology challenges through strategic consulting and expert implementation.
              </p>
            </div>
            <div className="md:col-span-6">
              <Image
                src="https://static.wixstatic.com/media/b86096_4cb253f45667441c8685dc105c8f510e~mv2.png?originWidth=768&originHeight=576"
                alt="Side by Tech team collaboration"
                className="w-full h-auto"
                width={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center mb-16">
            <Target className="h-16 w-16 text-soft-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
              Problems We Solve
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/80 max-w-3xl mx-auto">
              Our expertise addresses the critical technology challenges that hold businesses back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map((problem, index) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-6 bg-primary-foreground/10 border border-primary-foreground/20"
              >
                <CheckCircle className="h-6 w-6 text-soft-gold flex-shrink-0 mt-1" aria-hidden="true" />
                <p className="font-paragraph text-base text-primary-foreground/90">
                  {problem}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              How We Work
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              Our proven methodology ensures consistent results and exceptional value delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workProcess.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="font-heading text-6xl font-bold text-soft-gold/20 mb-4">
                  {phase.step}
                </div>
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                  {phase.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-soft-gold mx-auto mb-6" aria-hidden="true" />
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Who We Work With
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              We serve a diverse range of clients, from ambitious startups to established enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={client.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 border border-secondary/20 hover:border-soft-gold transition-colors"
              >
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                  {client.title}
                </h3>
                <p className="font-paragraph text-base text-foreground/70">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote-First */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[120rem] px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-6 md:col-start-4 text-center">
              <Globe className="h-20 w-20 text-soft-gold mx-auto mb-8" aria-hidden="true" />
              <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
                Remote-First Excellence
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/80 mb-6">
                Our remote-first approach enables us to deliver world-class services with unmatched flexibility and responsiveness. We leverage cutting-edge collaboration tools and proven processes to ensure seamless communication and exceptional results, regardless of location.
              </p>
              <p className="font-paragraph text-base text-primary-foreground/70">
                This model allows us to tap into global talent, reduce overhead costs for our clients, and provide support across multiple time zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
