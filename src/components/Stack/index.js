import React from 'react';
import { i18n } from '../../utils';
import { OffsetSectionTag, Type } from '../ui';

const Stack = () => (
  <OffsetSectionTag theme="dark">
    <Type tag="h2" color="light" text={i18n.t('stack.HEAD')} />
    <ul>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.JS')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.REACT')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.REACT_NATIVE')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.VUEJS')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.APOLLO')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.REDUX')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.STYLE_COMPONENTS')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.CSS')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.SASS')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.HTML')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.GIT')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.FIREBASE')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.WEBPACK')} />
      </li>
      <li>
        <Type tag="span" color="light" text={i18n.t('stack.SENTRY')} />
      </li>
    </ul>
  </OffsetSectionTag>
);

export default Stack;
