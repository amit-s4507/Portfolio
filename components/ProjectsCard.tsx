import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { ProjectType } from '../types/sections';

const ProjectsCard = ({ name, desc, github, link }: ProjectType) => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <Card
        className="project-card h-100 border-0 shadow-lg"
        style={{
          borderRadius: '16px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        }}
      >
        <CardBody className="p-4 d-flex flex-column h-100">
          {/* Project Header */}
          <div className="project-header mb-3">
            <div
              className="project-icon mb-3"
              style={{
                width: '60px',
                height: '60px',
                background:
                  'linear-gradient(135deg, #00ffff 0%, #0099ff 50%, #9d00ff 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.5rem',
                boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
              }}
            >
              <i className="ni ni-laptop" />
            </div>
            <h3
              className="project-title mb-3"
              style={{
                fontSize: '1.5rem',
                fontWeight: '700',
                color: '#2d3748',
                lineHeight: '1.3',
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
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              {desc}
            </p>
          </div>

          {/* Project Actions */}
          <div className="project-actions mt-auto">
            <div className="d-flex gap-3 flex-wrap">
              {github && (
                <Button
                  className="btn-github"
                  color="dark"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="View on GitHub"
                  style={{
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    minWidth: '120px',
                  }}
                >
                  <span className="btn-inner--icon me-2">
                    <i
                      className="fa fa-github"
                      style={{ fontSize: '1.1rem' }}
                    />
                  </span>
                  <span className="btn-inner--text">GitHub</span>
                </Button>
              )}

              {link && (
                <Button
                  className="btn-demo"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Live Demo"
                  style={{
                    borderRadius: '12px',
                    padding: '12px 20px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    border: 'none',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    minWidth: '120px',
                  }}
                >
                  <span className="btn-inner--icon me-2">
                    <i
                      className="fa fa-external-link-alt"
                      style={{ fontSize: '1.1rem' }}
                    />
                  </span>
                  <span className="btn-inner--text">Live Demo</span>
                </Button>
              )}
            </div>
          </div>
        </CardBody>

        <style>{`
          .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }
          
          .project-card:hover .project-icon {
            transform: scale(1.1) rotate(5deg);
          }
          
          .project-icon {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .btn-github:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
          
          .btn-demo:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
          }
          
          @media (max-width: 768px) {
            .project-title {
              font-size: 1.3rem;
            }
            
            .project-actions {
              flex-direction: column;
            }
            
            .project-actions .btn {
              width: 100%;
            }
          }
        `}</style>
      </Card>
    </Fade>
  );
};

export default ProjectsCard;
