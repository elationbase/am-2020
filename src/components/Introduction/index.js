import React from 'react';
import { i18n } from '../../utils';
import translation from '../../utils/lang/en';

const Introduction = () => (
  <section>
    <h3>{i18n.t('introduction.HEAD')}</h3>
    <div>
      <p>{i18n.t('introduction.COPY1')}</p>
      <p>{i18n.t('introduction.COPY2')}</p>
      <p>{i18n.t('introduction.COPY3')}</p>
      <p>{i18n.t('introduction.COPY4')}</p>
    </div>

    <ul>
      <li>
        <p>{i18n.t('introduction.DESIGN')}</p>
        <ul>
          <li>{i18n.t('introduction.SKETCH')}</li>
          <li>{i18n.t('introduction.ILLUSTRATOR')}</li>
          <li>{i18n.t('introduction.PHOTOSHOP')}</li>
          <li>{i18n.t('introduction.SVG')}</li>
        </ul>
      </li>
      <li>
        <p>{i18n.t('introduction.CODE')}</p>
        <ul>
          <li>{i18n.t('introduction.JS')}</li>
          <li>{i18n.t('introduction.JSON')}</li>
          <li>{i18n.t('introduction.GRAPHQL')}</li>
          <li>{i18n.t('introduction.CSS')}</li>
        </ul>
      </li>
      <li>
        <p>{i18n.t('introduction.OPEN_SOURCE')}</p>
        <ul>
          <li>{i18n.t('introduction.REACT')}</li>
          <li>{i18n.t('introduction.REACT_NATIVE')}</li>
          <li>{i18n.t('introduction.VUEJS')}</li>
          <li>{i18n.t('introduction.REDUX')}</li>
        </ul>
      </li>
      <li>
        <p>{i18n.t('introduction.TEAM')}</p>
        <ul>
          <li>{i18n.t('introduction.GIT')}</li>
          <li>{i18n.t('introduction.AGILE')}</li>
          <li>{i18n.t('introduction.MENTOR')}</li>
          <li>{i18n.t('introduction.MONITORING')}</li>
        </ul>
      </li>
    </ul>
  </section>
);

export default Introduction;
