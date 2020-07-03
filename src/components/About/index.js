import React from 'react';
import { i18n } from '../../utils';
import { OffsetSectionTag, Type } from '../ui';

const About = () => (
  <OffsetSectionTag>
    <Type tag="h2" theme="dark" text={i18n.t('about.HEAD')} />
    <Type theme="dark" text={i18n.t('about.QUOTE1')} />
  </OffsetSectionTag>
);

export default About;
