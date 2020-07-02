import React from 'react';
import { commasToArray, i18n } from '../../utils';

const Design = ({ colorPalette, typography }) => (
  <section>
    <h3>{i18n.t('project.DESIGN')}</h3>
    <div>
      <h4>{i18n.t('project.DESIGN')}</h4>
      <div>
        {commasToArray(colorPalette).map((color, index) => (
          <span key={index} style={{ backgroundColor: color, padding: 16 }}>
            {color}
          </span>
        ))}
      </div>
    </div>
    <div>
      <h4>{i18n.t('project.TYPE')}</h4>
      <div>
        <p>{typography}</p>
        <p>{i18n.t('project.CAPITALS')}</p>
        <p>{i18n.t('project.LOWERCASE')}</p>
        <p>{i18n.t('project.NUMBERS')}</p>
      </div>
    </div>
  </section>
);

export default Design;
