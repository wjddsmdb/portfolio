import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>안녕하세요!</h1>
        <h2>저는 경북소프트웨어마이스터고에 재학중인 정은유입니다.</h2>
        <p>
          풀스택 개발자가 되고 싶습니다.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
