import React from 'react';
import { Link } from 'gatsby';
import { HtmlHead, Layouts } from '../components';

const Project = () => (
  <Layouts.Base>
    <HtmlHead title="Project Page" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layouts.Base>
);

export default Project;
