import React from 'react';
import styled from 'styled-components';
import { i18n } from '../../utils';
import { OffsetSectionTag, Type } from '../ui';
import { theme } from '../../styles';

const MainUl = styled.ul`
  display: flex;
  margin-top: ${theme.space.xl};
`;
const MainLi = styled.li`
  flex: 1;
`;
const SubUl = styled.li`
  margin-top: ${theme.space.m};
`;

const Introduction = () => (
  <OffsetSectionTag theme="dark">
    <Type tag="h2" color={theme.palette.action} text={i18n.t('introduction.HEAD')} />

    <div>
      <Type color="light" text={i18n.t('introduction.COPY1')} />
      <Type color="light" text={i18n.t('introduction.COPY2')} />
      <Type color="light" text={i18n.t('introduction.COPY3')} />
      <Type color="light" text={i18n.t('introduction.COPY4')} />
    </div>

    <MainUl>
      <MainLi>
        <Type tag="span" color={theme.palette.soft} text={i18n.t('introduction.DESIGN').toUpperCase()} />
        <SubUl>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.SKETCH')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.ILLUSTRATOR')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.PHOTOSHOP')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.SVG')} />
          </li>
        </SubUl>
      </MainLi>
      <MainLi>
        <Type tag="span" color={theme.palette.soft} text={i18n.t('introduction.CODE').toUpperCase()} />
        <SubUl>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.JS')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.JSON')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.GRAPHQL')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.CSS')} />
          </li>
        </SubUl>
      </MainLi>
      <MainLi>
        <Type tag="span" color={theme.palette.soft} text={i18n.t('introduction.OPEN_SOURCE').toUpperCase()} />
        <SubUl>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.REACT')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.REACT_NATIVE')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.VUEJS')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.REDUX')} />
          </li>
        </SubUl>
      </MainLi>
      <MainLi>
        <Type tag="span" color={theme.palette.soft} text={i18n.t('introduction.TEAM').toUpperCase()} />
        <SubUl>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.GIT')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.AGILE')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.MENTOR')} />
          </li>
          <li>
            <Type tag="span" color={theme.palette.lightBlend} text={i18n.t('introduction.MONITORING')} />
          </li>
        </SubUl>
      </MainLi>
    </MainUl>
  </OffsetSectionTag>
);

export default Introduction;
