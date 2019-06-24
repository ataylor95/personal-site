import React from "react";

import Page from '../../components/page/page';
import ProjectCard from '../../components/project-card/project-card';

const Home: React.FC = () => {
    return (
      <Page>
        <div className="home-page">
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