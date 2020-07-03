import React from 'react';
import { OffsetSectionTag } from '../ui';
import { i18n } from '../../utils';

const Footer = () => (
  <OffsetSectionTag theme="dark" last>
    <footer>
      <p>
        © {new Date().getFullYear()}, {i18n.t('footer.HEAD')}
      </p>
      <p>{i18n.t('footer.SUBHEAD')}</p>
      <p>{i18n.t('footer.TECH')}</p>
      <p>{i18n.t('footer.PHOTO')}</p>
    </footer>
  </OffsetSectionTag>
);

export default Footer;
