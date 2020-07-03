import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/base.css';

const Base = ({ children }) => (
  <>
    <main>{children}</main>
  </>
);

Base.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Base;
