import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const setColor = (color) => {
  if (color === 'light') {
    return theme.palette.light;
  } else if (color === 'dark') {
    return theme.palette.dark;
  } else if (!color) {
    return theme.palette.dark;
  }

  return color;
};

const Heading1 = styled.h1`
  font-size: ${theme.fontSize.xxl};
  margin-bottom: ${theme.space.l};
  color: ${(props) => setColor(props.color)};
`;
const Heading2 = styled.h2`
  font-size: ${theme.fontSize.xl};
  margin-bottom: ${theme.space.l};
  color: ${(props) => setColor(props.color)};
`;
const Heading3 = styled.h3`
  font-size: ${theme.fontSize.l};
  margin-bottom: ${theme.space.l};
  color: ${(props) => setColor(props.color)};
`;
const Span = styled.span`
  color: ${(props) => setColor(props.color)};
`;
const Paragraph = styled.p`
  font-weight: ${theme.fontWeight.light};
  margin-bottom: ${theme.space.m};
  color: ${(props) => setColor(props.color)};
`;

const Type = ({ text, tag, color }) => {
  switch (tag) {
    case 'h1':
      return <Heading1 color={color}>{text}</Heading1>;
    case 'h2':
      return <Heading2 color={color}>{text}</Heading2>;
    case 'h1':
      return <Heading3 color={color}>{text}</Heading3>;
    case 'span':
      return <Span color={color}>{text}</Span>;
    default:
      return <Paragraph color={color}>{text}</Paragraph>;
  }
};

Type.defaultProps = {
  tag: 'p',
};

export default Type;
