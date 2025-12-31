'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/privacy', label: 'Privacy Policy' },
    ],
    resources: [
      { href: '/help', label: 'Help Center' },
      { href: '/blog', label: 'Blog' },
    ],
  };

  return (
    <footer 
      className="text-white"
      style={{ 
        background: 'var(--gradient-primary)',
        padding: '60px 0 30px'
      }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="fw-bold mb-3">Skylith</h4>
            <p className="mb-3" style={{ opacity: 0.9 }}>
              Leading provider of innovative services and products. 
              We deliver excellence through cutting-edge solutions.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white" style={{ fontSize: '1.5rem', opacity: 0.8, textDecoration: 'none' }}>
                Facebook
              </a>
              <a href="#" className="text-white" style={{ fontSize: '1.5rem', opacity: 0.8, textDecoration: 'none' }}>
                Twitter
              </a>
              <a href="#" className="text-white" style={{ fontSize: '1.5rem', opacity: 0.8, textDecoration: 'none' }}>
                LinkedIn
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Company</h5>
            <ul className="list-unstyled">
              {footerLinks.company.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link 
                    href={link.href} 
                    className="text-white"
                    style={{ opacity: 0.8, textDecoration: 'none' }}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Legal</h5>
            <ul className="list-unstyled">
              {footerLinks.legal.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link 
                    href={link.href} 
                    className="text-white"
                    style={{ opacity: 0.8, textDecoration: 'none' }}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Resources</h5>
            <ul className="list-unstyled">
              {footerLinks.resources.map((link) => (
                <li key={link.href} className="mb-2">
                  <Link 
                    href={link.href} 
                    className="text-white"
                    style={{ opacity: 0.8, textDecoration: 'none' }}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="fw-bold mb-3">Contact</h5>
            <ul className="list-unstyled" style={{ opacity: 0.8 }}>
              <li className="mb-2">skylithsystems@gmail.com</li>
              <li className="mb-2">+91 9209965565</li>
              <li className="mb-2">123 Business St, City</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.2)' }} />

        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0" style={{ opacity: 0.8 }}>
              &copy; {currentYear} Skylith. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

