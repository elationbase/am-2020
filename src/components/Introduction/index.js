import React from 'react';
import { createMarkup } from '../../utils';

const Introduction = ({ content }) => (
  <section>
    <h3>Introduction</h3>
    <div dangerouslySetInnerHTML={createMarkup(content)} />
  </section>
);

export default Introduction;
