import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './Project';
import { OffsetSectionTag } from '../ui';

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressPage {
        edges {
          node {
            id
            title
            acf {
              company
              project
              image_url
              image_display
            }
          }
        }
      }
    }
  `);

  return (
    <OffsetSectionTag full>
      {data.allWordpressPage.edges.map((project) => (
        <Project data={project.node} key={project.node.id} />
      ))}
    </OffsetSectionTag>
  );
};

export default Projects;
