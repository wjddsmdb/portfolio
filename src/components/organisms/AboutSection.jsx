import React from 'react';
// import ProfileImage from '../atoms/ProfileImage';

function AboutSection() {
  return (
    <section style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
      background: 'white',
      borderRadius: '20px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
      padding: '40px 32px',
      maxWidth: '700px',
      margin: '40px auto',
      minHeight: '320px'
    }}>
      {/* <div style={{ flexShrink: 0 }}>
        <ProfileImage />
      </div> */}
      <div>
        <h2 style={{ marginBottom: '18px', color: '#4A90E2', fontWeight: 700, fontSize: '2rem' }}>About Me</h2>
        <p style={{ color: '#333', fontSize: '1.1rem', lineHeight: 1.7 }}>
          안녕하세요! <b>사용자 경험</b>을 소중히 생각하는  풀스택 개발자가 되고 싶은 <b>정은유</b>입니다.<br/>
          React, Zustand, Vite 등 다양한 기술을 활용해 <b>깔끔하고 직관적인 UI</b>를 만드는 걸 좋아합니다.<br/>
          새로운 도전을 즐기며, <b>GitHub Actions</b>로 자동 배포 경험도 있습니다.<br/>
          함께 성장하는 개발자가 되고 싶어요!
        </p>
      </div>
    </section>
  );
}

export default AboutSection;