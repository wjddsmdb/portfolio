import React from "react";
import ProjectCard from "../components/organisms/ProjectCard";
import SearchBar from "../components/molecules/SearchBar";
import { useProjectStore } from "../store/projectStore";
import projectsData from "../data/projects";

function Projects() {
  const { search, setSearch } = useProjectStore();

  const filtered = projectsData.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ 
      padding: '0', 
      width: '100vw', 
      minHeight: '100vh',
      boxSizing: 'border-box'
    }}>
      <div style={{ padding: '20px' }}>
        <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>프로젝트</h1>
      <SearchBar value={search} onChange={setSearch} />
      </div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        width: '100%',
        padding: '0 20px 20px 20px'
      }}>
        {filtered.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
