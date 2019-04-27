import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import useBlog from '../hooks/use-blog';

export default () => {
  const posts = useBlog();

  return (
    <Layout>
      <h1>The Latest from the Blog</h1>
      {posts.map(post => (
        <article key={post.slug}>
          <h2>
            <Link to={post.slug}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
          <p>Posted by {post.author}</p>
          <p>
            <Link to={post.slug}>Read this post &rarr;</Link>
          </p>
        </article>
      ))}
    </Layout>
  );
};
