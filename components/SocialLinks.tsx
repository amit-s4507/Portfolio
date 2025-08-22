import React from 'react';
import { Button } from 'reactstrap';
import { socialLinks } from '../portfolio';

const SocialLinks = () => {
  return (
    <div className="social-links-wrapper d-flex justify-content-center align-items-center gap-3 flex-wrap">
      {socialLinks.url && (
        <Button
          className="social-btn btn-icon-only rounded-circle"
          color="white"
          rel="noopener"
          aria-label="Portfolio Website"
          href={socialLinks.url}
          target="_blank"
          style={{
            width: '50px',
            height: '50px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-link" style={{ fontSize: '1.2rem', color: '#667eea' }} />
          </span>
        </Button>
      )}
      
      {socialLinks.linkedin && (
        <Button
          className="social-btn btn-icon-only rounded-circle"
          color="primary"
          rel="noopener"
          aria-label="LinkedIn Profile"
          href={socialLinks.linkedin}
          target="_blank"
          style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
            border: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(0, 119, 181, 0.3)'
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-linkedin" style={{ fontSize: '1.2rem' }} />
          </span>
        </Button>
      )}
      
      {socialLinks.github && (
        <Button
          className="social-btn btn-icon-only rounded-circle"
          color="dark"
          href={socialLinks.github}
          rel="noopener"
          aria-label="GitHub Profile"
          target="_blank"
          style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #333 0%, #24292e 100%)',
            border: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(51, 51, 51, 0.3)'
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-github" style={{ fontSize: '1.2rem' }} />
          </span>
        </Button>
      )}
      
      {socialLinks.email && (
        <Button
          className="social-btn btn-icon-only rounded-circle"
          color="danger"
          onClick={() => {
            window.open(`mailto:${socialLinks.email}`);
          }}
          target="_blank"
          rel="noopener"
          aria-label="Send Email"
          style={{
            width: '50px',
            height: '50px',
            background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
            border: 'none',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(220, 53, 69, 0.3)'
          }}
        >
          <span className="btn-inner--icon">
            <i className="fa fa-envelope" style={{ fontSize: '1.2rem' }} />
          </span>
        </Button>
      )}

      <style jsx>{`
        .social-links-wrapper {
          margin: 0;
          padding: 0;
        }
        
        .social-btn {
          position: relative;
          overflow: hidden;
        }
        
        .social-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }
        
        .social-btn:hover::before {
          left: 100%;
        }
        
        .social-btn:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }
        
        .social-btn:active {
          transform: translateY(-2px) scale(1.02);
        }
        
        @media (max-width: 768px) {
          .social-links-wrapper {
            justify-content: center;
            width: 100%;
          }
          
          .social-btn {
            width: 45px !important;
            height: 45px !important;
          }
          
          .social-btn .btn-inner--icon i {
            font-size: 1.1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;
