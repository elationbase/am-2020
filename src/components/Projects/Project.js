import React from 'react';
import { Link } from 'gatsby';

const Project = ({ data }) => {
  const {
    title,
    acf: { company, project, image_url, image_display },
  } = data;

  if (image_url) {
    return (
      <div className={image_display ? 'grande' : null}>
        <p>{title}</p>
        <p>{company}</p>
        <Link to={project.toLowerCase()}>
          <img src={`/projects/${image_url}`} alt="" />
        </Link>
      </div>
    );
  }

  return null;
};

Project.defaultProps = {
  title: null,
  acf: {
    company: null,
    image_url: null,
    image_display: null,
  },
};

export default Project;
