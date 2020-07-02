import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Logo } from '../';
import { theme } from '../../styles';

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
    <header style={{ backgroundColor: theme.palette.dark }}>
      <h1>
        <Link to="/" title={data.site.siteMetadata.title}>
          <Logo width={80} />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
