'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingHelpPopup from '@/components/FloatingHelpPopup';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsRef = useRef([]);
  const featuresRef = useRef([]);
  const testimonialsRef = useRef([]);
  const processRef = useRef([]);
  const industriesRef = useRef([]);
  const statsRef = useRef([]);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const animations = [];
    const scrollTriggers = [];

    ScrollTrigger.getAll().forEach(st => st.kill());
    ScrollTrigger.refresh();

    if (titleRef.current) {
      gsap.set(titleRef.current, { opacity: 0, y: 50 });
      const anim = gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      });
      animations.push(anim);
    }

    if (subtitleRef.current) {
      gsap.set(subtitleRef.current, { opacity: 0, y: 30 });
      const anim = gsap.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });
      animations.push(anim);
    }

    if (buttonRef.current) {
      gsap.set(buttonRef.current, { opacity: 0, scale: 0.8 });
      const anim = gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.6,
        ease: 'back.out(1.7)',
      });
      animations.push(anim);
    }

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

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, { opacity: 0, y: 50, rotation: -5 });
        const anim = gsap.to(card, {
          opacity: 1,
          y: 0,
          rotation: 0,
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

    featuresRef.current.forEach((feature, index) => {
      if (feature) {
        gsap.set(feature, { opacity: 0, x: -50 });
        const anim = gsap.to(feature, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: feature,
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

    testimonialsRef.current.forEach((testimonial, index) => {
      if (testimonial) {
        gsap.set(testimonial, { opacity: 0, scale: 0.8, rotation: 5 });
        const anim = gsap.to(testimonial, {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: testimonial,
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

    processRef.current.forEach((step, index) => {
      if (step) {
        gsap.set(step, { opacity: 0, x: -30 });
        const anim = gsap.to(step, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: step,
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

    industriesRef.current.forEach((industry, index) => {
      if (industry) {
        gsap.set(industry, { opacity: 0, scale: 0.5 });
        const anim = gsap.to(industry, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.08,
          scrollTrigger: {
            trigger: industry,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
      });
      animations.push(anim);
        if (anim.scrollTrigger) {
          scrollTriggers.push(anim.scrollTrigger);
        }
      }
    });

    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.set(stat, { opacity: 0, y: 30 });
        const anim = gsap.to(stat, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: stat,
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
      icon: '🚀',
      title: 'Service Solutions',
      description: 'Comprehensive service-based solutions tailored to your business needs.',
      bgColor: '#FFFFFF',
      accentColor: '#8B5CF6',
    },
    {
      icon: '💼',
      title: 'Product Development',
      description: 'Innovative product development from concept to market launch.',
      bgColor: '#F8F9FA',
      accentColor: '#A78BFA',
    },
    {
      icon: '🎯',
      title: 'Consulting',
      description: 'Expert consulting services to drive your business forward.',
      bgColor: '#FFFFFF',
      accentColor: '#8B5CF6',
    },
    {
      icon: '🔧',
      title: 'Support & Maintenance',
      description: 'Round-the-clock support and maintenance for your operations.',
      bgColor: '#F3F4F6',
      accentColor: '#A78BFA',
    },
  ];

  const features = [
    {
      icon: '⚡',
      title: 'Fast Delivery',
      description: 'We deliver projects on time with agile methodologies and efficient workflows.',
    },
    {
      icon: '🛡️',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee for all solutions.',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description: 'Build solutions that grow with your business from startup to enterprise.',
    },
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'Leverage cutting-edge technologies and best practices in every project.',
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: '24/7 support team ready to assist you whenever you need help.',
    },
    {
      icon: '💰',
      title: 'Cost Effective',
      description: 'Optimized solutions that maximize ROI and reduce operational costs.',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your business needs, goals, and requirements to create a comprehensive plan.',
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Our expert team designs and develops solutions tailored to your specific needs.',
    },
    {
      number: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest quality standards.',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment followed by ongoing support and maintenance services.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Skylith transformed our business operations. Their expertise and dedication are unmatched. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CTO, Digital Solutions',
      content: 'Working with Skylith has been a game-changer. They delivered exactly what we needed, on time and within budget.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Director, Innovation Labs',
      content: 'The team at Skylith is professional, responsive, and truly understands our business needs. Outstanding service!',
      rating: 5,
    },
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Finance', icon: '💳' },
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Education', icon: '📚' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Real Estate', icon: '🏠' },
    { name: 'Logistics', icon: '🚚' },
    { name: 'Technology', icon: '💻' },
  ];

  const stats = [
    { number: '10+', label: 'Years Experience', icon: '📅' },
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '1000+', label: 'Projects Done', icon: '✅' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '24/7', label: 'Support', icon: '🔄' },
    { number: '99.9%', label: 'Uptime', icon: '⚡' },
  ];

  return (
    <>
      <Header />
      <main style={{ overflow: 'hidden' }}>
        {/* Hero Section with Background Image */}
        <section 
          ref={heroRef}
          style={{
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: 'url(/hero1.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: '100px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Dark overlay for text readability */}
          <div 
            className="position-absolute w-100 h-100"
            style={{
              top: 0,
              left: 0,
              zIndex: 1,
              background: 'linear-gradient(135deg, rgba(45, 27, 78, 0.7) 0%, rgba(107, 70, 193, 0.6) 100%)',
            }}
          />
          
          <div 
            ref={parallaxRef}
            className="position-absolute w-100 h-100"
            style={{
              top: 0,
              left: 0,
              zIndex: 0,
              background: 'radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.2) 0%, transparent 50%)',
            }}
          />

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row justify-content-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
              <div className="col-lg-8 col-xl-7 text-center">
                <div 
                  className="mb-4"
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    // background: 'rgba(255,255,255,0.2)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                </div>
                <h1 ref={titleRef}
                  className="  mt-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: '800', background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                     }}>
                Transform Your Business 
                </h1>
                <h1 className="mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'white', fontWeight: '800', background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',}}> with Skylith</h1>
                <p 
                  ref={subtitleRef}
                  className="lead mb-5"
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    color: 'rgba(255,255,255,0.95)',
                    lineHeight: '1.6',
                    textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                  }}
                >
                  Leading provider of innovative services and products. We deliver excellence through cutting-edge solutions that transform businesses.
                </p>
                <div ref={buttonRef} className="d-flex gap-3 flex-wrap justify-content-center">
                  <Link 
                    href="/services" 
                    className="btn px-5 py-3 fw-semibold"
                    style={{ 
                      background: 'white',
                      color: '#6B46C1',
                      border: 'none',
                      fontSize: '1.1rem',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                    }}
                  >
                    Explore Services →
                  </Link>
                  <Link 
                    href="/contact" 
                    className="btn px-5 py-3 fw-semibold"
                    style={{ 
                      background: 'transparent',
                      color: 'white',
                      border: '2px solid white',
                      fontSize: '1.1rem',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services with White/Gray/Lavender Theme */}
        <section className="section" style={{ background: '#FFFFFF', padding: '100px 0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="gradient-text mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
                Our Services
              </h2>
              <p className="lead" style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                Comprehensive solutions designed to drive your business forward
              </p>
            </div>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="h-100"
                    style={{
                      background: service.bgColor,
                      borderRadius: '20px',
                      padding: '2.5rem',
                      color: 'var(--dark-purple)',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 5px 20px rgba(139, 92, 246, 0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                      border: `2px solid ${service.accentColor}20`,
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { scale: 1.05, y: -10, duration: 0.3 });
                      e.currentTarget.style.boxShadow = `0 15px 40px ${service.accentColor}25`;
                      e.currentTarget.style.border = `2px solid ${service.accentColor}40`;
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.3 });
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 92, 246, 0.08)';
                      e.currentTarget.style.border = `2px solid ${service.accentColor}20`;
                    }}
                  >
                    <div 
                      className="position-absolute"
                      style={{
                        top: '-30px',
                        right: '-30px',
                        width: '100px',
                        height: '100px',
                        background: `${service.accentColor}10`,
                        borderRadius: '50%',
                      }}
                    />
                    <div 
                      style={{ 
                        fontSize: '3.5rem', 
                        marginBottom: '1.5rem', 
                        position: 'relative', 
                        zIndex: 1,
                        filter: `drop-shadow(0 4px 8px ${service.accentColor}30)`,
                      }}
                    >
                      {service.icon}
                    </div>
                    <h4 
                      className="mb-3" 
                      style={{ 
                        fontSize: '1.5rem', 
                        fontWeight: '700', 
                        position: 'relative', 
                        zIndex: 1,
                        color: 'var(--dark-purple)',
                      }}
                    >
                      {service.title}
                    </h4>
                    <p 
                      style={{ 
                        fontSize: '1rem', 
                        color: 'var(--text-light)', 
                        position: 'relative', 
                        zIndex: 1, 
                        lineHeight: '1.6' 
                      }}
                    >
                      {service.description}
                    </p>
                    <div 
                      className="position-absolute"
                      style={{
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, ${service.accentColor} 0%, ${service.accentColor}80 100%)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Modern Grid */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #2D1B4E 0%, #6B46C1 100%)', padding: '80px 0' }}>
          <div className="container">
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div key={index} className="col-lg-2 col-md-4 col-6">
                  <div
                    ref={(el) => (statsRef.current[index] = el)}
                    className="text-center"
                    style={{
                      padding: '2rem 1rem',
                      background: 'rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    <div className="mb-3" style={{ fontSize: '2.5rem' }}>
                      {stat.icon}
                    </div>
                    <h3 className="mb-2" style={{ fontSize: '2.5rem', color: 'white', fontWeight: '800' }}>
                      {stat.number}
                    </h3>
                    <p className="mb-0" style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features - Asymmetrical Layout */}
        <section className="section" style={{ padding: '100px 0', background: 'white' }}>
          <div className="container">
            <div className="row mb-5">
              <div className="col-lg-6">
                <h2 className="gradient-text mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
                  Why Choose Skylith
                </h2>
                <p className="lead" style={{ color: 'var(--text-light)' }}>
                  Discover the key features that make us the preferred choice for businesses worldwide
                </p>
              </div>
            </div>
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div
                    ref={(el) => (featuresRef.current[index] = el)}
                    style={{
                      padding: '2rem',
                      background: index % 2 === 0 ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'white',
                      borderRadius: '20px',
                      border: index % 2 === 0 ? 'none' : '2px solid #e5e7eb',
                      transition: 'all 0.3s ease',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { x: 10, duration: 0.3 });
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { x: 0, duration: 0.3 });
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="mb-3" style={{ fontSize: '2.5rem' }}>
                      {feature.icon}
                    </div>
                    <h4 className="mb-3" style={{ color: 'var(--dark-purple)', fontSize: '1.3rem', fontWeight: '700' }}>
                      {feature.title}
                    </h4>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section" style={{ background: '#f8f9fa', padding: '100px 0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="gradient-text mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
                How It Works
              </h2>
              <p className="lead" style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                Our proven process ensures successful project delivery
              </p>
            </div>
            <div className="row g-4">
              {processSteps.map((step, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div
                    ref={(el) => (processRef.current[index] = el)}
                    style={{
                      position: 'relative',
                      padding: '2rem',
                      background: 'white',
                      borderRadius: '20px',
                      borderLeft: '4px solid',
                      borderImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%) 1',
                      boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                      height: '100%',
                    }}
                  >
                    <div 
                      className="mb-3"
                      style={{
                        fontSize: '3rem',
                        fontWeight: '800',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        opacity: 0.3,
                      }}
                    >
                      {step.number}
                    </div>
                    <h4 className="mb-3" style={{ color: 'var(--dark-purple)', fontSize: '1.3rem', fontWeight: '700' }}>
                      {step.title}
                    </h4>
                    <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries - Circular Cards */}
        <section className="section" style={{ padding: '100px 0', background: 'white' }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="gradient-text mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
                Industries We Serve
              </h2>
              <p className="lead" style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                Experience across diverse industries and business verticals
              </p>
            </div>
            <div className="row g-4">
              {industries.map((industry, index) => (
                <div key={index} className="col-lg-3 col-md-4 col-6">
                  <div
                    ref={(el) => (industriesRef.current[index] = el)}
                    className="text-center"
                    style={{
                      padding: '2.5rem 1.5rem',
                      background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)',
                      borderRadius: '50%',
                      aspectRatio: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '3px solid transparent',
                      backgroundClip: 'padding-box',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { scale: 1.1, rotation: 5, duration: 0.3 });
                      e.currentTarget.style.border = '3px solid #667eea';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { scale: 1, rotation: 0, duration: 0.3 });
                      e.currentTarget.style.border = '3px solid transparent';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div className="mb-3" style={{ fontSize: '3rem' }}>
                      {industry.icon}
                    </div>
                    <h5 style={{ color: 'var(--dark-purple)', fontWeight: '600', margin: 0 }}>
                      {industry.name}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Modern Cards */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '100px 0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800', color: 'white' }}>
                What Our Clients Say
              </h2>
              <p className="lead" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
                Don't just take our word for it
              </p>
            </div>
            <div className="row g-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div
                    ref={(el) => (testimonialsRef.current[index] = el)}
                    style={{
                      padding: '2.5rem',
                      background: 'white',
                      borderRadius: '25px',
                      boxShadow: '0 15px 50px rgba(0,0,0,0.2)',
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} style={{ color: '#FFD700', fontSize: '1.3rem' }}>⭐</span>
                      ))}
                    </div>
                    <p className="mb-4" style={{ color: 'var(--text-light)', fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.8' }}>
                      "{testimonial.content}"
                    </p>
                    <div style={{ borderTop: '2px solid #f0f0f0', paddingTop: '1.5rem' }}>
                      <h5 className="mb-1" style={{ color: 'var(--dark-purple)', fontWeight: '700' }}>
                        {testimonial.name}
                      </h5>
                      <p className="mb-0" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section - Split Design */}
        <section className="section" style={{ padding: '100px 0', background: 'white' }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <div 
                  className="mb-4"
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    color: 'white',
                  }}
                >
                  About Us
                </div>
                <h2 className="gradient-text mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
                  Leading Innovation Since 2014
                </h2>
                <p className="mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  Skylith is a leading company specializing in both service-based and product-based solutions. 
                  We combine innovation with expertise to deliver results that matter.
                </p>
                <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-light)', lineHeight: '1.8' }}>
                  Our team of professionals is dedicated to helping businesses achieve their goals through 
                  cutting-edge technology and strategic consulting.
                </p>
                <Link 
                  href="/about" 
                  className="btn px-5 py-3 fw-semibold"
                  style={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.3)';
                  }}
                  onClick={handleLinkClick}
                >
                  Learn More →
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  {[
                    { number: '10+', label: 'Years Experience' },
                    { number: '500+', label: 'Happy Clients' },
                    { number: '1000+', label: 'Projects Done' },
                    { number: '50+', label: 'Team Members' },
                  ].map((stat, index) => (
                    <div key={index} className="col-6">
                      <div 
                        style={{
                          padding: '2rem',
                          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                          borderRadius: '20px',
                          textAlign: 'center',
                        }}
                      >
                        <h3 className="gradient-text mb-2" style={{ fontSize: '2.5rem', fontWeight: '800' }}>
                          {stat.number}
                        </h3>
                        <p className="mb-0" style={{ color: 'var(--text-light)', fontWeight: '600' }}>
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="section" style={{ background: '#f8f9fa', padding: '100px 0' }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="gradient-text mb-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
                Technologies We Work With
              </h2>
              <p className="lead" style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto' }}>
                Leveraging the latest technologies and frameworks
              </p>
            </div>
            <div className="row g-4">
              {[
                { name: 'Cloud Platforms', tech: 'AWS, Azure, GCP' },
                { name: 'Frontend', tech: 'React, Next.js, Vue.js' },
                { name: 'Backend', tech: 'Node.js, Python, Java' },
                { name: 'Mobile', tech: 'React Native, Flutter' },
                { name: 'Databases', tech: 'PostgreSQL, MongoDB, MySQL' },
                { name: 'DevOps', tech: 'Docker, Kubernetes, CI/CD' },
              ].map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div 
                  style={{
                      padding: '2rem',
                      background: 'white',
                      borderRadius: '20px',
                      border: '2px solid #e5e7eb',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.border = '2px solid #667eea';
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.border = '2px solid #e5e7eb';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <h5 className="mb-3" style={{ color: 'var(--dark-purple)', fontWeight: '700', fontSize: '1.2rem' }}>
                      {item.name}
                    </h5>
                    <p className="mb-0" style={{ color: 'var(--text-light)' }}>
                      {item.tech}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ padding: '120px 0', background: '#FFFFFF' }}>
          <div className="container">
            <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="mb-4 gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '800' }}>
                Ready to Transform Your Business?
              </h2>
              <p className="lead mb-5" style={{ fontSize: '1.3rem', color: 'var(--dark-purple)' }}>
                Let's discuss how we can help you achieve your goals with our innovative solutions.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link 
                  href="/contact" 
                  className="btn px-5 py-3 fw-semibold"
                  style={{ 
                    background: 'linear-gradient(135deg, #6B46C1 0%, #8B5CF6 100%)', 
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(107, 70, 193, 0.3)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(107, 70, 193, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(107, 70, 193, 0.3)';
                  }}
                  onClick={handleLinkClick}
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/services" 
                  className="btn px-5 py-3 fw-semibold"
                  style={{ 
                    background: 'transparent', 
                    color: 'var(--dark-purple)',
                    border: '2px solid #8B5CF6',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8B5CF6';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--dark-purple)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  onClick={handleLinkClick}
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingHelpPopup />
    </>
  );
}
