import React from 'react';
import { HtmlHead, Layouts } from '../components';

const NotFoundPage = () => (
  <Layouts.Base>
    <HtmlHead title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layouts.Base>
);

export default NotFoundPage;
