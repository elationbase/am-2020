import React from 'react';
import { i18n } from '../../utils';

const Stack = ({ stacks }) => (
  <section>
    <h3>{i18n.t('project.STACK')}</h3>
    <p>
      {stacks.map((stack, index) => (
        <span key={index} style={{ backgroundColor: 'gray', padding: 16 }}>
          {stack}
        </span>
      ))}
    </p>
  </section>
);

export default Stack;
