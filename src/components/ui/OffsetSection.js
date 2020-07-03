import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const size = '60px';

const OffsetSectionTag = styled.section`
  background-color: ${(props) => (props.theme === 'dark' ? theme.palette.dark : theme.palette.light)};
  transform: skewY(-2deg) translateY(3rem);
  margin-top: ${`-${size}`};
  padding: ${size};
`;

const OnsetSectionTag = styled.div`
  transform: skewY(2deg);
  max-width: ${(props) => (props.full ? null : '800px')};
  margin: auto;
  padding-bottom: ${(props) => (props.end ? null : size)};
`;

const OffsetSection = ({ children, end, full, theme }) => (
  <OffsetSectionTag theme={theme}>
    <OnsetSectionTag end={end} full={full}>
      {children}
    </OnsetSectionTag>
  </OffsetSectionTag>
);

OffsetSection.defaultProps = {
  theme: 'light',
  end: false,
  full: false,
};

export default OffsetSection;
