import React from 'react';

const ProjectHeader = ({ mainColor, company, title, url }) => (
  <header style={{ backgroundColor: mainColor }}>
    <h2>{company}</h2>
    <h1>{title}</h1>
    <a href={`//${url}`}>{url}</a>
  </header>
);

export default ProjectHeader;
