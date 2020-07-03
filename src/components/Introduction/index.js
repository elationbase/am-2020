import React from 'react';
import { i18n } from '../../utils';
import { OffsetSectionTag, Type } from '../ui';
import { theme } from '../../styles';
import Skills from './Skills';

const Introduction = () => (
  <OffsetSectionTag theme="dark">
    <Type tag="h2" color={theme.palette.action} text={i18n.t('introduction.HEAD')} />
    {[
      i18n.t('introduction.COPY1'),
      i18n.t('introduction.COPY2'),
      i18n.t('introduction.COPY3'),
      i18n.t('introduction.COPY4'),
    ].map((copy, index) => (
      <Type key={index} color="light" text={copy} />
    ))}
    <Skills />
  </OffsetSectionTag>
);

export default Introduction;
