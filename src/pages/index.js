import React from 'react';
import { Link } from 'gatsby';
import { HtmlHead, Layouts } from '../components';
import Image from '../components/ui/image';

const IndexPage = () => (
  <Layouts.Base>
    <HtmlHead title="hello!" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/eb-private-phonebook/">Go to project page</Link>
  </Layouts.Base>
);

export default IndexPage;
