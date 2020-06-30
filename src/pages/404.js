import React from 'react';

import * as Layouts from '../components/layouts';
import HtmlHead from '../components/html-head';

const NotFoundPage = () => (
  <Layouts.Base>
    <HtmlHead title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layouts.Base>
);

export default NotFoundPage;
