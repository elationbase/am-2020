import React from 'react';

const Page = ({ pageContext }) => (
  <>
    <h1>{pageContext.title}</h1>
    <p>{pageContext.content}</p>
  </>
);

export default Page;
