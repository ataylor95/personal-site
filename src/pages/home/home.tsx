import React from "react";

import Page from '../../components/page/page';
import ProjectCard from '../../components/project-card/project-card';

import projects from '../../data/projects.json';

const Home: React.FC = () => {
  let projectCards = projects.projects.map(project => {
    return <ProjectCard name={project.name} description={project.description} link={project.link}></ProjectCard>
  });

  return (
    <Page>
      <h2 className="page__main__header">Projects.</h2>
      <div className="home-page__container">
        {projectCards}
      </div>
    </Page>
  );
  }

export default Home;