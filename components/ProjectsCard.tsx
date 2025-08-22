import React, { useState } from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ProjectType } from '../types/sections';

const ProjectsCard = ({ name, desc, github, link }: ProjectType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="project-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className="project-card modern-card h-100 border-0 shadow-lg"
        style={{
          borderRadius: '20px',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
          boxShadow: isHovered 
            ? '0 30px 60px rgba(0, 0, 0, 0.15)' 
            : '0 8px 25px rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* Gradient Border */}
        <div 
          className="gradient-border"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: 'linear-gradient(90deg, #00c6ff, #0072ff, #9d00ff)',
            transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
            transition: 'transform 0.3s ease',
            transformOrigin: 'left'
          }}
        />
        
        <CardBody className="p-4 d-flex flex-column h-100">
          {/* Project Header */}
          <div className="project-header mb-3">
            <div 
              className="project-icon mb-3"
              style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.8rem',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isHovered ? 'scale(1.1) rotate(10deg)' : 'scale(1) rotate(0deg)'
              }}
            >
              <i className="fa fa-code" />
            </div>
            <h3 
              className="project-title mb-3"
              style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#2d3748',
                lineHeight: '1.3',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {name}
            </h3>
          </div>

          {/* Project Description */}
          <div className="project-description flex-grow-1 mb-4">
            <p 
              className="description"
              style={{
                fontSize: '1rem',
                color: '#4a5568',
                lineHeight: '1.7',
                margin: 0,
                textAlign: 'justify'
              }}
            >
              {desc}
            </p>
          </div>

          {/* Project Tech Stack Indicator */}
          <div className="tech-stack mb-4">
            <div className="d-flex flex-wrap gap-2">
              {name.includes('AI') && (
                <span className="tech-badge" style={{ background: '#ff6b6b' }}>AI</span>
              )}
              {name.includes('React') || desc.includes('React') && (
                <span className="tech-badge" style={{ background: '#61dafb' }}>React</span>
              )}
              {name.includes('Next') || desc.includes('Next') && (
                <span className="tech-badge" style={{ background: '#000' }}>Next.js</span>
              )}
              {desc.includes('TypeScript') && (
                <span className="tech-badge" style={{ background: '#3178c6' }}>TypeScript</span>
              )}
              {desc.includes('LangChain') && (
                <span className="tech-badge" style={{ background: '#10a37f' }}>LangChain</span>
              )}
              {desc.includes('FastAPI') && (
                <span className="tech-badge" style={{ background: '#009688' }}>FastAPI</span>
              )}
              {desc.includes('PostgreSQL') && (
                <span className="tech-badge" style={{ background: '#336791' }}>PostgreSQL</span>
              )}
            </div>
          </div>

          {/* Project Actions */}
          <div className="project-actions mt-auto">
            <div className="d-flex gap-3 flex-wrap">
              {github && (
                <Button
                  className="btn-github btn-modern"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="View on GitHub"
                  style={{
                    background: 'linear-gradient(135deg, #333 0%, #555 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    color: 'white',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    minWidth: '130px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span className="btn-inner--icon me-2">
                    <i className="fa fa-github" style={{ fontSize: '1.1rem' }} />
                  </span>
                  <span className="btn-inner--text">GitHub</span>
                </Button>
              )}
              
              {link && (
                <Button
                  className="btn-demo btn-modern"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Live Demo"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    padding: '12px 24px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    color: 'white',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    minWidth: '130px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <span className="btn-inner--icon me-2">
                    <i className="fa fa-external-link-alt" style={{ fontSize: '1.1rem' }} />
                  </span>
                  <span className="btn-inner--text">Live Demo</span>
                </Button>
              )}
            </div>
          </div>
        </CardBody>

        <style jsx>{`
          .tech-badge {
            padding: 4px 12px;
            border-radius: 20px;
            color: white;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .btn-github:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.25);
          }
          
          .btn-demo:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 25px rgba(102, 126, 234, 0.4);
          }
          
          .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: left 0.5s;
          }
          
          .project-card:hover::before {
            left: 100%;
          }
          
          @media (max-width: 768px) {
            .project-title {
              font-size: 1.2rem;
            }
            
            .project-actions {
              flex-direction: column;
            }
            
            .project-actions .btn {
              width: 100%;
              margin-bottom: 0.5rem;
            }
            
            .project-icon {
              width: 60px !important;
              height: 60px !important;
              font-size: 1.5rem !important;
            }
          }
        `}</style>
      </Card>
    </div>
  );
};

export default ProjectsCard;
