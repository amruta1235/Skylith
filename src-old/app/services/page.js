'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingHelpPopup from '@/components/FloatingHelpPopup';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const cardsRef = useRef([]);
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    const animations = [];
    const scrollTriggers = [];

    // Reset and refresh ScrollTrigger
    ScrollTrigger.getAll().forEach(st => st.kill());
    ScrollTrigger.refresh();

    // Parallax effect
    if (parallaxRef.current && heroRef.current) {
      gsap.set(parallaxRef.current, { yPercent: 0 });
      const anim = gsap.to(parallaxRef.current, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      animations.push(anim);
      if (anim.scrollTrigger) {
        scrollTriggers.push(anim.scrollTrigger);
      }
    }

    // Animated elements - different style for services
    if (image1Ref.current) {
      gsap.set(image1Ref.current, { scale: 1, x: 0, y: 0 });
      const anim = gsap.to(image1Ref.current, {
        scale: [1, 1.2, 1],
        x: [0, 25, 0],
        y: [0, -25, 0],
        duration: 5,
        repeat: -1,
        ease: 'power2.inOut',
      });
      animations.push(anim);
    }
    if (image2Ref.current) {
      gsap.set(image2Ref.current, { scale: 1, x: 0, y: 0 });
      const anim = gsap.to(image2Ref.current, {
        scale: [1, 1.15, 1],
        x: [0, -20, 0],
        y: [0, 20, 0],
        duration: 4.5,
        repeat: -1,
        ease: 'power2.inOut',
        delay: 0.4,
      });
      animations.push(anim);
    }
    if (image3Ref.current) {
      gsap.set(image3Ref.current, { rotation: 0, scale: 1 });
      const anim = gsap.to(image3Ref.current, {
        rotation: 360,
        scale: [1, 1.3, 1],
        duration: 7,
        repeat: -1,
        ease: 'none',
      });
      animations.push(anim);
    }

    // Reset and animate cards
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, { opacity: 0, y: 50 });
        const anim = gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
        animations.push(anim);
        if (anim.scrollTrigger) {
          scrollTriggers.push(anim.scrollTrigger);
        }
      }
    });

    // Cleanup function
    return () => {
      animations.forEach(anim => {
        if (anim && anim.kill) anim.kill();
      });
      scrollTriggers.forEach(st => {
        if (st && st.kill) st.kill();
      });
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const services = [
    {
      slug: 'service-based-solutions',
      title: 'Service-Based Solutions',
      description: 'Comprehensive service offerings tailored to your business needs.',
      features: ['Custom Development', 'Consulting Services', 'Support & Maintenance', 'Training Programs'],
      icon: '🎯',
    },
    {
      slug: 'product-development',
      title: 'Product Development',
      description: 'End-to-end product development from ideation to launch.',
      features: ['Product Strategy', 'Design & Prototyping', 'Development', 'Launch Support'],
      icon: '💼',
    },
    {
      slug: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps Services', 'Monitoring'],
      icon: '☁️',
    },
    {
      slug: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Transform your business with modern digital solutions.',
      features: ['Process Automation', 'Data Analytics', 'AI Integration', 'IoT Solutions'],
      icon: '🚀',
    },
    {
      slug: 'security-services',
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your business.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', '24/7 Monitoring'],
      icon: '🔒',
    },
    {
      slug: 'managed-services',
      title: 'Managed Services',
      description: 'Complete IT management and support services.',
      features: ['Network Management', 'Server Management', 'Backup Solutions', 'Help Desk'],
      icon: '⚙️',
    },
  ];

  return (
    <>
      <Header />
      <main >
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="hero-section"
          style={{ 
            minHeight: '50vh',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.98) 40%, rgba(107, 70, 193, 0.05) 100%)',
            paddingTop: '200px',
            paddingBottom: '80px',
          }}
        >
          {/* Unique Services Background Pattern */}
          <div 
            ref={parallaxRef}
            className="position-absolute w-100 h-100"
            style={{
              top: 0,
              left: 0,
              zIndex: 0,
              overflow: 'hidden',
            }}
          >
            {/* Hexagonal/tech-inspired shapes */}
            <div 
              className="position-absolute"
              style={{
                width: '550px',
                height: '550px',
                background: 'linear-gradient(45deg, rgba(107, 70, 193, 0.12) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)',
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                top: '-150px',
                right: '-100px',
                filter: 'blur(45px)',
                transform: 'rotate(15deg)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '450px',
                height: '450px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(107, 70, 193, 0.1) 100%)',
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                bottom: '-120px',
                left: '-80px',
                filter: 'blur(40px)',
                transform: 'rotate(-10deg)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(45, 27, 78, 0.12) 0%, transparent 70%)',
                borderRadius: '20%',
                top: '45%',
                left: '45%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                filter: 'blur(30px)',
              }}
            />
            
            {/* Tech grid pattern */}
            <div 
              className="position-absolute w-100 h-100"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(107, 70, 193, 0.04) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(107, 70, 193, 0.04) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                opacity: 0.7,
              }}
            />
            
            {/* Animated service icons/shapes */}
            <div 
              ref={image1Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                width: '90px',
                height: '90px',
                background: 'rgba(107, 70, 193, 0.15)',
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                top: '18%',
                right: '18%',
                zIndex: 1,
              }}
            />
            <div 
              ref={image2Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                width: '70px',
                height: '70px',
                border: '3px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '15px',
                bottom: '22%',
                left: '15%',
                zIndex: 1,
                transform: 'rotate(45deg)',
              }}
            />
            <div 
              ref={image3Ref}
              className="position-absolute d-none d-md-block"
              style={{
                width: '80px',
                height: '80px',
                background: 'rgba(107, 70, 193, 0.12)',
                borderRadius: '50%',
                top: '58%',
                right: '22%',
                zIndex: 1,
              }}
            />
          </div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center" style={{ minHeight: 'calc(50vh - 160px)' }}>
              <div className="col-lg-10 mx-auto text-center">
                <div 
                  className="mb-4"
                  style={{
                    fontSize: '4rem',
                    lineHeight: '1',
                  }}
                >
                  ⚙️
                </div>
                <h1 
                  className="fw-bold mb-4"
                  style={{ 
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: 'var(--dark-purple)',
                    lineHeight: '1.2',
                    fontWeight: '700'
                  }}
                >
                  Our Services
                </h1>
                <p 
                  className="lead mx-auto"
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-light)',
                    maxWidth: '700px'
                  }}
                >
                  Comprehensive service-based and product-based solutions to drive your business forward.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section" style={{ background: 'var(--light-bg)', padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title gradient-text mb-5">What We Offer</h2>
            <p className="section-subtitle mb-5">
              Explore our comprehensive range of services designed to meet your business needs
            </p>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="card h-100 border-0 shadow-sm glass"
                    style={{
                      borderRadius: '20px',
                      padding: '2rem',
                      background: 'rgba(255, 255, 255, 0.9)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { scale: 1.03, y: -5, duration: 0.3 });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.3 });
                    }}
                  >
                    <div className="text-center mb-3" style={{ fontSize: '3rem' }}>
                      {service.icon}
                    </div>
                    <h3 className="text-center mb-3 gradient-text">{service.title}</h3>
                    <p className="text-center mb-4" style={{ color: 'var(--text-light)' }}>
                      {service.description}
                    </p>
                    <ul className="list-unstyled">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2" style={{ color: 'var(--text-light)' }}>
                          <span className="me-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-center mt-4">
                      <Link href={`/services/${service.slug}`} className="btn btn-outline-gradient" onClick={handleLinkClick}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <div 
              className="glass rounded-4 p-5 text-center"
              style={{
                background: 'var(--gradient-primary)',
                color: 'white',
                boxShadow: '0 10px 40px rgba(45, 27, 78, 0.2)',
              }}
            >
              <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Ready to Get Started?</h2>
              <p className="mb-4 lead" style={{ fontSize: '1.2rem', opacity: 0.95 }}>
                Contact us today to discuss how we can help transform your business.
              </p>
              <Link 
                href="/contact" 
                className="btn btn-lg rounded-pill px-5 py-3 fw-semibold"
                style={{ 
                  background: 'white', 
                  color: 'var(--dark-purple)',
                  border: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingHelpPopup />
    </>
  );
}

