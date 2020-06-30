import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';
import './base.css';

const Base = ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Designed and Coded with ❤ by Alvaro Montero in 2020.</footer>
      </div>
    </>
  );
};

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
