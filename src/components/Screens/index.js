import React from 'react';
import { commasToArray } from '../../utils';

const Screens = ({ images }) => {
  return (
    <section>
      <h3>Screens</h3>
      {commasToArray(images).map((image, index) => (
        <img key={index} src={`../../projects/${image}`} alt="" />
      ))}
    </section>
  );
};

export default Screens;
