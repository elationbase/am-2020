import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Logo } from '../';
import { theme } from '../../styles';

const HeaderTag = styled.header`
  background-color: ${theme.palette.dark};
  padding: ${theme.space.s} ${theme.space.l};
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <HeaderTag>
      <h1>
        <Link to="/" title={data.site.siteMetadata.title}>
          <Logo width={80} />
        </Link>
      </h1>
    </HeaderTag>
  );
};

export default Header;
