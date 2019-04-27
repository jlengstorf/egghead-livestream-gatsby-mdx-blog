import React from 'react';
import styled from '@emotion/styled';

const Aside = styled('div')`
  background: #66339940;
  border: 1px solid rebeccapurple;
  padding: 1rem;
`;

export default ({ children }) => <Aside>{children}</Aside>;
