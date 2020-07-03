import React from 'react';
import styled from 'styled-components';
import { i18n } from '../../utils';
import { Type } from '../ui';
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

const Skill = ({ title, skills }) => (
  <MainLi>
    <Type tag="span" color={theme.palette.soft} text={title.toUpperCase()} />
    <SubUl>
      {skills.map((skill, index) => (
        <li key={index}>
          <Type tag="span" color={theme.palette.lightBlend} text={skill} />
        </li>
      ))}
    </SubUl>
  </MainLi>
);

const Skills = () => (
  <MainUl>
    <Skill
      title={i18n.t('introduction.DESIGN')}
      skills={[
        i18n.t('introduction.SKETCH'),
        i18n.t('introduction.ILLUSTRATOR'),
        i18n.t('introduction.PHOTOSHOP'),
        i18n.t('introduction.SVG'),
      ]}
    />
    <Skill
      title={i18n.t('introduction.CODE')}
      skills={[
        i18n.t('introduction.JS'),
        i18n.t('introduction.JSON'),
        i18n.t('introduction.GRAPHQL'),
        i18n.t('introduction.CSS'),
      ]}
    />
    <Skill
      title={i18n.t('introduction.OPEN_SOURCE')}
      skills={[
        i18n.t('introduction.REACT'),
        i18n.t('introduction.REACT_NATIVE'),
        i18n.t('introduction.VUEJS'),
        i18n.t('introduction.REDUX'),
      ]}
    />
    <Skill
      title={i18n.t('introduction.TEAM')}
      skills={[
        i18n.t('introduction.GIT'),
        i18n.t('introduction.AGILE'),
        i18n.t('introduction.MENTOR'),
        i18n.t('introduction.MONITORING'),
      ]}
    />
  </MainUl>
);

export default Skills;
