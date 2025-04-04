import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyles}>
      <div style={footerContent}>
        <p>&copy; 2025 Paul Kruger | All rights reserved</p>
        <div>
          <a
            href="https://www.linkedin.com/in/paul-christephor-kruger-0b65222b4"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyles}
          >
            LinkedIn
          </a>
          <span> | </span>
          <a
            href="https://github.com/PChris04"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyles}
          >
            GitHub
          </a>
          <span> | </span>
          <a
             href="mailto:paulkruger613@gmail.com"
             style={linkStyles}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

const footerStyles = {
  backgroundColor: '#111',
  color: '#777',
  padding: '1.5rem',
  textAlign: 'center',
  borderTop: '1px solid #00ff99',
  fontSize: '0.9rem',
};

const footerContent = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const linkStyles = {
  color: '#00ffaa',
  textDecoration: 'none',
};

