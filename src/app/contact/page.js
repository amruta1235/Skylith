'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingHelpPopup from '@/components/FloatingHelpPopup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

    // Animated circles - different animation style
    if (image1Ref.current) {
      gsap.set(image1Ref.current, { scale: 1, rotation: 0 });
      const anim = gsap.to(image1Ref.current, {
        scale: 1.2,
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: 'none',
      });
      animations.push(anim);
    }
    if (image2Ref.current) {
      gsap.set(image2Ref.current, { scale: 1, rotation: 0 });
      const anim = gsap.to(image2Ref.current, {
        scale: 1.3,
        rotation: -360,
        duration: 10,
        repeat: -1,
        ease: 'none',
      });
      animations.push(anim);
    }
    if (image3Ref.current) {
      gsap.set(image3Ref.current, { scale: 1, y: 0 });
      const anim = gsap.to(image3Ref.current, {
        scale: [1, 1.4, 1],
        y: [0, -30, 0],
        duration: 4,
        repeat: -1,
        ease: 'power1.inOut',
      });
      animations.push(anim);
    }

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            background: 'linear-gradient(180deg, rgba(107, 70, 193, 0.08) 0%, rgba(255, 255, 255, 0.95) 50%, rgba(248, 249, 250, 0.98) 100%)',
            paddingTop: '200px',
            paddingBottom: '80px',
          }}
        >
          {/* Unique Background Pattern */}
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
            {/* Geometric shapes - different from home */}
            <div 
              className="position-absolute"
              style={{
                width: '400px',
                height: '400px',
                background: 'linear-gradient(45deg, rgba(107, 70, 193, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%)',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                top: '10%',
                right: '10%',
                filter: 'blur(40px)',
                transform: 'rotate(45deg)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '350px',
                height: '350px',
                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(107, 70, 193, 0.1) 100%)',
                borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                bottom: '15%',
                left: '5%',
                filter: 'blur(35px)',
                transform: 'rotate(-30deg)',
              }}
            />
            <div 
              className="position-absolute"
              style={{
                width: '300px',
                height: '300px',
                background: 'radial-gradient(ellipse, rgba(45, 27, 78, 0.12) 0%, transparent 70%)',
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                filter: 'blur(30px)',
              }}
            />
            
            {/* Grid pattern overlay */}
            <div 
              className="position-absolute w-100 h-100"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(107, 70, 193, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(107, 70, 193, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                opacity: 0.5,
              }}
            />
            
            {/* Animated circles */}
            <div 
              ref={image1Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                width: '120px',
                height: '120px',
                border: '2px solid rgba(107, 70, 193, 0.2)',
                borderRadius: '50%',
                top: '20%',
                right: '20%',
                zIndex: 1,
              }}
            />
            <div 
              ref={image2Ref}
              className="position-absolute d-none d-lg-block"
              style={{
                width: '80px',
                height: '80px',
                border: '2px solid rgba(139, 92, 246, 0.25)',
                borderRadius: '50%',
                bottom: '25%',
                left: '15%',
                zIndex: 1,
              }}
            />
            <div 
              ref={image3Ref}
              className="position-absolute d-none d-md-block"
              style={{
                width: '60px',
                height: '60px',
                background: 'rgba(107, 70, 193, 0.15)',
                borderRadius: '50%',
                top: '60%',
                right: '25%',
                zIndex: 1,
              }}
            />
          </div>

          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="row align-items-center" style={{ minHeight: 'calc(50vh - 160px)' }}>
              <div className="col-lg-8 mx-auto text-center">
                <div 
                  className="mb-4"
                  style={{
                    fontSize: '4rem',
                    lineHeight: '1',
                  }}
                >
                  📧
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
                  Contact Us
                </h1>
                <p 
                  className="lead mx-auto"
                  style={{ 
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-light)',
                    maxWidth: '700px'
                  }}
                >
                  Get in touch with us. We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <h2 className="mb-4 gradient-text">Get in Touch</h2>
                <p className="mb-4" style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
                  Have a question or want to work with us? Fill out the form and we'll get back to you as soon as possible.
                </p>

                <div className="mb-4">
                  <h5 className="mb-3" style={{ color: 'var(--dark-purple)' }}>Contact Information</h5>
                  <div className="mb-3">
                    <strong>Email:</strong> skylithsystems@gmail.com
                  </div>
                  <div className="mb-3">
                    <strong>Phone:</strong> +91 9209965565
                  </div>
                  <div className="mb-3">
                    <strong>Address:</strong> 418, 4th Floor, Gera Imperium Alpha, Kharadi, Pune, Maharashtra 411014
                  </div>
                </div>

                <div className="glass rounded-4 p-4">
                  <h5 className="mb-3" style={{ color: 'var(--dark-purple)' }}>Business Hours</h5>
                  <p className="mb-2">Monday - Friday: 9:03 AM - 6:30 PM</p>
                  <p className="mb-2">Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="glass rounded-4 p-4" style={{ background: 'rgba(255, 255, 255, 0.9)' }}>
                  <h3 className="mb-4" style={{ color: 'var(--dark-purple)' }}>Send us a Message</h3>
                  
                  {submitStatus === 'success' && (
                    <div className="alert alert-success" role="alert">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="alert alert-danger" role="alert">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px' }}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px' }}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{ borderRadius: '10px' }}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Subject *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px' }}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="message" className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: '10px' }}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-gradient w-100"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
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

