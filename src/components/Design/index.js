import React from 'react';
import { commasToArray } from '../../utils';

const Design = ({ colorPalette, typography }) => (
  <section>
    <h3>Design</h3>
    <div>
      <h4>Color Pallete</h4>
      <div>
        {commasToArray(colorPalette).map((color, index) => (
          <span key={index} style={{ backgroundColor: color, padding: 16 }}>
            {color}
          </span>
        ))}
      </div>
    </div>
    <div>
      <h4>Typography</h4>
      <div>
        <p>{typography}</p>
        <p>ABCDEFGHIJKLMNOPQRSTVWXYZ</p>
        <p>abcdefghijklmnopqrstvwxyz</p>
        <p>123456789</p>
      </div>
    </div>
  </section>
);

export default Design;
