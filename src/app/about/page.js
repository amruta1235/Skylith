'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingHelpPopup from '@/components/FloatingHelpPopup';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const animations = [];
    const scrollTriggers = [];

    ScrollTrigger.getAll().forEach(st => st.kill());
    ScrollTrigger.refresh();

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

    if (image1Ref.current) {
      gsap.set(image1Ref.current, { y: 0 });
      const anim = gsap.to(image1Ref.current, {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
      animations.push(anim);
    }
    if (image2Ref.current) {
      gsap.set(image2Ref.current, { y: 0 });
      const anim = gsap.to(image2Ref.current, {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 0.5,
      });
      animations.push(anim);
    }
    if (image3Ref.current) {
      gsap.set(image3Ref.current, { y: 0 });
      const anim = gsap.to(image3Ref.current, {
        y: -15,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: 1,
      });
      animations.push(anim);
    }

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.set(card, { opacity: 0, y: 50 });
        const anim = gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
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

  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.',
    },
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We build trust through transparency, honesty, and ethical business practices in everything we do.',
    },
    {
      icon: '🚀',
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards and client satisfaction.',
    },
    {
      icon: '💡',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work closely with clients to achieve shared success.',
    },
  ];

  const stats = [
    { number: '10+', label: 'Years of Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="hero-section"
          style={{ 
            minHeight: '50vh',
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.98) 50%, rgba(107, 70, 193, 0.05) 100%)',
            paddingTop: '200px',
            paddingBottom: '80px',
          }}
        >
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
            <div 
              className="position-absolute"
              style={{
                width: '800px',
                height: '800px',
                background: 'radial-gradient(circle, rgba(107, 70, 193, 0.15) 0%, rgba(107, 70, 193, 0.05) 50%, transparent 100%)',
                borderRadius: '50%',
                top: '-200px',
                right: '-200px',
                filter: 'blur(60px)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)',
                borderRadius: '50%',
                bottom: '-150px',
                left: '-150px',
                filter: 'blur(50px)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(45, 27, 78, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                top: '30%',
                left: '10%',
                filter: 'blur(40px)',
              }}
            />
            <div 
              className="position-absolute w-100 h-100"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(107, 70, 193, 0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
                opacity: 0.3,
              }}
            />
            
            <div 
              ref={image1Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                top: '10%',
                right: '5%',
                width: '300px',
                height: '300px',
                zIndex: 1,
                opacity: 0.4,
                filter: 'blur(2px)',
              }}
            />
            
            <div 
              ref={image2Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                bottom: '15%',
                left: '8%',
                width: '250px',
                height: '250px',
                zIndex: 1,
                opacity: 0.35,
                filter: 'blur(1.5px)',
              }}
            />
            
            <div 
              ref={image3Ref}
              className="position-absolute d-none d-md-block"
              style={{
                top: '45%',
                right: '15%',
                width: '200px',
                height: '200px',
                zIndex: 1,
                opacity: 0.3,
                transform: 'translateY(-50%)',
                filter: 'blur(1px)',
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
                  🏢
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
                  About Skylith
                </h1>
                <p 
                  className="lead mx-auto"
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-light)',
                    maxWidth: '700px'
                  }}
                >
                  Leading provider of innovative services and products. We deliver excellence through cutting-edge solutions that transform businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h2 className="mb-4 gradient-text" style={{ fontSize: '2.5rem' }}>
                  Our Story
                </h2>
                <p className="mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                  Skylith is a leading company specializing in both service-based and product-based solutions. 
                  Founded with a vision to transform businesses through innovation and technology, we have been 
                  at the forefront of delivering cutting-edge solutions for over a decade.
                </p>
                <p className="mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                  Our team of experienced professionals combines deep industry knowledge with technical expertise 
                  to help businesses achieve their goals. We understand that every business is unique, which is 
                  why we tailor our solutions to meet specific needs and challenges.
                </p>
                <p className="mb-4" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                  From startups to enterprise-level organizations, we have successfully delivered projects across 
                  various industries, helping our clients stay competitive in an ever-evolving digital landscape.
                </p>
                <Link href="/contact" className="btn btn-gradient" onClick={handleLinkClick}>
                  Get in Touch
                </Link>
              </div>
              <div className="col-lg-6">
                <div 
                  className="glass rounded-4 p-5"
                  style={{
                    background: 'var(--gradient-card)',
                    minHeight: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div className="text-center w-100">
                    {stats.map((stat, index) => (
                      <div key={index} className="mb-4">
                        <h3 className="gradient-text mb-2" style={{ fontSize: '2.5rem' }}>{stat.number}</h3>
                        <p className="mb-0" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="glass rounded-4 p-5 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <div className="text-center mb-4" style={{ fontSize: '3rem' }}>🎯</div>
                  <h3 className="text-center mb-4 gradient-text">Our Mission</h3>
                  <p className="text-center" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                    To empower businesses with innovative technology solutions and strategic consulting that drive 
                    growth, efficiency, and competitive advantage. We are committed to delivering excellence in 
                    every project and building long-term partnerships with our clients.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="glass rounded-4 p-5 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <div className="text-center mb-4" style={{ fontSize: '3rem' }}>👁️</div>
                  <h3 className="text-center mb-4 gradient-text">Our Vision</h3>
                  <p className="text-center" style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                    To be the most trusted partner for businesses seeking transformative technology solutions. 
                    We envision a future where every organization we work with achieves sustainable growth and 
                    innovation through our expertise and dedication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title gradient-text mb-5">Our Core Values</h2>
            <p className="section-subtitle mb-5">
              The principles that guide everything we do and shape our company culture
            </p>
            <div className="row g-4">
              {values.map((value, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="card h-100 border-0 shadow-sm glass"
                    style={{
                      borderRadius: '20px',
                      padding: '2rem',
                      background: 'rgba(255, 255, 255, 0.8)',
                      transition: 'transform 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3 });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { scale: 1, duration: 0.3 });
                    }}
                  >
                    <div className="text-center mb-3" style={{ fontSize: '3rem' }}>
                      {value.icon}
                    </div>
                    <h4 className="text-center mb-3" style={{ color: 'var(--dark-purple)' }}>
                      {value.title}
                    </h4>
                    <p className="text-center" style={{ color: 'var(--text-light)' }}>
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section" style={{ background: 'var(--light-bg)' }}>
          <div className="container">
            <h2 className="section-title gradient-text mb-5">Why Choose Skylith</h2>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="glass rounded-4 p-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--dark-purple)' }}>Expert Team</h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    Our team consists of highly skilled professionals with years of experience in their respective 
                    fields. We stay updated with the latest technologies and industry best practices.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="glass rounded-4 p-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--dark-purple)' }}>Proven Track Record</h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    With over 1000 projects completed and 500+ satisfied clients, we have a proven track record 
                    of delivering successful solutions across various industries and business sizes.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="glass rounded-4 p-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--dark-purple)' }}>Custom Solutions</h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    We understand that one size doesn't fit all. Our solutions are tailored to meet your specific 
                    business needs, ensuring maximum value and return on investment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="glass rounded-4 p-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--dark-purple)' }}>24/7 Support</h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    We provide round-the-clock support to ensure your systems run smoothly. Our dedicated support 
                    team is always ready to assist you whenever you need help.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="glass rounded-4 p-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--dark-purple)' }}>Innovation Focus</h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    We continuously invest in research and development to bring you the latest innovations and 
                    technologies that can give you a competitive edge in the market.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="glass rounded-4 p-4 h-100" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <h4 className="mb-3" style={{ color: 'var(--dark-purple)' }}>Long-term Partnership</h4>
                  <p style={{ color: 'var(--text-light)' }}>
                    We believe in building long-term relationships with our clients. Our commitment extends beyond 
                    project delivery to ongoing support and continuous improvement.
                  </p>
                </div>
              </div>
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
              <h2 className="mb-4" style={{ fontSize: '2.5rem' }}>Ready to Work With Us?</h2>
              <p className="mb-4 lead" style={{ fontSize: '1.2rem', opacity: 0.95 }}>
                Let's discuss how we can help transform your business with our innovative solutions.
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
                onClick={handleLinkClick}
              >
                Contact Us Today
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

