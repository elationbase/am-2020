import React from 'react';
import { commasToArray, i18n } from '../../utils';

const Screens = ({ images }) => {
  return (
    <section>
      <h3>{i18n.t('project.SCREENS')}</h3>
      {commasToArray(images).map((image, index) => (
        <img key={index} src={`../../projects/${image}`} alt="" />
      ))}
    </section>
  );
};

export default Screens;
