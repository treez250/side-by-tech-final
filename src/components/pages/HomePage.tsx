// HPI 1.6-V
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { ArrowRight, Cloud, Settings, Users, Zap, ChevronDown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

// --- Canonical Data Sources ---
const SERVICES_DATA = [
  {
    id: 'cloud',
    icon: Cloud,
    title: 'Cloud Administration',
    description: 'Expert management and optimization of your cloud infrastructure for maximum efficiency and security.',
    detail: 'Scalable architectures designed for the modern enterprise.'
  },
  {
    id: 'salesforce',
    icon: Settings,
    title: 'Salesforce Consulting',
    description: 'Strategic Salesforce implementation and customization to streamline your business processes.',
    detail: 'Unlocking the full potential of your CRM investment.'
  },
  {
    id: 'comms',
    icon: Users,
    title: 'Unified Communications',
    description: 'Seamless integration of communication tools to enhance collaboration across your organization.',
    detail: 'Connecting teams across borders and time zones.'
  },
  {
    id: 'systems',
    icon: Zap,
    title: 'Systems Optimization',
    description: 'Comprehensive analysis and enhancement of your IT systems for peak performance.',
    detail: 'Eliminating bottlenecks to drive operational excellence.'
  },
];

const STATS_DATA = [
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
  { value: '50+', label: 'Projects Delivered' },
];

// --- Utility Components ---

// Intersection Observer Wrapper for Scroll Reveals
const AnimatedReveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle the transition class
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay * 1000);
        observer.unobserve(element);
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-base ${className || ''}`}>
      {children}
    </div>
  );
};

// Sticky Section Wrapper
const StickySection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  return (
    <section className={`relative ${className || ''}`}>
      {children}
    </section>
  );
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax for Hero Image
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-soft-gold selection:text-white overflow-clip">
      <style>{`
        .reveal-base {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-base.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .clip-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .grid-line-y {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: rgba(0,0,0,0.03);
        }
        .grid-line-x {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background-color: rgba(0,0,0,0.03);
        }
      `}</style>

      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
          {/* Swiss Grid Background Lines */}
          <div className="absolute inset-0 pointer-events-none z-0 max-w-[120rem] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-12 h-full w-full gap-8">
              {[...Array(13)].map((_, i) => (
                <div key={i} className="h-full w-px bg-foreground/5 hidden md:block absolute" style={{ left: `calc(${(i / 12) * 100}%)` }} />
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-[120rem] w-full mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
            
            {/* Hero Content */}
            <div className="md:col-span-7 flex flex-col justify-center h-full py-12">
              <AnimatedReveal>
                <div className="inline-flex items-center gap-3 mb-8">
                  <span className="h-px w-12 bg-soft-gold"></span>
                  <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-foreground/60">Est. 2014</span>
                </div>
              </AnimatedReveal>

              <AnimatedReveal delay={0.1}>
                <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] tracking-tight text-primary mb-8">
                  Side by <span className="italic text-soft-gold">Tech</span>
                  <br />
                  Elevating IT.
                </h1>
              </AnimatedReveal>

              <AnimatedReveal delay={0.2}>
                <p className="font-paragraph text-xl md:text-2xl text-foreground/70 max-w-xl leading-relaxed mb-12">
                  Precision-engineered technology services that empower your business to thrive in the digital landscape. We are the silent architects of your success.
                </p>
              </AnimatedReveal>

              <AnimatedReveal delay={0.3}>
                <div className="flex flex-wrap gap-6">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground overflow-hidden transition-all hover:bg-primary/90"
                  >
                    <span className="relative z-10 font-paragraph text-lg tracking-wide flex items-center gap-3">
                      Get Started <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <Link
                    to="/services"
                    className="group inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground hover:border-foreground/40 transition-all"
                  >
                    <span className="font-paragraph text-lg tracking-wide">Explore Services</span>
                  </Link>
                </div>
              </AnimatedReveal>
            </div>

            {/* Hero Image - Parallax */}
            <div className="md:col-span-5 relative h-[60vh] md:h-[80vh] w-full">
              <motion.div 
                style={{ y: heroY, opacity: heroOpacity }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 z-10 mix-blend-multiply"></div>
                  <Image
                    src="https://static.wixstatic.com/media/b86096_901d2ee04ec5436eb305626432eb9db1~mv2.png?originWidth=1152&originHeight=704"
                    alt="Modern technology workspace showcasing IT solutions"
                    className="w-full h-full object-cover scale-110"
                    width={1200}
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-12 -left-12 w-48 h-48 border border-soft-gold/30 rounded-full z-20 hidden md:block" />
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-paragraph text-xs tracking-widest uppercase text-foreground/40">Scroll</span>
            <ChevronDown className="w-4 h-4 text-foreground/40 animate-bounce" />
          </motion.div>
        </section>

        {/* --- POSITIONING / ABOUT SECTION (Sticky) --- */}
        <section className="relative py-32 bg-background">
          <div className="max-w-[120rem] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
              
              {/* Sticky Title */}
              <div className="md:col-span-4 relative">
                <div className="md:sticky md:top-32">
                  <AnimatedReveal>
                    <h2 className="font-heading text-5xl md:text-6xl text-primary mb-6">
                      The Silent<br />Architect
                    </h2>
                    <div className="w-24 h-px bg-soft-gold mb-6"></div>
                    <p className="font-paragraph text-lg text-foreground/60 max-w-xs">
                      We build the invisible infrastructure that powers visible success.
                    </p>
                  </AnimatedReveal>
                </div>
              </div>

              {/* Scrolling Content */}
              <div className="md:col-span-8 space-y-24">
                <AnimatedReveal>
                  <div className="group">
                    <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-6 group-hover:text-soft-gold transition-colors duration-500">
                      Digital Transformation
                    </h3>
                    <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
                      At Side by Tech, we combine technical excellence with strategic insight to deliver IT solutions that drive real business value. We don't just fix computers; we optimize the digital nervous system of your enterprise.
                    </p>
                  </div>
                </AnimatedReveal>

                <AnimatedReveal delay={0.1}>
                  <div className="group">
                    <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-6 group-hover:text-soft-gold transition-colors duration-500">
                      Remote-First Precision
                    </h3>
                    <p className="font-paragraph text-xl md:text-2xl text-foreground/70 leading-relaxed">
                      Our remote-first approach ensures flexibility and responsiveness. We operate across boundaries, bringing world-class expertise directly to your digital doorstep, ensuring 24/7 continuity.
                    </p>
                  </div>
                </AnimatedReveal>

                <AnimatedReveal delay={0.2}>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
                    <div>
                      <h4 className="font-paragraph text-sm uppercase tracking-widest text-foreground/50 mb-2">Our Philosophy</h4>
                      <p className="font-heading text-2xl text-foreground">Proactive. Precise. Personal.</p>
                    </div>
                    <div>
                      <h4 className="font-paragraph text-sm uppercase tracking-widest text-foreground/50 mb-2">Our Promise</h4>
                      <p className="font-heading text-2xl text-foreground">Zero Downtime. Maximum Growth.</p>
                    </div>
                  </div>
                </AnimatedReveal>
              </div>
            </div>
          </div>
        </section>

        {/* --- SERVICES SECTION (Magazine Layout) --- */}
        <section className="relative py-32 bg-secondary/5 overflow-hidden">
          <div className="max-w-[120rem] mx-auto px-8 lg:px-16 mb-24">
            <AnimatedReveal>
              <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-foreground/10 pb-8">
                <div>
                  <h2 className="font-heading text-5xl md:text-7xl text-primary">Core Services</h2>
                </div>
                <div className="mb-2">
                  <Link to="/services" className="group flex items-center gap-2 font-paragraph text-lg text-foreground hover:text-soft-gold transition-colors">
                    View Full Catalog <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          <div className="max-w-[120rem] mx-auto px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {SERVICES_DATA.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={service.id} className="bg-background p-12 md:p-16 group hover:bg-white transition-colors duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110 origin-top-right">
                      <Icon className="w-32 h-32 text-foreground" />
                    </div>
                    
                    <AnimatedReveal delay={index * 0.1}>
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-8 group-hover:bg-soft-gold/20 transition-colors">
                          <Icon className="w-6 h-6 text-foreground group-hover:text-soft-gold transition-colors" />
                        </div>
                        
                        <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                          {service.title}
                        </h3>
                        
                        <p className="font-paragraph text-lg text-foreground/70 mb-6 max-w-md">
                          {service.description}
                        </p>

                        <div className="h-px w-12 bg-foreground/20 group-hover:w-full transition-all duration-700 ease-out mb-6"></div>

                        <p className="font-paragraph text-sm text-foreground/50 italic">
                          {service.detail}
                        </p>
                      </div>
                    </AnimatedReveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- STATS / TRUST SECTION --- */}
        <section className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-[120rem] mx-auto px-8 lg:px-16 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {STATS_DATA.map((stat, index) => (
                <AnimatedReveal key={index} delay={index * 0.1} className="pt-8 md:pt-0 md:px-8 first:pl-0 text-center md:text-left">
                  <div className="font-heading text-6xl md:text-7xl text-soft-gold mb-2 font-light">
                    {stat.value}
                  </div>
                  <div className="font-paragraph text-lg tracking-widest uppercase text-white/60">
                    {stat.label}
                  </div>
                </AnimatedReveal>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA SECTION --- */}
        <section className="relative py-40 bg-background overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-0 left-1/4 w-px h-full bg-foreground/5"></div>
             <div className="absolute top-0 right-1/4 w-px h-full bg-foreground/5"></div>
          </div>

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <AnimatedReveal>
              <h2 className="font-heading text-6xl md:text-8xl text-primary mb-8 leading-tight">
                Ready to <span className="text-soft-gold italic">Elevate</span> Your Infrastructure?
              </h2>
              <p className="font-paragraph text-xl md:text-2xl text-foreground/60 mb-12 max-w-2xl mx-auto">
                Join the forward-thinking companies that trust Side by Tech for their critical IT operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  to="/contact"
                  className="min-w-[200px] px-8 py-4 bg-primary text-primary-foreground font-paragraph text-lg hover:bg-primary/90 transition-colors"
                >
                  Start a Project
                </Link>
                <Link
                  to="/about"
                  className="min-w-[200px] px-8 py-4 border border-primary text-primary font-paragraph text-lg hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}