import React from 'react';
import Tag from '../atoms/Tag';

const skills = ['React', 'Zustand', 'Vite', 'CSS Modules', 'GitHub Actions'];

function SkillList() {
  return (
    <div style={{
      marginTop: '0',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      padding: '28px 24px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: 'center'
    }}>
      <h2 style={{ marginBottom: '18px', color: '#4A90E2', fontWeight: 700, fontSize: '1.5rem' }}>기술 스택</h2>
      <div>
        {skills.map((skill) => (
          <Tag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillList;