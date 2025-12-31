'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingHelpPopup from '@/components/FloatingHelpPopup';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
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

    // Animated elements - different style for blog
    if (image1Ref.current) {
      gsap.set(image1Ref.current, { x: 0, y: 0, rotation: 0 });
      const anim = gsap.to(image1Ref.current, {
        x: 20,
        y: -20,
        rotation: 180,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      animations.push(anim);
    }
    if (image2Ref.current) {
      gsap.set(image2Ref.current, { x: 0, y: 0, rotation: 0 });
      const anim = gsap.to(image2Ref.current, {
        x: -15,
        y: 15,
        rotation: -180,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.3,
      });
      animations.push(anim);
    }
    if (image3Ref.current) {
      gsap.set(image3Ref.current, { scale: 1, opacity: 0.5 });
      const anim = gsap.to(image3Ref.current, {
        scale: [1, 1.3, 1],
        opacity: [0.5, 0.8, 0.5],
        duration: 4,
        repeat: -1,
        ease: 'power1.inOut',
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
          delay: index * 0.1,
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

  const blogPosts = [
    {
      slug: 'the-future-of-digital-transformation',
      title: 'The Future of Digital Transformation',
      excerpt: 'Explore how businesses are leveraging technology to transform their operations and stay competitive in the digital age.',
      author: 'John Smith',
      date: 'December 15, 2024',
      category: 'Technology',
      image: '🚀',
    },
    {
      slug: 'best-practices-for-cloud-migration',
      title: 'Best Practices for Cloud Migration',
      excerpt: 'Learn the essential steps and strategies for successfully migrating your infrastructure to the cloud.',
      author: 'Sarah Johnson',
      date: 'December 10, 2024',
      category: 'Cloud',
      image: '☁️',
    },
    {
      slug: 'cybersecurity-in-2024-what-you-need-to-know',
      title: 'Cybersecurity in 2024: What You Need to Know',
      excerpt: 'Stay ahead of the latest cybersecurity threats and learn how to protect your business from emerging risks.',
      author: 'Mike Davis',
      date: 'December 5, 2024',
      category: 'Security',
      image: '🔒',
    },
    {
      slug: 'product-development-from-idea-to-market',
      title: 'Product Development: From Idea to Market',
      excerpt: 'A comprehensive guide to bringing your product ideas to life and successfully launching them in the market.',
      author: 'Emily Chen',
      date: 'November 28, 2024',
      category: 'Product',
      image: '💼',
    },
    {
      slug: 'the-power-of-ai-in-business-operations',
      title: 'The Power of AI in Business Operations',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes and creating new opportunities.',
      author: 'David Wilson',
      date: 'November 20, 2024',
      category: 'AI',
      image: '🤖',
    },
    {
      slug: 'building-scalable-solutions-for-growth',
      title: 'Building Scalable Solutions for Growth',
      excerpt: 'Learn how to design and implement scalable solutions that grow with your business needs.',
      author: 'Lisa Anderson',
      date: 'November 15, 2024',
      category: 'Development',
      image: '📈',
    },
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
            background: 'linear-gradient(225deg, rgba(248, 249, 250, 0.98) 0%, rgba(255, 255, 255, 0.95) 30%, rgba(107, 70, 193, 0.06) 100%)',
            paddingTop: '200px',
            paddingBottom: '80px',
          }}
        >
          {/* Unique Blog Background Pattern */}
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
            {/* Wave-like shapes */}
            <div 
              className="position-absolute"
              style={{
                width: '600px',
                height: '600px',
                background: 'linear-gradient(120deg, rgba(107, 70, 193, 0.1) 0%, rgba(139, 92, 246, 0.08) 50%, transparent 100%)',
                borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
                top: '-100px',
                right: '-150px',
                filter: 'blur(50px)',
                transform: 'rotate(25deg)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '500px',
                height: '500px',
                background: 'linear-gradient(60deg, rgba(139, 92, 246, 0.12) 0%, rgba(107, 70, 193, 0.08) 100%)',
                borderRadius: '30% 70% 50% 50% / 50% 50% 50% 50%',
                bottom: '-100px',
                left: '-100px',
                filter: 'blur(45px)',
                transform: 'rotate(-20deg)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '350px',
                height: '350px',
                background: 'radial-gradient(ellipse at center, rgba(45, 27, 78, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(35px)',
              }}
            />
            
            {/* Lines pattern - like text lines */}
            <div 
              className="position-absolute w-100 h-100"
              style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(107, 70, 193, 0.04) 2px, rgba(107, 70, 193, 0.04) 4px)',
                opacity: 0.6,
              }}
            />
            
            {/* Animated geometric shapes */}
            <div 
              ref={image1Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                width: '100px',
                height: '100px',
                border: '3px solid rgba(107, 70, 193, 0.2)',
                borderRadius: '20%',
                top: '15%',
                right: '15%',
                zIndex: 1,
                transform: 'rotate(45deg)',
              }}
            />
            <div 
              ref={image2Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                width: '80px',
                height: '80px',
                background: 'rgba(139, 92, 246, 0.15)',
                borderRadius: '50%',
                bottom: '20%',
                left: '12%',
                zIndex: 1,
              }}
            />
            <div 
              ref={image3Ref}
              className="position-absolute d-none d-md-block"
              style={{
                width: '60px',
                height: '60px',
                border: '2px dashed rgba(107, 70, 193, 0.25)',
                borderRadius: '50%',
                top: '55%',
                right: '20%',
                zIndex: 1,
              }}
            />
          </div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center" style={{ minHeight: 'calc(50vh - 280px)' }}>
              <div className="col-lg-10 mx-auto text-center">
                <div 
                  className="mb-4"
                  style={{
                    fontSize: '4rem',
                    lineHeight: '1',
                  }}
                >
                  ✍️
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
                  Blog
                </h1>
                <p 
                  className="lead mx-auto"
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-light)',
                    maxWidth: '700px'
                  }}
                >
                  Insights, tips, and updates from the Skylith team
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 className="section-title gradient-text mb-5">Latest Articles</h2>
            <p className="section-subtitle mb-5">
              Stay updated with the latest trends, insights, and best practices
            </p>
            <div className="row g-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div 
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="card h-100 border-0 shadow-sm glass"
                    style={{
                      borderRadius: '20px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      transition: 'transform 0.3s ease',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, { scale: 1.03, y: -5, duration: 0.3 });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, { scale: 1, y: 0, duration: 0.3 });
                    }}
                  >
                    <div 
                      className="text-center p-4"
                      style={{
                        background: 'var(--gradient-primary)',
                        fontSize: '4rem',
                        minHeight: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {post.image}
                    </div>
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <span 
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            background: 'rgba(107, 70, 193, 0.1)',
                            color: 'var(--light-purple)',
                            fontSize: '0.85rem',
                          }}
                        >
                          {post.category}
                        </span>
                        <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>
                          {post.date}
                        </span>
                      </div>
                      <h3 className="mb-3" style={{ color: 'var(--dark-purple)', fontSize: '1.5rem' }}>
                        {post.title}
                      </h3>
                      <p className="mb-3" style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                        {post.excerpt}
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                          By {post.author}
                        </span>
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="text-decoration-none fw-semibold"
                          style={{ color: 'var(--light-purple)' }}
                          onClick={handleLinkClick}
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section" style={{ background: 'var(--light-bg)', padding: '80px 0' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div 
                  className="glass rounded-4 p-5 text-center"
                  style={{
                    background: 'var(--gradient-primary)',
                    color: 'white',
                    boxShadow: '0 10px 40px rgba(45, 27, 78, 0.2)',
                  }}
                >
                  <h2 className="mb-3" style={{ fontSize: '2.5rem' }}>Subscribe to Our Newsletter</h2>
                  <p className="mb-4 lead" style={{ fontSize: '1.2rem', opacity: 0.95 }}>
                    Get the latest insights, tips, and updates delivered to your inbox.
                  </p>
                  <div className="d-flex gap-2 justify-content-center flex-wrap">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      style={{
                        maxWidth: '400px',
                        borderRadius: '50px',
                        border: 'none',
                        padding: '12px 20px',
                      }}
                    />
                    <button 
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
                      Subscribe
                    </button>
                  </div>
                </div>
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

