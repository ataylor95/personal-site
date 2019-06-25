import React from "react";

import Page from '../../components/page/page';
import ProjectCard from '../../components/project-card/project-card';

const Home: React.FC = () => {
    return (
      <Page>
        <h1>Projects</h1>
        <div className="home-page__container">
          <ProjectCard name="Example" description="An example description" link="/"></ProjectCard>
          <ProjectCard name="Example" description="An example description" link="/"></ProjectCard>
          <ProjectCard name="Example" description="An example description" link="/"></ProjectCard>
          <ProjectCard name="Example" description="An example description" link="/"></ProjectCard>
          <ProjectCard name="Example" description="An example description" link="/"></ProjectCard>
          <ProjectCard name="Example" description="An example description" link="/"></ProjectCard>
          <ProjectCard name="Example" description="An example description" link="/"></ProjectCard>
        </div>
      </Page>
    );
  }

export default Home;