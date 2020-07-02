import React from 'react';

const Stack = ({ stacks }) => (
  <section>
    <h3>Stack</h3>
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
