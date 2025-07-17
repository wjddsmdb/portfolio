import React from 'react';
import ProjectCard from '../organisms/ProjectCard';
import SearchBar from '../molecules/SearchBar';
import { useProjectStore } from '../../store/projectStore';

const allProjects = [
  {
    title: 'MyShop',
    description: 'React로 만든 쇼핑몰 앱',
    image: '/images/shop.png',
    stack: ['React', 'Context API'],
    link: 'https://github.com/yourname/myshop',
  },
  {
    title: '타이머 앱',
    description: 'React 훅을 활용한 타이머',
    image: '/images/timer.png',
    stack: ['React'],
    link: 'https://github.com/yourname/timer',
  },
];

function Projects() {
  const { search } = useProjectStore();
  const filtered = allProjects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <h2>📁 Projects</h2>
      <SearchBar />
      <div className="grid">
        {filtered.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
