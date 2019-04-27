import React from 'react';
import { Link } from 'gatsby';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const Header = styled('header')`
  background: rebeccapurple;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Main = styled('main')`
  margin: 5vw auto;
  max-width: 550px;
`;

const Layout = ({ children }) => (
  <React.Fragment>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          color: #444;
          font-size: 18px;
          margin: 0;
          padding: 0;

          > div {
            margin: 0;
          }
        }
      `}
    />
    <Header>
      <Link to="/">My egghead blog</Link>
      <nav
        css={css`
          margin-top: 0;

          a {
            margin: 0 0.25rem;
            padding: 0.25rem;
          }
        `}
      >
        <Link to="/">Blog</Link>
        <Link to="/about/">About</Link>
      </nav>
    </Header>
    <Main id="content">{children}</Main>
  </React.Fragment>
);

export default Layout;
