import React from 'react';

const Post = ({ pageContext }) => (
  <>
    <h1>{pageContext.title}</h1>
    <p>{pageContext.content}</p>
  </>
);

export default Post;
