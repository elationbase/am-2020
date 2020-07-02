import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      wordpressSiteMetadata {
        name
      }
    }
  `);
  const {
    wordpressSiteMetadata: { name },
  } = data;

  return (
    <h1>
      <Link to="/">{name}</Link>
    </h1>
  );
};

export default Header;
