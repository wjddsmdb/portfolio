import React from 'react';
import Tag from '../atoms/Tag';

function ProjectCard({ title, description, technologies, image, githubUrl, liveUrl }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: 'white'
    }}>
      {/* <img 
        src={image} 
        alt={title} 
        style={{ 
          width: '100%', 
          height: '200px', 
          objectFit: 'cover', 
          borderRadius: '4px',
          marginBottom: '15px'
        }} 
      /> */}
      <h3 style={{ marginBottom: '10px', color: '#333' }}>{title}</h3>
      <p style={{ marginBottom: '15px', color: '#666', lineHeight: '1.5' }}>{description}</p>
      <div style={{ marginBottom: '15px' }}>
        {technologies.map((tech, i) => (
          <Tag key={i} label={tech} />
        ))}
      </div>
      <div style={{ marginTop: '10px' }}>
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noreferrer" 
          style={{ 
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: '#333',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          GitHub
        </a>
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noreferrer"
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            display: 'inline-block'
          }}
        >
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
