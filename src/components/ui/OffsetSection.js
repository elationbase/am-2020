import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/theme';

const size = '80px';

const OffsetSectionTag = styled.section`
  background-color: ${({ theme }) => (theme === 'dark' ? colors.palette.dark : colors.palette.light)};
  transform: skewY(-2deg) translateY(3rem);
  margin-top: ${`-${size}`};
  padding: ${size};
`;

const OnsetSectionTag = styled.div`
  transform: skewY(2deg);
  max-width: ${({ full }) => (full ? null : '800px')};
  margin: auto;
  padding-bottom: ${({ last }) => (last ? null : size)};
`;

const OffsetSection = ({ children, last = false, full = false, theme = 'light' }) => (
  <OffsetSectionTag theme={theme}>
    <OnsetSectionTag last={last} full={full}>
      {children}
    </OnsetSectionTag>
  </OffsetSectionTag>
);

export default OffsetSection;
