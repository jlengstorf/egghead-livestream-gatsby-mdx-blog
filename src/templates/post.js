import React from 'react';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-mdx';
import Layout from '../components/layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      excerpt
      code {
        body
      }
    }
  }
`;

const PostTemplate = ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.mdx.frontmatter.title}</title>
      <meta name="description" content={data.mdx.excerpt} />
    </Helmet>
    <h1>{data.mdx.frontmatter.title}</h1>
    <p>by {data.mdx.frontmatter.author}</p>
    <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
    <p>
      <Link to="/">&larr; back to all posts</Link>
    </p>
  </Layout>
);

export default PostTemplate;
