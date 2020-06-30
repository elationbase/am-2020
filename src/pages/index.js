import React from 'react';
import { Link } from 'gatsby';

import * as Layouts from '../components/layouts';
import Image from '../components/ui/image';
import HtmlHead from '../components/html-head';

const IndexPage = () => (
  <Layouts.Base>
    <HtmlHead title="Home 2" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/project/">Go to project page</Link>
  </Layouts.Base>
);

export default IndexPage;
